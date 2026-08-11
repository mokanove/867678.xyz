import { set } from "./dom";

interface IpJson {
  ip?: string;
  city?: string;
  asn?: string;
}

const getJson = async (url: string): Promise<IpJson> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
};

const getIpip = async (): Promise<{ ip: string; location: string }> => {
  const response = await fetch("https://myip.ipip.net/");
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const text = await response.text();
  const match = text.match(/当前 IP：\s*(\S+).*?来自于：\s*(.+)/);
  if (!match) throw new Error("Unexpected ipip.net response");

  return { ip: match[1], location: match[2].trim() };
};

export const initIp = (): void => {
  let hasLocation = false;
  const setCity = (city?: string): void => {
    if (!hasLocation && city) {
      hasLocation = true;
      set("ipinfo-location", `Location: ${city}`);
    }
  };

  const v4Request = getJson(
    "https://api.ipinfo.io/lite/me?token=eee846770ad167",
  );
  const v6Request = getJson("https://v6.ipinfo.io/json");

  void v4Request
    .then((data) => {
      set("ipinfo-v4", `IPv4: ${data.ip || "Unavailable"}`);
      set("ipinfo-asn", `ASN: ${data.asn || "Unavailable"}`);
      setCity(data.city);
    })
    .catch(() => {
      set("ipinfo-v4", "IPv4: Unavailable");
      set("ipinfo-asn", "ASN: Unavailable");
    });

  void v6Request
    .then((data) => {
      set("ipinfo-v6", `IPv6: ${data.ip || "Unavailable"}`);
      setCity(data.city);
    })
    .catch(() => set("ipinfo-v6", "IPv6: Unavailable"));

  void Promise.allSettled([v4Request, v6Request]).then(() => {
    if (!hasLocation) set("ipinfo-location", "Location: Unavailable");
  });

  void getIpip()
    .then((data) => {
      set("ipip-ip", `IP: ${data.ip}`);
      set("ipip-location", `Location: ${data.location}`);
    })
    .catch(() => {
      set("ipip-ip", "IP: Unavailable");
      set("ipip-location", "Location: Unavailable");
    });

  void getJson("https://api64.ipify.org/?format=json")
    .then((data) => {
      const preferred = data.ip
        ? data.ip.includes(":")
          ? "IPv6"
          : "IPv4"
        : "Unavailable";
      set("ipify-preferred", `Preferred: ${preferred}`);
    })
    .catch(() => set("ipify-preferred", "Preferred: Unavailable"));
};
