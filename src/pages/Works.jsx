import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { JAPAN_PATH } from '../assets/cases/japanPath.js'
import { TOKYO_VB, TOKYO_WARDS } from '../assets/cases/tokyoWards.js'

import saleChuo from '../assets/cases/sale-chuo.jpg'
import saleShibuya from '../assets/cases/sale-shibuya.jpg'
import saleShinagawa from '../assets/cases/sale-shinagawa.jpg'
import saleMeguro from '../assets/cases/sale-meguro.jpg'
import saleYokohama from '../assets/cases/sale-yokohama.jpg'
import saleKyoto from '../assets/cases/sale-kyoto.jpg'
import saleOsaka from '../assets/cases/sale-osaka.jpg'
import saleKamagaya from '../assets/cases/sale-kamagaya.jpg'
import rentShinjuku1 from '../assets/cases/rent-shinjuku1.jpg'
import rentShinjuku2 from '../assets/cases/rent-shinjuku2.jpg'
import rentNakano from '../assets/cases/rent-nakano.jpg'
import rentKawasaki from '../assets/cases/rent-kawasaki.jpg'
import rentChigasaki from '../assets/cases/rent-chigasaki.jpg'
import rentYachimata from '../assets/cases/rent-yachimata.jpg'

/* ---------------------------------------------------------------------------
   成約事例データ。type: 'sale' 売買仲介 / 'rent' 賃貸仲介
--------------------------------------------------------------------------- */
const CASES = [
  { id: 'chuo',      type: 'sale', img: saleChuo,      ja: '東京都中央区',   en: 'Chuo, Tokyo',        note: { ja: '区分マンション・価格1億円台', zh: '区分公寓・价格1亿日圓級', tw: '區分公寓・價格1億日圓級', en: 'Condominium unit · ¥100M range' } },
  { id: 'shibuya',   type: 'sale', img: saleShibuya,   ja: '東京都渋谷区',   en: 'Shibuya, Tokyo',     note: { ja: '価格1億円台', zh: '价格1亿日圓級', tw: '價格1億日圓級', en: '¥100M range' } },
  { id: 'shinagawa', type: 'sale', img: saleShinagawa, ja: '東京都品川区',   en: 'Shinagawa, Tokyo',   note: { ja: '価格1億円台', zh: '价格1亿日圓級', tw: '價格1億日圓級', en: '¥100M range' } },
  { id: 'meguro',    type: 'sale', img: saleMeguro,    ja: '東京都目黒区',   en: 'Meguro, Tokyo',      note: { ja: '価格2千万円台', zh: '价格2千万日圓級', tw: '價格2千萬日圓級', en: '¥20M range' } },
  { id: 'yokohama',  type: 'sale', img: saleYokohama,  ja: '神奈川県横浜市', en: 'Yokohama, Kanagawa', note: { ja: '区分マンション・価格2千万円台', zh: '区分公寓・价格2千万日圓級', tw: '區分公寓・價格2千萬日圓級', en: 'Condominium unit · ¥20M range' } },
  { id: 'kyoto',     type: 'sale', img: saleKyoto,     ja: '京都府京都市',   en: 'Kyoto City',         note: { ja: '価格1千万円台', zh: '价格1千万日圓級', tw: '價格1千萬日圓級', en: '¥10M range' } },
  { id: 'osaka',     type: 'sale', img: saleOsaka,     ja: '大阪府大阪市',   en: 'Osaka City',         note: { ja: '価格4千万円台', zh: '价格4千万日圓級', tw: '價格4千萬日圓級', en: '¥40M range' } },
  { id: 'kamagaya',  type: 'sale', img: saleKamagaya,  ja: '千葉県鎌ケ谷市', en: 'Kamagaya, Chiba',    note: { ja: '価格2千万円台', zh: '价格2千万日圓級', tw: '價格2千萬日圓級', en: '¥20M range' } },
  { id: 'shinjuku1', type: 'rent', img: rentShinjuku1, ja: '東京都新宿区',   en: 'Shinjuku, Tokyo',    note: { ja: '賃貸仲介', zh: '租赁中介', tw: '租賃中介', en: 'Leasing' } },
  { id: 'shinjuku2', type: 'rent', img: rentShinjuku2, ja: '東京都新宿区',   en: 'Shinjuku, Tokyo',    note: { ja: '賃貸仲介', zh: '租赁中介', tw: '租賃中介', en: 'Leasing' } },
  { id: 'nakano',    type: 'rent', img: rentNakano,    ja: '東京都中野区',   en: 'Nakano, Tokyo',      note: { ja: '賃貸仲介', zh: '租赁中介', tw: '租賃中介', en: 'Leasing' } },
  { id: 'kawasaki',  type: 'rent', img: rentKawasaki,  ja: '神奈川県川崎市', en: 'Kawasaki, Kanagawa', note: { ja: '賃貸仲介', zh: '租赁中介', tw: '租賃中介', en: 'Leasing' } },
  { id: 'chigasaki', type: 'rent', img: rentChigasaki, ja: '神奈川県茅ヶ崎市', en: 'Chigasaki, Kanagawa', note: { ja: '賃貸仲介', zh: '租赁中介', tw: '租賃中介', en: 'Leasing' } },
  { id: 'yachimata', type: 'rent', img: rentYachimata, ja: '千葉県八街市',   en: 'Yachimata, Chiba',   note: { ja: '古家付土地', zh: '附旧屋土地', tw: '附舊屋土地', en: 'Land with house' } },
]

