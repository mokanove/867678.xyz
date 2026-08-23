import { initDns } from "./dnsleak";
import { initInfo } from "./clientinfo";
import { initIp } from "./ipchecker";
import { initSpeed } from "./speedtest";
import { initWebrtc } from "./webrtc";

const boot = () => {
  if (!document.getElementById("run-speedtest")) return;
  initInfo();
  initIp();
  initSpeed();
  initWebrtc();
  initDns();
};

document.addEventListener("astro:page-load", boot);
