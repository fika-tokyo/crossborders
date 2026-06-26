// ============================================================================
//  SITE CONTENT — CROSSBORDERS
//  Source: CrossBorders_Content_Planning_CN.docx
//  Edit any text here; pages read from these exports.
//  NOTE: contact email/phone are placeholders — replace with real ones.
// ============================================================================

export const site = {
  brand: 'CROSSBORDERS',
  brandFull: 'CROSSBORDERS CO., LTD.',
  tagline: '跨越边界，创造价值',
  taglineEn: 'Cross the Borders, Create the Value.',
  email: 'contact@crossborders.jp', // TODO: 替换为真实邮箱
  phone: '+81 3-0000-0000',          // TODO: 替换为真实电话
  address: 'Tokyo · Fukuoka, Japan',
}

export const nav = [
  { label: '首页', to: '/' },
  { label: '关于我们', to: '/about' },
  { label: '价值创造', to: '/value' },
  { label: '合作', to: '/partnership' },
  { label: '联系咨询', to: '/contact' },
]

export const hero = {
  eyebrow: 'CROSSBORDERS CO., LTD.',
  title: '跨越边界，\n创造价值。',
  titleEn: 'Cross the Borders, Create the Value.',
  subtitle:
    '我们不是「再多一家不动产公司」，而是为「跨越边界、需要全流程价值创造的客户」而存在的公司。',
  primaryCta: { label: '开始咨询', to: '/contact' },
  secondaryCta: { label: '了解我们的哲学', to: '/about' },
}

// 存在意义（首页 quote）
export const purpose = {
  quote:
    '传统不动产公司只承担「买卖中介」一个环节。但客户的真正需求，从来不是「买一栋房子」——而是跨越边界的全流程价值创造。',
  needs: [
    { who: '地主', want: '遊休资产如何升值并产生稳定现金流' },
    { who: '投资家', want: '从选品、改装、运营到退出的完整投资回报' },
    { who: '外国人', want: '从来日前到入居后，语言、生活、不动产的一站式支援' },
  ],
}

// 我们要跨越的五道边界
export const borders = [
  { key: '语言', title: '语言的边界', body: '日语 / 英语 / 中文，让国境不再成为障碍。' },
  { key: '国家', title: '国家的边界', body: '海外投资家 ⇄ 日本不动产市场，我们是桥梁。' },
  { key: '专业', title: '专业的边界', body: '不动产 × 宿泊运营 × 资产升值 × 管理 × 出口，一站式整合。' },
  { key: '时间', title: '时间的边界', body: '客户来日前 → 入居 → 投资全周期，长期陪伴。' },
  { key: '行业', title: '行业的边界', body: '用透明、清洁的取引，打破日本不动产业「不透明」的旧形象。' },
]

// 集团底蕴
export const group = {
  intro: 'CROSSBORDERS 不是从零起步的新公司。我们的根基，来自集团内部已经验证过的两个品牌。',
  fika: {
    name: 'FIKA',
    role: '集团母公司',
    body: '深耕日本宿泊运营、空间企划、不动产价值升级。不仅理解「不动产」，更理解「人在空间中的体验」。',
    scope: ['ホステル「UNPLAN」的经营与运营', '空间企划与品牌制作', '酒店运营受託', '宿泊业运营咨询', '地方创生事业'],
  },
  unplan: {
    name: 'UNPLAN',
    role: '我们打造的国际化品牌',
    body: '取自 "unplanned"（计划外）。旅行最美的不是行程表上的「计划」，而是「计划外的相遇」。',
    stores: [
      { name: 'UNPLAN Kagurazaka', year: '2016', note: '神乐坂。和洋融合，设有咖啡&酒吧，是品牌起点。' },
      { name: 'UNPLAN Shinjuku', year: '2019', note: '新宿。「Urban Play」概念，都内最大级 hostel。' },
      { name: 'UNPLAN Fukuoka', year: '近年', note: '福冈。延展品牌的地方布局。' },
    ],
    abilities: [
      '空间设计力 — 被称为「有点高级感的 hostel」',
      '品牌打造力 — 从一家店扩展为多店铺的统一品牌',
      '国际化运营 — 英中日多语对应，服务全球旅人',
      '社群营造 — 把住客之间的「计划外相遇」做成体验',
    ],
  },
  positioning: {
    line: 'FIKA 做「运营」 ×  UNPLAN 做「品牌」 ×  CROSSBORDERS 做「资产价值的整合与升级」。',
    body: '我们是 FIKA 集团衍生出的、专注于不动产资产价值提升的公司。',
  },
}