/* 全国マップの拠点(東京はまとめて1点) */
const MAP_POINTS = [
  { key: 'tokyo',     x: 190, y: 216, count: 7, labelY: 172, ja: '東京都',       en: 'Tokyo',     tokyo: true },
  { key: 'kamagaya',  x: 194, y: 214, count: 1, labelY: 150, ja: '千葉・鎌ケ谷', en: 'Kamagaya' },
  { key: 'yachimata', x: 199, y: 217, count: 1, labelY: 194, ja: '千葉・八街',   en: 'Yachimata' },
  { key: 'kawasaki',  x: 189, y: 219, count: 1, labelY: 216, ja: '神奈川・川崎', en: 'Kawasaki' },
  { key: 'yokohama',  x: 188, y: 221, count: 1, labelY: 238, ja: '神奈川・横浜', en: 'Yokohama' },
  { key: 'chigasaki', x: 185, y: 223, count: 1, labelY: 260, ja: '神奈川・茅ヶ崎', en: 'Chigasaki' },
]
const MAP_POINTS_WEST = [
  { key: 'kyoto', x: 126, y: 230, count: 1, labelX: 56, labelY: 186, ja: '京都市', en: 'Kyoto' },
  { key: 'osaka', x: 121, y: 236, count: 1, labelX: 50, labelY: 272, ja: '大阪市', en: 'Osaka' },
]

/* 東京の区(コード → 代表写真 + 件数)。中心座標は TOKYO_WARDS の実境界から。 */
const TOKYO_WARD_CASES = {
  '13114': { img: rentNakano,    count: 1 }, // 中野区
  '13104': { img: rentShinjuku1, count: 2 }, // 新宿区
  '13102': { img: saleChuo,      count: 1 }, // 中央区
  '13113': { img: saleShibuya,   count: 1 }, // 渋谷区
  '13110': { img: saleMeguro,    count: 1 }, // 目黒区
  '13109': { img: saleShinagawa, count: 1 }, // 品川区
}

/* 画面内の小さなUI文言(i18nを増やさず locale別に) */
const UI = {
  back:   { ja: '← 全国マップへ', zh: '← 返回全国地图', tw: '← 返回全國地圖', en: '← Back to Japan map' },
  expand: { ja: 'クリックで東京を拡大 →', zh: '点击展开东京 →', tw: '點擊展開東京 →', en: 'Click to expand Tokyo →' },
}
const tr = (obj, lang) => obj[lang] || obj.ja

/* ---------------------- 全国マップ:各地の写真を発散表示 --------------------- */
const NAT_LEFT = [ // 関西(西)
  { key: 'kyoto', x: 126, y: 230, img: saleKyoto, ja: '京都市', en: 'Kyoto' },
  { key: 'osaka', x: 121, y: 236, img: saleOsaka, ja: '大阪市', en: 'Osaka' },
]
const NAT_RIGHT = [ // 首都圏(東)
  { key: 'kamagaya',  x: 194, y: 214, img: saleKamagaya,  ja: '千葉・鎌ケ谷',   en: 'Kamagaya' },
  { key: 'yachimata', x: 199, y: 217, img: rentYachimata, ja: '千葉・八街',     en: 'Yachimata' },
  { key: 'kawasaki',  x: 189, y: 219, img: rentKawasaki,  ja: '神奈川・川崎',   en: 'Kawasaki' },
  { key: 'yokohama',  x: 188, y: 221, img: saleYokohama,  ja: '神奈川・横浜',   en: 'Yokohama' },
  { key: 'chigasaki', x: 185, y: 223, img: rentChigasaki, ja: '神奈川・茅ヶ崎', en: 'Chigasaki' },
]

