import { setText } from "./dom";

interface IpJson {
  ip?: string;
  city?: string;
  asn?: string;
}

const fetchJson = async (url: string): Promise<IpJson> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
};

const fetchIpip = async (): Promise<{ ip: string; location: string }> => {
  const response = await fetch("https://myip.ipip.net/");
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const text = await response.text();
  const match = text.match(/当前 IP：\s*(\S+).*?来自于：\s*(.+)/);
  if (!match) throw new Error("Unexpected ipip.net response");

  return { ip: match[1], location: match[2].trim() };
};

export const initIpChecker = (): void => {
  let hasLocation = false;
  const setFirstLocation = (city?: string): void => {
    if (!hasLocation && city) {
      hasLocation = true;
      setText("ipinfo-location", `Location: ${city}`);
    }
  };

  const v4Request = fetchJson(
    "https://api.ipinfo.io/lite/me?token=eee846770ad167",
  );
  const v6Request = fetchJson("https://v6.ipinfo.io/json");

  void v4Request
    .then((data) => {
      setText("ipinfo-v4", `IPv4: ${data.ip || "Unavailable"}`);
      setText("ipinfo-asn", `ASN: ${data.asn || "Unavailable"}`);
      setFirstLocation(data.city);
    })
    .catch(() => {
      setText("ipinfo-v4", "IPv4: Unavailable");
      setText("ipinfo-asn", "ASN: Unavailable");
    });

  void v6Request
    .then((data) => {
      setText("ipinfo-v6", `IPv6: ${data.ip || "Unavailable"}`);
      setFirstLocation(data.city);
    })
    .catch(() => setText("ipinfo-v6", "IPv6: Unavailable"));

  void Promise.allSettled([v4Request, v6Request]).then(() => {
    if (!hasLocation) setText("ipinfo-location", "Location: Unavailable");
  });

  void fetchIpip()
    .then((data) => {
      setText("ipip-ip", `IP: ${data.ip}`);
      setText("ipip-location", `Location: ${data.location}`);
    })
    .catch(() => {
      setText("ipip-ip", "IP: Unavailable");
      setText("ipip-location", "Location: Unavailable");
    });

  void fetchJson("https://api64.ipify.org/?format=json")
    .then((data) => {
      const preferred = data.ip
        ? data.ip.includes(":")
          ? "IPv6"
          : "IPv4"
        : "Unavailable";
      setText("ipify-preferred", `Preferred: ${preferred}`);
    })
    .catch(() => setText("ipify-preferred", "Preferred: Unavailable"));
};
