import { initDns } from "./dnsleak";
import { initInfo } from "./clientinfo";
import { initIp } from "./ipchecker";
import { initSpeed } from "./speedtest";
import { initWebrtc } from "./webrtc";
import { enqueueBackgroundNetworkTask } from "./network";

const boot = () => {
  if (!document.getElementById("run-speedtest")) return;
  initInfo();
  const ipRequests = initIp();
  initSpeed();
  enqueueBackgroundNetworkTask(async (signal) => {
    await ipRequests;
    await initWebrtc(signal);
  });
  enqueueBackgroundNetworkTask(initDns);
};

document.addEventListener("astro:page-load", boot);
