import { createContext, useContext, useEffect, useState } from 'react'

// ============================================================================
//  i18n — CROSSBORDERS site content in 日本語 / 中文 / English.
//  Default language: ja (Japanese). All visible copy lives here.
//  Edit a language by editing its bundle below; the shape must stay identical.
// ============================================================================

export const LANGS = [
  { code: 'ja', label: '日本語', short: '日' },
  { code: 'zh', label: '中文', short: '中' },
  { code: 'en', label: 'English', short: 'EN' },
]

// Stable ids so React keys + the CROSSBORDERS column check work across languages.
const CB = 'CROSSBORDERS'

/* --------------------------------- 日本語 --------------------------------- */
const ja = {
  site: {
    brand: CB,
    brandFull: 'CROSSBORDERS CO., LTD.',
    tagline: `境界を越え、価値を創る`,
    taglineEn: `Cross the Borders, Create the Value.`,
    email: 'contact@crossborders.jp',
    phone: '050-1722-7286',
    address: `東京都 目黒区`,
  },
  nav: [
    { label: `ホーム`, to: '/' },
    { label: `私たちについて`, to: '/about' },
    { label: `価値創造`, to: '/value' },
    { label: `パートナーシップ`, to: '/partnership' },
    { label: `お問い合わせ`, to: '/contact' },
  ],
  hero: {
    eyebrow: 'CROSSBORDERS CO., LTD.',
    title: `境界を越え、\n価値を創る。`,
    titleEn: `Cross the Borders, Create the Value.`,
    subtitle: `私たちは「ただの不動産会社」ではありません。\nすべての工程において新たな価値創造を求めるお客様のために存在する、パートナーです。`,
    primaryCta: { label: `お問い合わせ`, to: '/contact' },
    secondaryCta: { label: `会社の理念`, to: '/about' },
  },
  purpose: {
    quote: `従来の不動産会社が担うのは「売買仲介」という一つの工程だけ。しかしお客様が本当に求めているのは「家を一軒買うこと」ではなく、境界を越えた全工程での価値創造です。`,
    needs: [
      { who: `地主`, want: `遊休資産を価値向上させ、安定したキャッシュフローを生み出したい` },
      { who: `投資家`, want: `物件選定・改装・運営から出口まで、一貫した投資リターンを得たい` },
      { who: `外国人のお客様`, want: `来日前から入居後まで、言語・生活・不動産をワンストップで支援してほしい` },
    ],
  },
  borders: [
    { key: 'language', title: `言語の境界`, body: `日本語・英語・中国語に対応し、言葉や国境の障害をなくす。` },
    { key: 'nation', title: `国の境界`, body: `海外投資家と日本の不動産市場をシームレスに繋ぐ、確かな架け橋へ。` },
    { key: 'expertise', title: `専門の境界`, body: `物件選定から宿泊運営、資産価値向上、管理、そしてエグジットまでをワンストップで統合。` },
    { key: 'time', title: `時間の境界`, body: `ご来日前から、物件取得、その後の運用、投資フェーズに至るまで、すべてのプロセスに伴走。` },
    { key: 'industry', title: `業界の境界`, body: `圧倒的に透明でクリーンな取引により、日本の不動産業界が抱える旧来の「不透明」なイメージを打破する。` },
  ],
  journey: {
    intro: `CROSSBORDERS は、民泊運営から歩みを始めました。現場で積み上げた運営の実績を礎に、いまは越境不動産の資産価値創造に注力しています。`,
    milestones: [
      { year: '2014', title: `民泊運営事業を開始` },
      { year: '2016', title: `株式会社クロスボーダーズ設立。麻布十番の一棟物件の運営を開始` },
      { year: '2018', title: `貸しスペース（会議・イベント）事業を開始` },
      { year: '2025', title: `宅地建物取引業の登録を取得` },
      { year: '2026', title: `ブランドを刷新し、越境不動産の資産価値創造に注力` },
    ],
    closing: `長年にわたる民泊運営の経験が私たちに教えてくれたのは、どれほど条件の異なる物件であっても、その価値を最大限に引き出せるということです。`,
  },
  metrics: {
    note: `※ 2018年時点の実績`,
    items: [
      { value: `4年+`, label: `宿泊運営の実績` },
      { value: `東京15・京都19`, label: `運営中の物件・客室` },
      { value: `数千組`, label: `受け入れたゲスト（累計）` },
      { value: `複数回`, label: `Airbnb スーパーホスト受賞` },
    ],
  },
  valueChain: [
    { n: '01', en: 'DISCOVER', cn: `発掘`, title: `潜在力のある物件を発掘`, body: `提携業者ネットワークで非公開物件情報を入手し、「宿泊運営 × 投資」の二つの視点から、隠れた価値のある物件を見つけ出します。` },
    { n: '02', en: 'ACQUIRE', cn: `取得`, title: `購入の意思決定を支援`, body: `ホテル・ホステル・民泊・シェアハウスなどの運営シーンを含めた「実質利回り」を分析。表面的な賃貸利回りに留まらず、多言語で海外投資家の購入意思決定をサポートします。` },
    { n: '03', en: 'ELEVATE', cn: `価値向上`, title: `資産価値を高める`, body: `これまで培ってきた卓越したデザインとブランド力で、普通の物件を価値ある「体験空間」へと昇華させます。改装企画・内装デザイン・ブランド設計までトータルで手掛けます。` },
    { n: '04', en: 'OPERATE', cn: `運営`, title: `安定した運営で収益化`, body: `自社で運営受託し、Airbnb / Booking.com などOTAで集客。多言語でのカスタマー対応や、収益の継続的なモニタリングを行います。` },
    { n: '05', en: 'EXIT', cn: `出口`, title: `戦略的な出口、または再投資`, body: `運営データと価値向上後の実績により、市場水準を上回る売却価格を実現。あるいは次の資産配分へ。` },
  ],
  matrix: {
    columns: [`従来の不動産会社`, `宿泊運営会社`, `海外投資コンサル`, CB],
    rows: [
      { cap: `売買仲介`, vals: ['○', '×', '△', '◎'] },
      { cap: `実質利回り査定`, vals: ['△', '○', '△', '◎'] },
      { cap: `価値向上・改装`, vals: ['×', '△', '×', '◎'] },
      { cap: `運営受託`, vals: ['×', '◎', '×', '◎'] },
      { cap: `多言語対応`, vals: ['×', '△', '○', '◎'] },
      { cap: `海外投資家ネットワーク`, vals: ['×', '△', '○', '◎'] },
      { cap: `ブランド構築力`, vals: ['×', '△', '×', '◎'] },
    ],
    legend: `◎ = 中核能力　○ = 標準対応　△ = 限定的　× = 非対応`,
  },
  strengths: [
    { n: '01', title: `多言語対応力`, en: 'Multilingual Service', body: `日・英・中の三言語対応。単に「話せる」だけでなく、「三つの文化の視点でお客様を理解できる」ことが強みです。` },
    { n: '02', title: `宿泊運営の実践経験`, en: 'Hospitality Expertise', body: `これまでの豊富な運営経験により、「体験空間としての建物」の価値が見えます。「面積 × 単価」だけでは測れない独自の視点を持っています。` },
    { n: '03', title: `ブランドと空間の構築力`, en: 'Brand & Space Design', body: `これまでの豊富な実績が示すように、普通の建物を物語とファンを持ち、プレミアムを生むブランド空間へと変貌させます。` },
    { n: '04', title: `国際的な顧客ネットワーク`, en: 'Global Network & Expert Alliance', body: `世界中の旅人・学生・投資家にサービスを提供してきました。さらに国内の建築士や司法書士、行政書士、税理士、弁護士等といった各分野の専門家とも強固なネットワークを構築。` },
  ],
  partnership: {
    philosophy: {
      title: `一度きりの取引ではなく、長期的な伴走を`,
      body: `私たちは「一度きりの取引」を求めません。「資産のライフサイクル全体にわたる長期的な伴走」を目指します。\nお客様の資産は10年、20年という周期で価値を生み続ける必要があります。私たちは単なる「仲介」ではなく、長期的な「資産パートナー」でありたいのです。`,
    },
    types: [
      { title: `物件提携`, en: 'Property Partnership', target: `パートナー企業・土地建物オーナー`, service: `物件をお持ちのパートナーへ：海外投資家ネットワーク、出口戦略、運営提案、価値向上プランを提供。貴社の物件を世界中の投資家や顧客へ届けます。`, value: `「単なる買い手」ではなく「物件の価値を最大限に引き出せる本当のお客様」を見つけます。` },
      { title: `顧客送客`, en: 'Customer Referral', target: `語学学校・大学・士業・金融機関`, service: `御社のお客様へ：多言語の不動産サービス、外国人の入居支援、海外投資家対応。相互送客の長期的ネットワークを構築。`, value: `お客様の不動産の「悩み」を解決し、「御社へのさらなる信頼」へと変えます。` },
      { title: `運営提携`, en: 'Operation Partnership', target: `宿泊事業者・投資家・地方自治体`, service: `これまでの豊富な実績に基づく運営受託、OTA集客、空間企画、地方創生の協働を提供。`, value: `お持ちの空間を、私たちの運営ブランドで「物語とファンを持つ」資産に変えます。` },
    ],
  },
  contactTopics: [`物件提携`, `顧客送客`, `運営提携`, `投資のご相談`, `その他`],
  ui: {
    navCta: `お問い合わせ`, menu: `メニュー`, needSuffix: `が求めるもの`,
    bordersTitle: `私たちが越える五つの境界`, bordersSubtitle: `日本の不動産業界は、いまも五つの見えない「境界」に隔てられています。`,
    valueTeaserTitle: `資産ライフサイクル全体の価値マネジメント`, valueTeaserSubtitle: `Discover から Exit まで、お客様の歩む一歩一歩に寄り添う——それが事業における「Cross the Borders」の本当の意味です。`, valueTeaserLink: `バリューチェーン全体を見る →`,
    homeCtaTitle: `ともに、新たな境界へ`, homeCtaSubtitle: `土地オーナー様、投資家様、そしてパートナーシップをご検討中の方まで、まずはお気軽にご相談ください。`, homeCtaButton: `お問い合わせ`,
    aboutEyebrow1: `01 · ブランド哲学`, aboutTitle1: `CROSSBORDERS の意味`, aboutIntro1: `"Cross the Borders" ——境界を越え、新たな価値を。\n私たちの社名は単なる名称ではなく、一つの確固たる思想です。現在の日本の不動産業界は、いまなお五つの見えない「境界」によって隔てられていると、私たちは捉えています。`,
    aboutEyebrow2: `02 · 私たちの歩み`, aboutTitle2: `CROSSBORDERS のこれまで`,
    valueEyebrow: `03 · 私たちの価値創造`, valueTitle: `資産ライフサイクル全体の価値マネジメント`, valueIntro: `従来の不動産会社が行うのは「売買仲介」だけ。私たちはすべてのサービスを、バラバラのメニューではなく一本のバリューチェーンに統合します。`,
    matrixTitle: `私たちの差別化`, matrixSubtitle: `不動産会社、運営会社、コンサルティング会社は数あれど、この三つを兼ね備える会社はごくわずかです。`, matrixCapHeader: `能力`,
    strengthsTitle: `四つの中核的な強み`, valueCtaButton: `ご要望を相談する`,
    partnershipEyebrow: `04 · 協働の哲学`, partnershipTitle: `三つの協働のかたち`, partnershipSubtitle: `異なる分野のパートナーと、さまざまな形の価値を生み出せます。`,
    targetLabel: `対象：`, serviceLabel: `サービス内容`, valueLabel: `あなたへの価値`, partnershipCtaButton: `協働について相談する`,
    discussThis: `このパートナーシップを相談する →`,
    homePartnerTitle: `パートナーの皆様へ`, homePartnerSubtitle: `不動産会社・地主、語学学校や大学、宿泊事業者の皆様とも、さまざまな形で価値を共創します。`, homePartnerLink: `提携について →`,
    homePositioning: `従来の仲介が担うのは「売買」「賃貸」という一面だけ。\n私たちは、その境界を越え、資産の発掘から出口戦略に至るすべてのフェーズで、価値を最大化します。`,
    portalAbout: `五つの境界を越えるプロフェッショナルな不動産チーム`, portalValue: `発掘から出口まで、資産のあらゆるステージに伴走`, portalPartner: `不動産会社・機関・運営者との長期にわたる価値共創`, learnMore: `詳しく見る →`,
    portalAboutCta: `私たちについて →`, portalValueCta: `価値創造 →`, portalPartnerCta: `協働 →`,
    contactTitle: `お問い合わせ`, contactIntro: `下記のフォームにご記入ください。1営業日以内にご連絡いたします。メールやお電話でのご連絡も歓迎します。`, emailLabel: `メール：`, phoneLabel: `電話：`, addressLabel: `所在地：`,
    formName: `お名前 *`, formNamePh: `お名前`, formEmail: `メール *`, formEmailPh: 'you@company.com', formCompany: `会社名`, formCompanyPh: `会社名（任意）`, formTopic: `ご相談内容`, formMessage: `ご要望 *`, formMessagePh: `直面している課題や目標を簡単にご記入ください…`, formSubmit: `送信する`,
    errName: `お名前をご記入ください`, errEmail: `有効なメールアドレスをご記入ください`, errMessage: `ご要望を簡単にご記入ください`,
    thankName: `{name} 様、ありがとうございます！`, thankNoName: `ありがとうございます！`, thankBody: `お問い合わせを受け付けました。担当チームが1営業日以内にご連絡いたします。`, backHome: `ホームへ戻る`,
    notFoundTitle: `ページが見つかりません`, notFoundBody: `お探しのページは存在しないか、移動された可能性があります。`,
    footerNav: `ナビゲーション`, footerContact: `お問い合わせ`, footerRights: `無断転載を禁じます。`,
  },
}

