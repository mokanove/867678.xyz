import { setText } from "./dom";

const IPINFO_TOKEN = "eee846770ad167";
const IPINFO_LITE = `https://api.ipinfo.io/lite/me?token=${IPINFO_TOKEN}`;
const IPINFO_LITE_V6 = `https://v6.api.ipinfo.io/lite/me?token=${IPINFO_TOKEN}`;

interface IpinfoLite {
  ip?: string;
  asn?: string;
  as_name?: string;
  asname?: string;
  country?: string;
  city?: string;
}

const json = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.json() as Promise<T>;
};

const asNameOf = (data: IpinfoLite): string =>
  data.as_name || data.asname || "Unavailable";

const loadIpinfo = async (
  url: string,
  ids: { ip: string; asn: string; asname: string },
  label: { ip: string; asn: string; asname: string },
): Promise<string | undefined> => {
  try {
    const data = await json<IpinfoLite>(url);
    setText(ids.ip, `${label.ip}: ${data.ip ?? "Unavailable"}`);
    setText(ids.asn, `${label.asn}: ${data.asn ?? "Unavailable"}`);
    setText(ids.asname, `${label.asname}: ${asNameOf(data)}`);
    return data.city || data.country;
  } catch {
    setText(ids.ip, `${label.ip}: Unavailable`);
    setText(ids.asn, `${label.asn}: Unavailable`);
    setText(ids.asname, `${label.asname}: Unavailable`);
    return undefined;
  }
};

const loadIpip = async (): Promise<void> => {
  try {
    const response = await fetch("https://myip.ipip.net/");
    if (!response.ok) throw new Error(String(response.status));
    const text = await response.text();
    const match = text.match(/当前 IP：\s*(\S+).*?来自于：\s*(.+)/);
    if (!match) throw new Error("Unexpected ipip.net response");
    setText("ipip-ip", `IP: ${match[1]}`);
    setText("ipip-location", `Location: ${match[2].trim()}`);
  } catch {
    setText("ipip-ip", "IP: Unavailable");
    setText("ipip-location", "Location: Unavailable");
  }
};

const loadIpify = async (): Promise<void> => {
  try {
    const data = await json<{ ip?: string }>(
      "https://api64.ipify.org/?format=json",
    );
    if (!data.ip) {
      setText("ipify-preferred", "Preferred: Unavailable");
      return;
    }
    const family = data.ip.includes(":") ? "IPv6" : "IPv4";
    setText("ipify-preferred", `Preferred: ${family}`);
  } catch {
    setText("ipify-preferred", "Preferred: Unavailable");
  }
};

export const initIp = (): void => {
  void (async () => {
    const [v4Place, v6Place] = await Promise.all([
      loadIpinfo(
        IPINFO_LITE,
        { ip: "ipinfo-v4", asn: "ipinfo-asn4", asname: "ipinfo-asname4" },
        { ip: "IPv4", asn: "v4ASN", asname: "v4ASName" },
      ),
      loadIpinfo(
        IPINFO_LITE_V6,
        { ip: "ipinfo-v6", asn: "ipinfo-asn6", asname: "ipinfo-asname6" },
        { ip: "IPv6", asn: "v6ASN", asname: "v6ASName" },
      ),
    ]);
    setText(
      "ipinfo-location",
      `Location: ${v4Place || v6Place || "Unavailable"}`,
    );
  })();

  void loadIpip();
  void loadIpify();
};