// 价值链 Discover → Exit
export const valueChain = [
  { n: '01', en: 'DISCOVER', cn: '発掘', title: '发掘有潜力的物件', body: '通过提携业者网络获取非公开物件信息，以「宿泊运营 × 投资」双重视角，找出隐藏价值的物件。' },
  { n: '02', en: 'ACQUIRE', cn: '取得', title: '支援购入决策', body: '提供包含民泊、合租等运营场景的「真实利回り」分析，而非仅仅是表面租赁利回り。多语言对应海外投资家。' },
  { n: '03', en: 'ELEVATE', cn: '価値向上', title: '提升资产价值', body: '运用 FIKA / UNPLAN 累积的设计与品牌力，把普通物件改造为有价值的体验空间。改装企划、内装设计、品牌定位。' },
  { n: '04', en: 'OPERATE', cn: '運営', title: '稳定运营变现', body: '自社受託运营，Airbnb / Booking.com 等 OTA 集客，多语言客服，持续监控收益表现。' },
  { n: '05', en: 'EXIT', cn: '出口', title: '策略性退出或续投', body: '通过运营数据 + 价值升级后的实绩，实现高于市场水准的售出价格。或转入下一轮资产配置。' },
]

// 差别化矩阵
export const matrix = {
  columns: ['传统不动产公司', '宿泊运营公司', '海外投资咨询', 'CROSSBORDERS'],
  rows: [
    { cap: '买卖中介', vals: ['○', '×', '△', '◎'] },
    { cap: '真实利回查定', vals: ['△', '○', '△', '◎'] },
    { cap: '价值升级 / 改装', vals: ['×', '△', '×', '◎'] },
    { cap: '运营受託', vals: ['×', '◎', '×', '◎'] },
    { cap: '多语言对应', vals: ['×', '△', '○', '◎'] },
    { cap: '海外投资家网络', vals: ['×', '△', '○', '◎'] },
    { cap: '品牌打造力', vals: ['×', '△', '×', '◎'] },
  ],
  legend: '◎ = 核心能力　○ = 标准能力　△ = 有限能力　× = 不具备',
}

// 四大核心强项
export const strengths = [
  { n: '01', title: '多语言对应能力', en: 'Multilingual Service', body: '日英中三语对应。不仅是「能说」，而是「能用三种文化的视角理解客户」。' },
  { n: '02', title: '宿泊运营的实战经验', en: 'Hospitality Expertise', body: '依托 FIKA / UNPLAN 的运营经验，我们能看到「房子作为体验空间」的价值，而非仅是「面积 × 单价」。' },
  { n: '03', title: '品牌与空间的打造力', en: 'Brand & Space Design', body: 'UNPLAN 证明：我们能把一栋普通建筑变成有故事、有粉丝、能产生溢价的品牌空间。' },
  { n: '04', title: '国际化的客户网络', en: 'Global Customer Network', body: '服务过来自全球的旅人、学生、投资家。我们天然具备国际化基因。' },
]

// 合作哲学 + 三种合作
export const partnership = {
  philosophy: {
    title: '长期同行，而非一次交易',
    body: '我们不追求「一次性的交易」，而追求「跨越资产生命周期的长期同行」。客户的资产，需要在 10 年、20 年的周期中持续创造价值。我们要成为客户长期的「资产伙伴」，而不仅仅是「中介」。',
  },
  types: [
    {
      title: '物件提携',
      en: 'Property Partnership',
      target: '不动产公司・地主',
      service: '为持有物件的伙伴提供：海外投资家网络、出口战略、运营提案、价值升级方案。让您的物件接触到全球客户。',
      value: '为您的物件找到「不只是买家，而是真正能让物件发挥最大价值的客户」。',
    },
    {
      title: '顧客送客',
      en: 'Customer Referral',
      target: '语言学校・大学・士业・金融机构',
      service: '为您的客户提供：多语言不动产服务、外国人入居支援、海外投资家接待。建立互推送客的长期网络。',
      value: '把您的客户对不动产的「头痛」，变成「贵公司给我推荐的好伙伴」。',
    },
    {
      title: '運営提携',
      en: 'Operation Partnership',
      target: '宿泊事业者・投资家・地方自治体',
      service: '提供 FIKA / UNPLAN 累积的运营受託、OTA 集客、空间企划、地方创生协作。',
      value: '把您持有的空间，通过我们的运营品牌，变成「有故事、有粉丝」的资产。',
    },
  ],
}

// 联系表单主题（来自三种合作 + 通用）
export const contactTopics = ['物件提携', '顧客送客', '運営提携', '投资咨询', '其他']
