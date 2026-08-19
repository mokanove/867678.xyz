import { initInfo } from "./clientinfo";
import { initIp } from "./ipchecker";
import { initSpeed } from "./speedtest";

const boot = () => {
  if (!document.getElementById("run-speedtest")) return;
  initInfo();
  initIp();
  initSpeed();
};

document.addEventListener("astro:page-load", boot);