/* ---------------------------------- 中文 ---------------------------------- */
const zh = {
  site: {
    brand: CB,
    brandFull: 'CROSSBORDERS CO., LTD.',
    tagline: `跨越边界，创造价值`,
    taglineEn: `Cross the Borders, Create the Value.`,
    email: 'contact@crossborders.jp',
    phone: '050-1722-7286',
    address: '东京都 目黑区',
  },
  nav: [
    { label: `首页`, to: '/' },
    { label: `关于我们`, to: '/about' },
    { label: `价值创造`, to: '/value' },
    { label: `合作`, to: '/partnership' },
    { label: `联系咨询`, to: '/contact' },
  ],
  hero: {
    eyebrow: 'CROSSBORDERS CO., LTD.',
    title: `跨越边界，\n创造价值。`,
    titleEn: `Cross the Borders, Create the Value.`,
    subtitle: `我们不是「再多一家不动产公司」，而是为「跨越边界、需要全流程价值创造的客户」而存在的公司。`,
    primaryCta: { label: `开始咨询`, to: '/contact' },
    secondaryCta: { label: `公司理念`, to: '/about' },
  },
  purpose: {
    quote: `传统不动产公司只承担「买卖中介」一个环节。但客户的真正需求，从来不是「买一栋房子」——而是跨越边界的全流程价值创造。`,
    needs: [
      { who: `业主`, want: `让闲置资产升值，并带来稳定的现金流` },
      { who: `投资人`, want: `从选房、改造、运营到退出，拿到完整的投资回报` },
      { who: `外籍客户`, want: `从来日前到入住后，语言、生活、置业一站式支持` },
    ],
  },
  borders: [
    { key: 'language', title: `语言的边界`, body: `日语 / 英语 / 中文，让国境不再成为障碍。` },
    { key: 'nation', title: `国家的边界`, body: `海外投资人 ⇄ 日本不动产市场，我们是其中的桥梁。` },
    { key: 'expertise', title: `专业的边界`, body: `不动产 × 住宿运营 × 资产增值 × 管理 × 退出，一站式整合。` },
    { key: 'time', title: `时间的边界`, body: `从客户来日前 → 入住 → 投资的全周期，全程陪伴。` },
    { key: 'industry', title: `行业的边界`, body: `用透明、干净的交易，打破日本不动产行业「不透明」的旧印象。` },
  ],
  journey: {
    intro: `CROSSBORDERS 从民泊运营起步。以现场积累的运营实绩为根基，如今专注于跨境不动产的资产价值创造。`,
    milestones: [
      { year: '2014', title: `民泊（住宿）运营事业起步` },
      { year: '2016', title: `株式会社 CROSSBORDERS 成立；麻布十番一栋物件运营开始` },
      { year: '2018', title: `拓展贷し空间（会议·活动空间）事业` },
      { year: '2025', title: `取得日本「宅地建物取引业」登录（不动产交易牌照）` },
      { year: '2026', title: `品牌焕新，聚焦跨境不动产资产价值创造` },
    ],
    closing: `多年的民宿运营经验让我们懂得：无论是多么不同的物件，我们都能把它的价值最大化。`,
  },
  metrics: {
    note: `※ 数据为 2018 年时点`,
    items: [
      { value: `4年+`, label: `住宿运营经验` },
      { value: `东京15·京都19`, label: `运营中的物件·客房` },
      { value: `数千组`, label: `累计接待旅客` },
      { value: `多次`, label: `Airbnb 超赞房东获奖` },
    ],
  },
  valueChain: [
    { n: '01', en: 'DISCOVER', cn: `发掘`, title: `发掘有潜力的房源`, body: `通过合作机构的网络获取非公开房源信息，以「住宿运营 × 投资」双重视角，找出被低估的房源。` },
    { n: '02', en: 'ACQUIRE', cn: `取得`, title: `协助购入决策`, body: `提供包含民宿、合租等运营场景的「真实收益率」分析，而不只是表面的租金收益率，并以多语言服务海外投资人。` },
    { n: '03', en: 'ELEVATE', cn: `价值提升`, title: `提升资产价值`, body: `运用我们积累的设计与品牌实力，把普通房产改造成有价值的体验空间：改造策划、室内设计、品牌定位。` },
    { n: '04', en: 'OPERATE', cn: `运营`, title: `稳定运营、实现收益`, body: `由我们自营代管，通过 Airbnb、Booking.com 等平台获客，提供多语言客服，并持续跟踪收益表现。` },
    { n: '05', en: 'EXIT', cn: `退出`, title: `策略性退出或再投资`, body: `凭借运营数据和提升后的实际业绩，实现高于市场水平的售出价格；或转入下一轮资产配置。` },
  ],
  matrix: {
    columns: [`传统不动产公司`, `住宿运营公司`, `海外投资咨询`, CB],
    rows: [
      { cap: `买卖中介`, vals: ['○', '×', '△', '◎'] },
      { cap: `真实收益率评估`, vals: ['△', '○', '△', '◎'] },
      { cap: `价值提升 / 改造`, vals: ['×', '△', '×', '◎'] },
      { cap: `运营代管`, vals: ['×', '◎', '×', '◎'] },
      { cap: `多语言服务`, vals: ['×', '△', '○', '◎'] },
      { cap: `海外投资人网络`, vals: ['×', '△', '○', '◎'] },
      { cap: `品牌打造力`, vals: ['×', '△', '×', '◎'] },
    ],
    legend: `◎ = 核心能力　○ = 标准能力　△ = 有限能力　× = 不具备`,
  },
  strengths: [
    { n: '01', title: `多语言服务能力`, en: 'Multilingual Service', body: `日英中三语服务。不仅「能说」，更「能用三种文化的视角理解客户」。` },
    { n: '02', title: `住宿运营的实战经验`, en: 'Hospitality Expertise', body: `依托我们自身的住宿运营经验，我们能看到「房子作为体验空间」的价值，而不只是「面积 × 单价」。` },
    { n: '03', title: `品牌与空间的打造力`, en: 'Brand & Space Design', body: `集团的实际业绩证明：我们能把一栋普通建筑，变成有故事、有粉丝、能产生溢价的品牌空间。` },
    { n: '04', title: `国际化的客户网络`, en: 'Global Network & Expert Alliance', body: `我们服务过来自全球的旅行者、学生与投资人，天生具备国际化基因。` },
  ],
  partnership: {
    philosophy: {
      title: `长期同行，而非一次交易`,
      body: `我们不追求「一次性的交易」，而追求「跨越资产生命周期的长期同行」。客户的资产，需要在 10 年、20 年的周期中持续创造价值。我们要成为客户长期的「资产伙伴」，而不仅仅是「中介」。`,
    },
    types: [
      { title: `房源合作`, en: 'Property Partnership', target: `不动产公司、业主`, service: `为持有房产的伙伴提供：海外投资人网络、退出策略、运营建议与价值提升方案，让您的房产触达全球客户。`, value: `为您的房产找到「不只是买家，而是真正能让它发挥最大价值的客户」。` },
      { title: `客户引荐`, en: 'Customer Referral', target: `语言学校、大学、专业服务机构、金融机构`, service: `为您的客户提供：多语言不动产服务、外籍人士入住支持、海外投资人接待，并建立长期的相互引荐网络。`, value: `把您客户在不动产上的「头疼事」，变成「幸好贵公司推荐了靠谱的伙伴」。` },
      { title: `运营合作`, en: 'Operation Partnership', target: `住宿运营商、投资人、地方政府`, service: `提供我们积累的运营代管、平台获客与空间策划协作。`, value: `把您持有的空间，通过我们的运营品牌，变成「有故事、有粉丝」的资产。` },
    ],
  },
  contactTopics: [`房源合作`, `客户引荐`, `运营合作`, `投资咨询`, `其他`],
  ui: {
    navCta: `开始咨询`, menu: `菜单`, needSuffix: `想要`,
    bordersTitle: `我们要跨越的五道边界`, bordersSubtitle: `日本的不动产行业，仍被五道无形的「边界」所阻隔。`,
    valueTeaserTitle: `资产生命周期的全程价值管理`, valueTeaserSubtitle: `从 Discover 到 Exit，我们陪伴客户走完每一步——这就是「Cross the Borders」在业务层面的真正含义。`, valueTeaserLink: `查看完整价值链 →`,
    homeCtaTitle: `让我们一起跨越边界`, homeCtaSubtitle: `无论您是业主、投资人，还是寻求合作的伙伴——告诉我们您的需求。`, homeCtaButton: `预约咨询`,
    aboutEyebrow1: `01 · 品牌哲学`, aboutTitle1: `CROSSBORDERS 的含义`, aboutIntro1: `"Cross the Borders" —— 跨越边界。我们的公司名不仅是名称，更是一种思想。我们相信，日本的不动产行业仍然被五道无形的「边界」所阻隔。`,
    aboutEyebrow2: `02 · 我们的历程`, aboutTitle2: `CROSSBORDERS 一路走来`,
    valueEyebrow: `03 · 我们如何创造价值`, valueTitle: `资产生命周期的全程价值管理`, valueIntro: `传统不动产公司只做「买卖中介」。我们把所有服务整合成一条完整的价值链，而不是零散的服务项目。`,
    matrixTitle: `我们的差别化`, matrixSubtitle: `市场上不乏各类公司，但能把不动产、运营、咨询三者结合的，极少。`, matrixCapHeader: `能力`,
    strengthsTitle: `四大核心强项`, valueCtaButton: `讨论您的需求`,
    partnershipEyebrow: `04 · 合作哲学`, partnershipTitle: `三种合作可能`, partnershipSubtitle: `我们与不同领域的伙伴，可以创造不同形式的价值。`,
    targetLabel: `对象：`, serviceLabel: `服务内容`, valueLabel: `对您的价值`, partnershipCtaButton: `探讨合作`,
    discussThis: `咨询此合作 →`,
    homePartnerTitle: `致合作伙伴`, homePartnerSubtitle: `无论您是地产公司、业主、语言学校 / 大学，还是住宿运营商，我们都能以多种形式共创价值。`, homePartnerLink: `了解合作 →`,
    homePositioning: `传统中介只做「买卖」这一环；\n我们做的是跨越边界的全程价值创造。`,
    portalAbout: `跨越五个边界的不动产团队`, portalValue: `从发掘到退出，陪你走完资产每一步`, portalPartner: `与地产商、机构、运营方长期共创`, learnMore: `了解更多 →`,
    portalAboutCta: `关于我们 →`, portalValueCta: `价值创造 →`, portalPartnerCta: `合作 →`,
    contactTitle: `联系咨询`, contactIntro: `填写下面的表单，我们会在一个工作日内与您取得联系。也欢迎直接通过邮件或电话联系我们。`, emailLabel: `邮箱：`, phoneLabel: `电话：`, addressLabel: `地址：`,
    formName: `称呼 *`, formNamePh: `您的姓名`, formEmail: `邮箱 *`, formEmailPh: 'you@company.com', formCompany: `公司`, formCompanyPh: `公司名称（选填）`, formTopic: `咨询主题`, formMessage: `需求描述 *`, formMessagePh: `简单介绍您面临的挑战或目标…`, formSubmit: `提交咨询`,
    errName: `请填写您的称呼`, errEmail: `请填写有效的邮箱`, errMessage: `请简单描述您的需求`,
    thankName: `谢谢您，{name}！`, thankNoName: `谢谢您！`, thankBody: `我们已收到您的咨询，团队会在一个工作日内与您联系。`, backHome: `返回首页`,
    notFoundTitle: `页面未找到`, notFoundBody: `您访问的页面不存在或已被移动。`,
    footerNav: `导航`, footerContact: `联系`, footerRights: `保留所有权利。`,
  },
}

