import { set } from "./dom";

const testH3 = async (): Promise<void> => {
  set("h3", "Testing...");

  if (typeof performance.getEntriesByName !== "function") {
    set("h3", "Not available");
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
      set("h3", "Supported (HTTP/3)");
    } else if (protocol) {
      set("h3", `Not negotiated (${protocol})`);
    } else {
      set("h3", "Not available");
    }
  } catch {
    set("h3", "Test failed");
  }
};

export const initInfo = (): void => {
  set("user-agent", navigator.userAgent);
  set("language", navigator.language);
  set(
    "timezone",
    Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
  );
  void testH3();
};
