const LATENCY_TARGETS = [
  "https://www.gstatic.com/generate_204",
  "https://cp.cloudflare.com/generate_204",
  "https://www.apple.com/library/test/success.html",
  "https://www.qualcomm.cn/cdn-cgi/trace",
  "https://www.miwifi.com/statics/img/wf_btn_off.png",
  "https://necaptcha.nosdn.127.net/ab7f4275c1744aa28e0a8f3a1c58c532.png",
  "https://perfops.byte-test.com/500b-bench.jpg",
  "https://img.alicdn.com/imgextra/i1/O1CN01xA4P9S1JsW2WEg0e1_!!6000000001084-2-tps-2880-560.png?0.47177139890326214",
];

const DOWNLOAD_SOURCES = [
  "https://speed.cloudflare.com/__down?bytes=1000000000",
  "https://cachefly.cachefly.net/100mb.test",
  "https://db.laomoe.com/data-waster-dummy?1",
  "https://l.867678.xyz/speedtest",
  "https://s.867678.xyz/speedtest",
  "https://o.867678.xyz/speedtest",
];

const TEST_DURATION = 10_000;

const need = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Missing #${id}`);
  return element as T;
};

const testPing = async (element: HTMLElement): Promise<void> => {
  element.textContent = "Testing latency...";

  const round = (): Promise<PromiseSettledResult<number>[]> =>
    Promise.allSettled(
      LATENCY_TARGETS.map(async (url) => {
        const start = performance.now();
        await fetch(url, { mode: "no-cors", cache: "no-store" });
        return performance.now() - start;
      }),
    );

  await round();
  const secondRound = await round();
  const samples = secondRound.flatMap((result) =>
    result.status === "fulfilled" ? [result.value] : [],
  );

  element.textContent = samples.length
    ? `${Math.min(...samples).toFixed(1)} ms`
    : "Error";
};

const testDown = async (element: HTMLElement): Promise<void> => {
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

  const pull = async (url: string): Promise<void> => {
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
    await Promise.allSettled(DOWNLOAD_SOURCES.map(pull));
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

export const initSpeed = (): void => {
  const button = need<HTMLButtonElement>("sis");
  const latency = need<HTMLElement>("latency");
  const download = need<HTMLElement>("download-speed");
  let isTesting = false;

  button.addEventListener("click", async () => {
    if (isTesting) return;

    isTesting = true;
    button.disabled = true;
    try {
      await testPing(latency);
      await testDown(download);
    } catch (error) {
      console.error("Something went wrong:", error);
    } finally {
      isTesting = false;
      button.disabled = false;
    }
  });
};