function JapanRadial({ lang, w, onTokyo }) {
  const name = (p) => (lang === 'en' ? p.en : p.ja)
  const VB_W = 940
  const VB_H = 560
  const S = 1.42
  const mapOffX = (VB_W - 380 * S) / 2
  const mapOffY = (VB_H - 320 * S) / 2
  const P = (x, y) => [mapOffX + x * S, mapOffY + y * S]
  const TW = 152
  const TH = 94
  const slotY = (n, i) => (n <= 1 ? (VB_H - TH) / 2 : 12 + i * ((VB_H - 24 - TH) / (n - 1)))
  const [tkx, tky] = P(190, 216)
  const items = [
    ...NAT_LEFT.map((p, i) => ({ p, tx: 10, ty: slotY(NAT_LEFT.length, i), side: 'L' })),
    ...NAT_RIGHT.map((p, i) => ({ p, tx: VB_W - 10 - TW, ty: slotY(NAT_RIGHT.length, i), side: 'R' })),
  ]
  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full" role="img" aria-label={w.mapTitle}>
      <path
        d={JAPAN_PATH}
        transform={`translate(${mapOffX} ${mapOffY}) scale(${S})`}
        fill="#E4E9F0" stroke="#CBD5E1" strokeWidth="0.6" strokeLinejoin="round"
        className="cb-map-el"
      />
      {items.map((it, i) => {
        const [px, py] = P(it.p.x, it.p.y)
        const ax = it.side === 'L' ? it.tx + TW : it.tx
        const ay = it.ty + TH / 2
        const len = Math.hypot(px - ax, py - ay)
        const delay = 200 + i * 80
        return (
          <g key={it.p.key}>
            <line
              x1={ax} y1={ay} x2={px} y2={py} stroke="#B9C2CE" strokeWidth="1"
              style={{ strokeDasharray: len, strokeDashoffset: len, animation: `cbDraw .8s ease ${delay}ms forwards` }}
            />
            <circle cx={px} cy={py} r="4" fill="#E94F5B" stroke="#fff" strokeWidth="1.4" />
            <clipPath id={`nthumb-${it.p.key}`}>
              <rect x={it.tx} y={it.ty} width={TW} height={TH} rx="10" />
            </clipPath>
            <g className="cb-map-el" style={{ animationDelay: `${delay + 120}ms` }}>
              <image href={it.p.img} x={it.tx} y={it.ty} width={TW} height={TH} preserveAspectRatio="xMidYMid slice" clipPath={`url(#nthumb-${it.p.key})`} />
              <rect x={it.tx} y={it.ty + TH - 22} width={TW} height="22" fill="#0009" clipPath={`url(#nthumb-${it.p.key})`} />
              <rect x={it.tx} y={it.ty} width={TW} height={TH} rx="10" fill="none" stroke="#E3E7EC" strokeWidth="1.5" />
              <text x={it.tx + 8} y={it.ty + TH - 7} fontSize="11" fontWeight="700" fill="#fff">{name(it.p)}</text>
            </g>
          </g>
        )
      })}
      {/* 東京:クリックで23区へ */}
      <g
        className="cb-clickable"
        role="button" tabIndex={0} onClick={onTokyo}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onTokyo() } }}
      >
        <circle className="cb-ping" cx={tkx} cy={tky} r="7" fill="none" stroke="#385988" strokeWidth="1.6">
          <animate attributeName="r" values="7;20" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.55;0" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx={tkx} cy={tky} r="8" fill="#385988" stroke="#fff" strokeWidth="2" />
        <text x={tkx} y={tky + 3} fontSize="9" fontWeight="800" fill="#fff" textAnchor="middle">7</text>
        <text x={tkx + 14} y={tky - 3} fontSize="14" fontWeight="800" fill="#385988">{lang === 'en' ? 'Tokyo' : '東京都'}</text>
        <text x={tkx + 14} y={tky + 12} fontSize="10" fontWeight="700" fill="#D83F4B">{tr(UI.expand, lang)}</text>
      </g>
    </svg>
  )
}

