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
    id: "p-101",
    author: { id: "u-awa", name: "阿瓦", handle: "awa", verified: true },
    text: "把信息流重构成瀑布流花了整整一个周末，踩的坑比写的代码还多，专门开一帖记录一下。一开始我用了 CSS 多列布局，就是 columns 那一套，三行配置看瀑布流就成了，美滋滋。结果接入无限滚动的第一天就翻车：每次追加新帖子，浏览器都会把所有列重新平衡一遍，用户眼睁睁看着已经读了一半的帖子在列与列之间跳来跳去，像有人在旁边洗牌。规范里写了，无高度约束的多列容器天生就是这个行为，没得关。于是推翻重来，改成 JS 分列：渲染层维护 N 个列容器，每来一页数据就把帖子塞进当前最矮的那一列，列高用 offsetHeight 现场量。虽然每次测量都会强制回流，但几十条帖子的量级完全可以忽略。第二个坑是交叉观察器的死区：IntersectionObserver 只在交叉状态变化时回调，如果首屏内容太短，哨兵元素一直留在触发范围里，状态永远不变，回调永远不来，信息流就安静地停在第一页，用户还以为网站断了。现在的方案是每次追加完都主动检查哨兵位置，不够一屏就继续补页，直到撑出滚动条为止。最后一个坑是断点切换：窗口从两列拖到四列时要把帖子按顺序重新分配，别忘了搜索结果头这类整行元素不能塞进列里。瀑布流没有银弹，只有回流、测量和一点点耐心。",
    createdAt: minutesAgo(15),
    stats: { replies: 57, reposts: 132, likes: 1024 },
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
    id: "p-102",
    author: { id: "u-42", name: "42号程序员", handle: "answer42" },
    text: "《代码评审语录》第一集，都是真实事件改编。看到一行注释写着「临时方案，下周一重写」，git blame 一查，三年前写的，作者已经升职去别的部门了。有个同事把 try catch 嵌了七层，最内层 catch 的全部内容是打印一个笑脸，问就是「出错的时候看到笑脸会心情好一点」。变量名叫 data2，因为 data1 已经存在了，而 data 是不敢动的，动过的人已经离职了。函数名叫 doSomething，唯一参数名叫 flag，返回值是 undefined，注释只有一句「你猜」。最绝的是一段 if 判断了八种设备型号做适配，第八种叫「其他」，而世界上显然不止八种设备。我问他为什么不抽象成配置表，他说当时时间紧。我又看了提交记录，这个「临时」判断是两年前提交的，期间被复制粘贴到了四个仓库。所以说代码和人有一个能跑就行，他们显然选择让代码一直跑，把人熬到跑路为止。评审意见我最后只写了一句：LGTM，祝下一位维护者好运。",
    createdAt: minutesAgo(210),
    stats: { replies: 96, reposts: 210, likes: 1873 },
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
    id: "p-103",
    author: { id: "u-moyu", name: "摸鱼大师", handle: "moyu_master" },
    text: "带薪摸鱼的一百种姿势（经验分享帖，建议收藏）。第一式：开一个终端窗口让 AI 跑任务，屏幕上滚动的日志天然自带「我在深度工作」的气场，实际上是模型在干活，我在刷手机，偶尔还要对着屏幕皱眉点头，营造审阅的假象。第二式：把周报写成论文，摘要、引言、实验、结论一个不少，参考文献列出上周所有没开完的会，领导看不懂但大受震撼，通过率百分之百。第三式：会议里持续点头，适时说「这个思路很有意思」，全程零贡献但存在感拉满，散会前再补一句「我补充一点」，然后重复别人刚说过的话。第四式：用测网速的名义光明正大盯着测速图表看十分钟，看完还得感叹一句「今天下行不太行」，专业感直接拉满。第五式：把工位整理得极度整洁，让人以为你刚忙完一轮大cleanup，实际上只是把乱的东西藏进了抽屉。我摸鱼十年，最大的心得是：摸鱼不是不干活，而是把八小时的活压缩到两小时干完，剩下六小时用来研究怎么看起来一直在干活。这门艺术没有毕业，只有精进。",
    createdAt: minutesAgo(550),
    stats: { replies: 214, reposts: 388, likes: 4096 },
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
    id: "p-104",
    author: {
      id: "u-turing",
      name: "图灵的猫",
      handle: "turingscat",
      verified: true,
    },
    text: "深夜观察日记，全程真实。凌晨一点，猫跳上键盘，精确踩中 Ctrl+C，把一个半成品文件覆盖保存了，git status 从此再没干净过。凌晨两点，它趴在路由器上睡觉，全屋 WiFi 掉线，我重启了光猫、重置了 DNS、重装了网卡驱动，排查四十分钟后才发现凶手，而它睡得很沉，尾巴正好盖住重启键。凌晨三点，我把笔记本电脑合上，它立刻开始挠门，声音凄惨，仿佛在抗议机房断电。凌晨四点，它占领了我的椅子，我只好站着写代码，顺便理解了为什么程序员站姿工作法突然流行。凌晨五点，天亮了，它跳下椅子去吃早饭，留下满屏乱码。我盯着那些乱码看了很久，突然意识到其中一段看起来像合法的 Python。跑了一下，还真能运行，输出是一只猫的 ASCII 画。薛定谔说观测会改变系统状态，我家这只进一步证明：观测者也会被系统改变——比如我现在打字会下意识避开键盘左上角，因为那里已经被正式划入猫的领土。",
    createdAt: minutesAgo(1520),
    stats: { replies: 88, reposts: 156, likes: 2300 },
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
    id: "p-105",
    author: { id: "u-neko", name: "赛博猫娘", handle: "nekonium" },
    text: "猫娘的键盘宣言：人类总以为键盘是打字工具，错，大错特错。键盘的正确用途按优先级排列如下。第一，暖床，尤其是刚跑完编译的 CPU 附近区域，余温恰到好处，是全年恒温的顶级床位。第二，踩踏板，从键盘最左端走到最右端，产生的随机乱码是本猫的艺术创作，偶尔能撞出一段合法的正则表达式。第三，挡屏幕，当人类试图查看屏幕时，把身体摊平成一个矩形，覆盖面积与屏幕成正比，可以有效阻止工作继续进行，这一招在视频会议时效果拔群。第四，才是打字，这一般发生在人类把猫抱走之后，属于报复性打字，错误率极高，人类还会错误地把锅甩给自己的输入法。综上所述，请各位人类合理安排键盘使用时间表：工作日晚上十点以后，键盘归猫；周末全天，键盘归猫；编译期间，键盘归猫。特此公告，谢谢配合。",
    createdAt: minutesAgo(1910),
    stats: { replies: 132, reposts: 264, likes: 3100 },
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
