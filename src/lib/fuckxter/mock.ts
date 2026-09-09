import type { FeedTab, FeedUser, Post } from "./types";

export const CURRENT_USER: FeedUser = {
  id: "u-mo",
  name: "Mo",
  handle: "mo",
  verified: true,
};

/** 关注列表：mock「关注」tab 的数据来源，后端就绪后由关系数据替换 */
export const FOLLOWING = new Set(["awa", "nekonium", "answer42", "turingscat"]);

const now = Date.now();
const minutesAgo = (m: number) => new Date(now - m * 60_000).toISOString();

export const MOCK_TIMELINE: Post[] = [
  {
    id: "p-001",
    author: { id: "u-awa", name: "阿瓦", handle: "awa", verified: true },
    text: "把导航栏和信息流写完了，剩下的明天再说。今天是充实的一天（并没有）。",
    createdAt: minutesAgo(8),
    stats: { replies: 3, reposts: 1, likes: 24 },
  },
  {
    id: "p-002",
    author: { id: "u-42", name: "42号程序员", handle: "answer42" },
    text: "程序员三大谎言：\n马上就好。\n这是最后一个 bug。\n我看过文档了。",
    createdAt: minutesAgo(26),
    stats: { replies: 41, reposts: 88, likes: 512 },
  },
  {
    id: "p-003",
    author: { id: "u-neko", name: "赛博猫娘", handle: "nekonium" },
    text: "猫：你起来干嘛，键盘是我的床。",
    createdAt: minutesAgo(64),
    stats: { replies: 12, reposts: 6, likes: 230 },
    media: {
      alt: "一只躺在键盘上的猫",
      emoji: "🐈",
      gradient: ["#312e81", "#6d28d9"],
    },
  },
  {
    id: "p-004",
    author: { id: "u-moyu", name: "摸鱼大师", handle: "moyu_master" },
    text: "上班摸鱼被老板抓到，我说我在做用户调研。",
    createdAt: minutesAgo(130),
    stats: { replies: 8, reposts: 15, likes: 341 },
  },
  {
    id: "p-005",
    author: { id: "u-caff", name: "咖啡因依赖者", handle: "caffdep" },
    text: "第 4 杯咖啡下肚，我现在能听见 WiFi 的声音。",
    createdAt: minutesAgo(200),
    stats: { replies: 5, reposts: 2, likes: 97 },
  },
  {
    id: "p-006",
    author: {
      id: "u-turing",
      name: "图灵的猫",
      handle: "turingscat",
      verified: true,
    },
    text: "薛定谔说我养的猫既在睡觉又在拆家，直到我睁开眼的那一刻。",
    createdAt: minutesAgo(320),
    stats: { replies: 19, reposts: 44, likes: 623 },
    media: {
      alt: "深夜里睁眼的黑猫",
      emoji: "🐈‍⬛",
      gradient: ["#0f172a", "#334155"],
    },
  },
  {
    id: "p-007",
    author: { id: "u-awa", name: "阿瓦", handle: "awa", verified: true },
    text: "今日感悟：CSS 不是难，是它有自己的想法。",
    createdAt: minutesAgo(420),
    stats: { replies: 27, reposts: 61, likes: 480 },
  },
  {
    id: "p-008",
    author: { id: "u-chain", name: "链上超人", handle: "chainbro" },
    text: "Web3 改变世界（指改了我的世界线，钱包空了）。",
    createdAt: minutesAgo(540),
    stats: { replies: 33, reposts: 12, likes: 156 },
  },
  {
    id: "p-009",
    author: { id: "u-42", name: "42号程序员", handle: "answer42" },
    text: "重构前的代码：能跑。\n重构后的代码：也“能跑”。",
    createdAt: minutesAgo(720),
    stats: { replies: 14, reposts: 29, likes: 388 },
  },
  {
    id: "p-010",
    author: { id: "u-neko", name: "赛博猫娘", handle: "nekonium" },
    text: "深夜写真。你的代码写完了吗？猫已经睡了。",
    createdAt: minutesAgo(1500),
    stats: { replies: 9, reposts: 3, likes: 205 },
    media: {
      alt: "月亮下睡觉的猫",
      emoji: "🌙",
      gradient: ["#1e1b4b", "#0e7490"],
    },
  },
  {
    id: "p-011",
    author: { id: "u-moyu", name: "摸鱼大师", handle: "moyu_master" },
    text: "带薪拉屎，打工人最后的倔强。",
    createdAt: minutesAgo(1580),
    stats: { replies: 52, reposts: 18, likes: 731 },
  },
  {
    id: "p-012",
    author: { id: "u-caff", name: "咖啡因依赖者", handle: "caffdep" },
    text: "咖啡因半衰期 5 小时，所以我 24 小时都在半衰期里。",
    createdAt: minutesAgo(1900),
    stats: { replies: 6, reposts: 9, likes: 174 },
  },
  {
    id: "p-013",
    author: {
      id: "u-turing",
      name: "图灵的猫",
      handle: "turingscat",
      verified: true,
    },
    text: "给 AI 看了一张猫的照片，它说是狗。图灵测试通过，AI 无罪。",
    createdAt: minutesAgo(2900),
    stats: { replies: 21, reposts: 37, likes: 509 },
  },
  {
    id: "p-014",
    author: { id: "u-awa", name: "阿瓦", handle: "awa", verified: true },
    text: "上线成功！我说的不是代码，是我准时下班了。",
    createdAt: minutesAgo(3550),
    stats: { replies: 11, reposts: 7, likes: 466 },
  },
];

export function timelineFor(tab: FeedTab): Post[] {
  if (tab === "following") {
    return MOCK_TIMELINE.filter((p) => FOLLOWING.has(p.author.handle));
  }
  return MOCK_TIMELINE;
}
