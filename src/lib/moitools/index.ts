import { initDns } from "./dnsleak";
import { initInfo } from "./clientinfo";
import { initIp } from "./ipchecker";
import { initSpeed, cancelActiveSpeedtest } from "./speedtest";
import { initWebrtc } from "./webrtc";
import { enqueueBackgroundNetworkTask } from "./network";

// 客户端路由离开时终止测速并立即放行后台任务；
// 否则测速窗口会拖着僵尸请求再跑十几秒，返回本页时所有面板都在等它。
document.addEventListener("astro:before-swap", cancelActiveSpeedtest);

// 每次进入页面都会排一份后台任务；离开再返回时队列里会新旧叠加，
// 用代数让旧实例的任务自动跳过，只保留最新一次的。
let bootGeneration = 0;

const boot = () => {
  if (!document.getElementById("run-speedtest")) return;
  const generation = ++bootGeneration;
  initInfo();
  const ipRequests = initIp();
  initSpeed();
  enqueueBackgroundNetworkTask(async (signal) => {
    if (generation !== bootGeneration) return;
    await ipRequests;
    if (generation !== bootGeneration) return;
    await initWebrtc(signal);
  });
  enqueueBackgroundNetworkTask(async (signal) => {
    if (generation !== bootGeneration) return;
    await initDns(signal);
  });
};

document.addEventListener("astro:page-load", boot);
