import { el } from "./dom";

const LATENCY_TARGETS = [
  "https://www.gstatic.com/generate_204",
  "https://cp.cloudflare.com/generate_204",
  "https://www.apple.com/library/test/success.html",
  "https://www.qualcomm.cn/cdn-cgi/trace",
  "https://www.miwifi.com/statics/img/wf_btn_off.png",
  "https://necaptcha.nosdn.127.net/ab7f4275c1744aa28e0a8f3a1c58c532.png",
  "https://perfops.byte-test.com/500b-bench.jpg",
  "https://img.alicdn.com/imgextra/i1/O1CN01xA4P9S1JsW2WEg0e1_!!6000000001084-2-tps-2880-560.png",
];

const DOWNLOAD_SOURCES = [
  "https://speed.cloudflare.com/__down?bytes=1000000000",
  "https://cachefly.cachefly.net/100mb.test",
  "https://db.laomoe.com/data-waster-dummy?1",
  "https://l.867678.xyz/speedtest",
  "https://s.867678.xyz/speedtest",
  "https://o.867678.xyz/speedtest",
];

const UPLOAD_URL = "https://speed.cloudflare.com/__up";
const UPLOAD_STREAMS = 4;

const TEST_MS = 8_000;
const UPLOAD_CHUNK = 512 * 1024;

const isAbort = (error: unknown): boolean =>
  error instanceof DOMException
    ? error.name === "AbortError"
    : error instanceof Error && error.name === "AbortError";

const mbps = (bytes: number, elapsedMs: number): string => {
  const seconds = elapsedMs / 1000;
  if (bytes <= 0 || seconds <= 0) return "Failed";
  return `${((bytes * 8) / 1e6 / seconds).toFixed(2)} Mbps`;
};

const liveSpeed = (
  element: HTMLElement,
  bytes: () => number,
  started: number,
): number =>
  window.setInterval(() => {
    const elapsed = performance.now() - started;
    if (elapsed > 500) element.textContent = mbps(bytes(), elapsed);
  }, 150);

const pingRound = () =>
  Promise.allSettled(
    LATENCY_TARGETS.map(async (url) => {
      const start = performance.now();
      await fetch(url, { mode: "no-cors", cache: "no-store" });
      return performance.now() - start;
    }),
  );

const testPing = async (element: HTMLElement): Promise<void> => {
  element.textContent = "Testing latency...";
  await pingRound();
  const samples = (await pingRound()).flatMap((result) =>
    result.status === "fulfilled" ? [result.value] : [],
  );
  element.textContent = samples.length
    ? `${Math.min(...samples).toFixed(1)} ms`
    : "Error";
};

const testDownload = async (element: HTMLElement): Promise<void> => {
  element.textContent = "Connecting...";
  const controller = new AbortController();
  const started = performance.now();
  let totalBytes = 0;
  const timer = liveSpeed(element, () => totalBytes, started);
  const stop = window.setTimeout(() => controller.abort(), TEST_MS);

  const pull = async (url: string): Promise<void> => {
    const response = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",
    });
    if (!response.ok || !response.body) return;
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value?.byteLength ?? 0;
    }
  };

  try {
    await Promise.allSettled(DOWNLOAD_SOURCES.map(pull));
  } catch (error) {
    if (!isAbort(error)) throw error;
  } finally {
    clearTimeout(stop);
    clearInterval(timer);
    element.textContent = mbps(totalBytes, performance.now() - started);
  }
};

const testUpload = async (element: HTMLElement): Promise<void> => {
  element.textContent = "Connecting...";
  const controller = new AbortController();
  const started = performance.now();
  let totalBytes = 0;
  const chunk = new Uint8Array(UPLOAD_CHUNK);
  const timer = liveSpeed(element, () => totalBytes, started);
  const stop = window.setTimeout(() => controller.abort(), TEST_MS);

  const push = async (): Promise<void> => {
    while (!controller.signal.aborted) {
      const response = await fetch(UPLOAD_URL, {
        method: "POST",
        body: chunk,
        signal: controller.signal,
        cache: "no-store",
      });
      if (!response.ok) return;
      totalBytes += chunk.byteLength;
    }
  };

  try {
    await Promise.allSettled(
      Array.from({ length: UPLOAD_STREAMS }, () => push()),
    );
  } catch (error) {
    if (!isAbort(error)) throw error;
  } finally {
    clearTimeout(stop);
    clearInterval(timer);
    element.textContent = mbps(totalBytes, performance.now() - started);
  }
};

export const initSpeed = (): void => {
  const button = el<HTMLButtonElement>("run-speedtest");
  const latency = el("latency");
  const download = el("download-speed");
  const upload = el("upload-speed");
  if (!button || !latency || !download || !upload) return;
  if (button.dataset.bound === "true") return;
  button.dataset.bound = "true";

  button.addEventListener("click", async () => {
    if (button.disabled) return;
    button.disabled = true;
    try {
      await testPing(latency);
      await testDownload(download);
      await testUpload(upload);
    } catch (error) {
      console.error("Speedtest failed:", error);
    } finally {
      button.disabled = false;
    }
  });
};