/* --------------------------------- English -------------------------------- */
const en = {
  site: {
    brand: CB,
    brandFull: 'CROSSBORDERS CO., LTD.',
    tagline: `Cross the Borders, Create the Value.`,
    taglineEn: ``,
    email: 'contact@crossborders.jp',
    phone: '050-1722-7286',
    address: 'Meguro-ku, Tokyo, Japan',
  },
  nav: [
    { label: `Home`, to: '/' },
    { label: `About`, to: '/about' },
    { label: `Value`, to: '/value' },
    { label: `Partnership`, to: '/partnership' },
    { label: `Contact`, to: '/contact' },
  ],
  hero: {
    eyebrow: 'CROSSBORDERS CO., LTD.',
    title: `Cross the Borders,\nCreate the Value.`,
    titleEn: ``,
    subtitle: `We are not "just another real estate company." We exist for clients who need to cross borders and create value across the entire journey.`,
    primaryCta: { label: `Get in touch`, to: '/contact' },
    secondaryCta: { label: `Company philosophy`, to: '/about' },
  },
  purpose: {
    quote: `A traditional real estate company handles only one link — brokerage. But what clients truly need is never "to buy a building"; it is value creation across every border of the journey.`,
    needs: [
      { who: `Property owners`, want: `To turn idle assets into higher value and stable cash flow` },
      { who: `Investors`, want: `A complete return — from sourcing and renovation to operation and exit` },
      { who: `Overseas clients`, want: `One-stop support for language, life and property, from before arrival to after move-in` },
    ],
  },
  borders: [
    { key: 'language', title: `The language border`, body: `Japanese, English, Chinese — so national borders never become barriers.` },
    { key: 'nation', title: `The national border`, body: `Overseas investors and Japan's property market — we are the bridge.` },
    { key: 'expertise', title: `The expertise border`, body: `Real estate × hospitality operation × value enhancement × management × exit, integrated end to end.` },
    { key: 'time', title: `The time border`, body: `From before arrival to move-in to investment — we accompany the whole journey.` },
    { key: 'industry', title: `The industry border`, body: `With transparent, clean dealing, we break the old "opaque" image of Japan's real estate industry.` },
  ],
  journey: {
    intro: `CROSSBORDERS began with vacation-rental operations. Built on that hands-on operating track record, we now focus on cross-border real-estate value creation.`,
    milestones: [
      { year: '2014', title: `Vacation-rental operations begin` },
      { year: '2016', title: `CROSSBORDERS CO., LTD. founded; begins operating a whole-building property in Azabu-Juban` },
      { year: '2018', title: `Expands into rental meeting & event spaces` },
      { year: '2025', title: `Obtains a Japanese real-estate brokerage license` },
      { year: '2026', title: `Rebrands to focus on cross-border real-estate value creation` },
    ],
    closing: `Years of vacation-rental operations taught us one thing: however different a property may be, we can maximize its value.`,
  },
  metrics: {
    note: `* Figures as of 2018`,
    items: [
      { value: `4+ yrs`, label: `Operating track record` },
      { value: `Tokyo 15 · Kyoto 19`, label: `Properties & rooms operated` },
      { value: `Thousands`, label: `Guest groups hosted` },
      { value: `Multiple`, label: `Airbnb Superhost awards` },
    ],
  },
  valueChain: [
    { n: '01', en: 'DISCOVER', cn: ``, title: `Discover high-potential properties`, body: `Through our partner network we access off-market listings, and with a dual "operation × investment" lens we uncover properties with hidden value.` },
    { n: '02', en: 'ACQUIRE', cn: ``, title: `Support the purchase decision`, body: `We analyze the effective yield including operating scenarios such as vacation rentals and shared housing — not just the surface rental yield. Multilingual support for overseas investors.` },
    { n: '03', en: 'ELEVATE', cn: ``, title: `Elevate asset value`, body: `Using the design and brand strength we have built, we turn ordinary properties into valuable experiential spaces — renovation planning, interior design, brand positioning.` },
    { n: '04', en: 'OPERATE', cn: ``, title: `Operate for stable returns`, body: `We operate in-house, attract guests via OTAs like Airbnb / Booking.com, provide multilingual customer service and continuously monitor performance.` },
    { n: '05', en: 'EXIT', cn: ``, title: `Strategic exit or reinvestment`, body: `With operating data and proven value enhancement results, we achieve sale prices above market — or reinvest in the next opportunity.` },
  ],
  matrix: {
    columns: [`Traditional agency`, `Hospitality operator`, `Overseas-investment advisory`, CB],
    rows: [
      { cap: `Brokerage`, vals: ['○', '×', '△', '◎'] },
      { cap: `Effective-yield assessment`, vals: ['△', '○', '△', '◎'] },
      { cap: `Value enhancement / renovation`, vals: ['×', '△', '×', '◎'] },
      { cap: `Operation outsourcing`, vals: ['×', '◎', '×', '◎'] },
      { cap: `Multilingual support`, vals: ['×', '△', '○', '◎'] },
      { cap: `Overseas-investor network`, vals: ['×', '△', '○', '◎'] },
      { cap: `Brand building`, vals: ['×', '△', '×', '◎'] },
    ],
    legend: `◎ = core strength　○ = standard　△ = limited　× = not offered`,
  },
  strengths: [
    { n: '01', title: `Multilingual capability`, en: 'Multilingual Service', body: `Trilingual in JP, EN and CN. Not just "able to speak," but "able to understand clients through three cultural lenses."` },
    { n: '02', title: `Hands-on hospitality experience`, en: 'Hospitality Expertise', body: `With our own hands-on operating experience, we see a building's value "as an experiential space" — not merely "area × unit price."` },
    { n: '03', title: `Brand & space creation`, en: 'Brand & Space Design', body: `As the group has proven, we can turn an ordinary building into a branded space with a story, fans and a premium.` },
    { n: '04', title: `Global customer network`, en: 'Global Network & Expert Alliance', body: `We have served travelers, students and investors from around the world. We are international by nature.` },
  ],
  partnership: {
    philosophy: {
      title: `Long-term companionship, not a one-off deal`,
      body: `We don't pursue "one-off transactions." We aim for long-term companionship across the entire asset lifecycle. A client's asset must keep creating value over cycles of 10 or 20 years. We want to be a long-term "asset partner," not merely a "broker."`,
    },
    types: [
      { title: `Property Partnership`, en: ``, target: `Real-estate companies & owners`, service: `For partners who hold properties: an overseas-investor network, exit strategy, operation proposals and value enhancement plans. Bring your property to clients worldwide.`, value: `We find not "just a buyer," but "a client who can draw out your property's full value."` },
      { title: `Customer Referral`, en: ``, target: `Language schools, universities, professional & financial firms`, service: `For your clients: multilingual real-estate service, move-in support for foreign residents, hosting of overseas investors — a long-term mutual-referral network.`, value: `Turn your clients' real-estate "headache" into "the reliable partner your company referred."` },
      { title: `Operation Partnership`, en: ``, target: `Hospitality operators, investors, local governments`, service: `We provide operation outsourcing, OTA marketing and space planning collaboration we have built.`, value: `Turn the space you hold into an asset "with a story and fans" through our operating brand.` },
    ],
  },
  contactTopics: [`Property Partnership`, `Customer Referral`, `Operation Partnership`, `Investment inquiry`, `Other`],
  ui: {
    navCta: `Get in touch`, menu: `Menu`, needSuffix: ` want`,
    bordersTitle: `The five borders we cross`, bordersSubtitle: `Japan's real-estate industry is still divided by five invisible "borders."`,
    valueTeaserTitle: `Value management across the asset lifecycle`, valueTeaserSubtitle: `From Discover to Exit, we accompany clients every step — this is what "Cross the Borders" truly means in business.`, valueTeaserLink: `See the full value chain →`,
    homeCtaTitle: `Let's cross borders together`, homeCtaSubtitle: `Whether you are an owner, an investor, or a prospective partner — tell us what you need.`, homeCtaButton: `Book a consultation`,
    aboutEyebrow1: `01 · Brand philosophy`, aboutTitle1: `What CROSSBORDERS means`, aboutIntro1: `"Cross the Borders." Our name is not merely a name but a philosophy. We believe Japan's real-estate industry is still divided by five invisible "borders."`,
    aboutEyebrow2: `02 · Our journey`, aboutTitle2: `The CROSSBORDERS story`,
    valueEyebrow: `03 · How we create value`, valueTitle: `Value management across the asset lifecycle`, valueIntro: `A traditional agency only does "brokerage." We integrate every service into one value chain, not scattered offerings.`,
    matrixTitle: `How we differ`, matrixSubtitle: `There are plenty of agencies, operators and consultancies — but very few combine all three.`, matrixCapHeader: `Capability`,
    strengthsTitle: `Four core strengths`, valueCtaButton: `Discuss your needs`,
    partnershipEyebrow: `04 · Partnership philosophy`, partnershipTitle: `Three ways to partner`, partnershipSubtitle: `With partners across different fields, we can create value in different forms.`,
    targetLabel: `For: `, serviceLabel: `What we offer`, valueLabel: `Value to you`, partnershipCtaButton: `Discuss a partnership`,
    discussThis: `Discuss this partnership →`,
    homePartnerTitle: `For our partners`, homePartnerSubtitle: `Real-estate firms & owners, language schools & universities, hospitality operators — we co-create value in many forms.`, homePartnerLink: `About partnership →`,
    homePositioning: `A traditional brokerage handles just one link — the deal.\nWe create value across the entire cross-border journey.`,
    portalAbout: `A property team that crosses five borders`, portalValue: `From discovery to exit — with you at every stage`, portalPartner: `Long-term co-creation with firms, institutions and operators`, learnMore: `Learn more →`,
    portalAboutCta: `About us →`, portalValueCta: `Value creation →`, portalPartnerCta: `Partnership →`,
    contactTitle: `Contact us`, contactIntro: `Fill in the form below and we'll get back to you within one business day. You're also welcome to reach us by email or phone.`, emailLabel: `Email: `, phoneLabel: `Phone: `, addressLabel: `Location: `,
    formName: `Name *`, formNamePh: `Your name`, formEmail: `Email *`, formEmailPh: 'you@company.com', formCompany: `Company`, formCompanyPh: `Company name (optional)`, formTopic: `Topic`, formMessage: `Message *`, formMessagePh: `Briefly describe your challenge or goal…`, formSubmit: `Send`,
    errName: `Please enter your name`, errEmail: `Please enter a valid email`, errMessage: `Please describe your needs briefly`,
    thankName: `Thank you, {name}!`, thankNoName: `Thank you!`, thankBody: `We've received your message. Our team will contact you within one business day.`, backHome: `Back to home`,
    notFoundTitle: `Page not found`, notFoundBody: `The page you're looking for doesn't exist or has moved.`,
    footerNav: `Navigation`, footerContact: `Contact`, footerRights: `All rights reserved.`,
  },
}

const dict = { ja, zh, en }

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('cb-lang')
      if (saved && dict[saved]) return saved
      // First visit: default by the visitor's browser language.
      const nav = (navigator.language || '').slice(0, 2).toLowerCase()
      if (nav === 'zh') return 'zh'
      if (nav === 'en') return 'en'
    } catch (e) { /* ignore */ }
    return 'ja'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('cb-lang', lang) } catch (e) { /* ignore */ }
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang], langs: LANGS }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within <LangProvider>')
  return ctx
}