/* -------------------- 東京:中心から写真へ発散する拡大図 -------------------- */
function TokyoRadial({ lang, w }) {
  const name = (wd) => (lang === 'en' ? wd.en : wd.name)
  const VB_W = 760
  const VB_H = 380
  const offX = (VB_W - TOKYO_VB.w) / 2
  const offY = (VB_H - TOKYO_VB.h) / 2
  const TW = 146
  const TH = 98

  const cases = TOKYO_WARDS.filter((wd) => TOKYO_WARD_CASES[wd.code])
  const sorted = [...cases].sort((a, b) => a.cx - b.cx)
  const half = Math.ceil(sorted.length / 2)
  const left = sorted.slice(0, half).sort((a, b) => a.cy - b.cy)
  const right = sorted.slice(half).sort((a, b) => a.cy - b.cy)
  const slotY = (n, i) => (n <= 1 ? (VB_H - TH) / 2 : 10 + i * ((VB_H - 20 - TH) / (n - 1)))

  const items = [
    ...left.map((wd, i) => ({ wd, tx: 8, ty: slotY(left.length, i), side: 'L' })),
    ...right.map((wd, i) => ({ wd, tx: VB_W - 8 - TW, ty: slotY(right.length, i), side: 'R' })),
  ]

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full" role="img" aria-label={w.tokyoTitle}>
      {/* 23区の実境界 */}
      {TOKYO_WARDS.map((wd, i) => (
        <path
          key={wd.code}
          d={wd.d}
          transform={`translate(${offX} ${offY})`}
          className={`cb-map-el cb-ward ${TOKYO_WARD_CASES[wd.code] ? 'cb-ward-on' : ''}`}
          style={{ animationDelay: `${i * 16}ms` }}
        >
          <title>{name(wd)}</title>
        </path>
      ))}

      {/* 発散する連線 + 写真サムネイル */}
      {items.map((it, i) => {
        const cx = offX + it.wd.cx
        const cy = offY + it.wd.cy
        const ax = it.side === 'L' ? it.tx + TW : it.tx
        const ay = it.ty + TH / 2
        const len = Math.hypot(cx - ax, cy - ay)
        const delay = 260 + i * 90
        const c = TOKYO_WARD_CASES[it.wd.code]
        return (
          <g key={it.wd.code}>
            <line
              x1={ax} y1={ay} x2={cx} y2={cy}
              stroke="#B9C2CE" strokeWidth="1"
              style={{ strokeDasharray: len, strokeDashoffset: len, animation: `cbDraw .75s ease ${delay}ms forwards` }}
            />
            <circle cx={cx} cy={cy} r="4" fill="#E94F5B" stroke="#fff" strokeWidth="1.4" />
            <clipPath id={`cthumb-${it.wd.code}`}>
              <rect x={it.tx} y={it.ty} width={TW} height={TH} rx="10" />
            </clipPath>
            <g className="cb-map-el" style={{ animationDelay: `${delay + 120}ms` }}>
              <image
                href={c.img}
                x={it.tx} y={it.ty} width={TW} height={TH}
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#cthumb-${it.wd.code})`}
              />
              <rect x={it.tx} y={it.ty} width={TW} height={TH} rx="10" fill="none" stroke="#E3E7EC" strokeWidth="1.5" />
              <rect x={it.tx} y={it.ty + TH - 24} width={TW} height="24" fill="#0009"
                    clipPath={`url(#cthumb-${it.wd.code})`} />
              <text x={it.tx + 8} y={it.ty + TH - 8} fontSize="11" fontWeight="700" fill="#fff">
                {name(it.wd)}<tspan fill="#FFC9C2"> {c.count}{w.countUnit}</tspan>
              </text>
            </g>
          </g>
        )
      })}
    </svg>
  )
}

export default function Works() {
  const { t, lang } = useLang()
  const w = t.works
  const [view, setView] = useState('japan')

  const badge = (type) => (type === 'sale' ? 'bg-red/10 text-red-dark' : 'bg-navy/10 text-navy')

  return (
    <>
      {/* Hero */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{w.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">{w.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{w.intro}</p>
        </div>
      </section>

      {/* インタラクティブ・マップ */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-line bg-white p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-ink">{view === 'japan' ? w.mapTitle : w.tokyoTitle}</h2>
              <p className="mt-1 text-xs text-ink-soft">{view === 'japan' ? w.mapSub : w.tokyoSub}</p>
            </div>
            {view === 'tokyo' && (
              <button
                onClick={() => setView('japan')}
                className="shrink-0 rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-ink transition hover:border-red hover:text-red-dark"
              >
                {tr(UI.back, lang)}
              </button>
            )}
          </div>
          <div className="mt-4">
            {view === 'japan' ? (
              <JapanRadial lang={lang} w={w} onTokyo={() => setView('tokyo')} />
            ) : (
              <TokyoRadial lang={lang} w={w} />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
