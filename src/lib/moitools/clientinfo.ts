import { setText } from "./dom";

const testHttp3 = async (): Promise<void> => {
  setText("h3", "Testing...");

  if (typeof performance.getEntriesByName !== "function") {
    setText("h3", "Not available");
    return;
  }

  try {
    let protocol = "";

    for (let attempt = 0; attempt < 2; attempt++) {
      const probeUrl = "https://867678.xyz/favicon.svg";
      await fetch(probeUrl, { cache: "no-store" });
      const entry = performance
        .getEntriesByName(new URL(probeUrl, location.href).href, "resource")
        .at(-1) as PerformanceResourceTiming | undefined;
      protocol = entry?.nextHopProtocol?.toLowerCase() || "";
    }

    if (protocol === "h3" || protocol.startsWith("h3-")) {
      setText("h3", "Supported (HTTP/3)");
    } else if (protocol) {
      setText("h3", `Not negotiated (${protocol})`);
    } else {
      setText("h3", "Not available");
    }
  } catch {
    setText("h3", "Test failed");
  }
};

export const initClientInfo = (): void => {
  setText("user-agent", navigator.userAgent);
  setText("language", navigator.language);
  setText(
    "timezone",
    Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
  );
  void testHttp3();
};
