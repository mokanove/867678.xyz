const LATENCY_TARGETS = [
  "https://www.gstatic.com/generate_204",
  "https://cp.cloudflare.com/generate_204",
  "https://www.apple.com/library/test/success.html",
  "https://www.miwifi.com/statics/img/wf_btn_off.png",
  "https://necaptcha.nosdn.127.net/ab7f4275c1744aa28e0a8f3a1c58c532.png",
  "https://perfops.byte-test.com/500b-bench.jpg",
  "https://www.qualcomm.cn/cdn-cgi/trace",
  "https://1785339748974-2i01sflm4t307ou2.dns-detect.alicdn.com/api/detect/DescribeDNSLookup?cb=window.__foxact_jsonp_callbacks__SECRET_INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.__1785339748974_08451156999932685__",
];

const DOWNLOAD_SOURCES = [
  "https://speed.cloudflare.com/__down?bytes=1000000000",
  "https://cachefly.cachefly.net/100mb.test",
  "https://l.867678.xyz/speedtest",
];

const TEST_DURATION = 10_000;

const requireElement = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Missing #${id}`);
  return element as T;
};

const testLatency = async (element: HTMLElement): Promise<void> => {
  element.textContent = "Testing latency...";

  const runRound = (): Promise<PromiseSettledResult<number>[]> =>
    Promise.allSettled(
      LATENCY_TARGETS.map(async (url) => {
        const start = performance.now();
        await fetch(url, { mode: "no-cors", cache: "no-store" });
        return performance.now() - start;
      }),
    );

  await runRound();
  const secondRound = await runRound();
  const samples = secondRound.flatMap((result) =>
    result.status === "fulfilled" ? [result.value] : [],
  );

  element.textContent = samples.length
    ? `${Math.min(...samples).toFixed(1)} ms`
    : "Error";
};

const testDownload = async (element: HTMLElement): Promise<void> => {
  element.textContent = "Connecting...";

  const controller = new AbortController();
  const startTime = performance.now();
  let totalBytes = 0;

  const timer = setInterval(() => {
    const seconds = (performance.now() - startTime) / 1000;
    if (seconds > 0.5) {
      element.textContent = `${((totalBytes * 8) / 1e6 / seconds).toFixed(2)} Mbps`;
    }
  }, 150);

  const download = async (url: string): Promise<void> => {
    const response = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error("Response body is unavailable");

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) totalBytes += value.length;
    }
  };

  const abortTimer = setTimeout(() => controller.abort(), TEST_DURATION);

  try {
    await Promise.allSettled(DOWNLOAD_SOURCES.map(download));
  } finally {
    clearTimeout(abortTimer);
    clearInterval(timer);
    const seconds = (performance.now() - startTime) / 1000;
    element.textContent =
      totalBytes > 0
        ? `${((totalBytes * 8) / 1e6 / seconds).toFixed(2)} Mbps`
        : "Failed";
  }
};

export const initSpeedtest = (): void => {
  const button = requireElement<HTMLButtonElement>("sis");
  const latency = requireElement<HTMLElement>("latency");
  const download = requireElement<HTMLElement>("download-speed");
  let isTesting = false;

  button.addEventListener("click", async () => {
    if (isTesting) return;

    isTesting = true;
    button.disabled = true;
    try {
      await testLatency(latency);
      await testDownload(download);
    } catch (error) {
      console.error("Something went wrong:", error);
    } finally {
      isTesting = false;
      button.disabled = false;
    }
  });
};
