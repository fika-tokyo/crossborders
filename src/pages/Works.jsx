import { useLang } from '../i18n.jsx'
import { JAPAN_PATH, TOKYO23_PATH } from '../assets/cases/japanPath.js'

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
   成約事例データ。地図座標(x,y)は japanPath.js と同じ投影で算出済み。
   type: 'sale' 売買仲介 / 'rent' 賃貸仲介
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

/* 東京拡大図の区ポイント(TOKYO23_PATH と同じ投影) */
const TOKYO_POINTS = [
  { key: 'nakano',    x: 85,  y: 127, count: 1, labelY: 90,  ja: '中野区',  en: 'Nakano' },
  { key: 'shinjuku',  x: 115, y: 139, count: 2, labelY: 125, ja: '新宿区',  en: 'Shinjuku' },
  { key: 'chuo',      x: 166, y: 160, count: 1, labelY: 160, ja: '中央区',  en: 'Chuo' },
  { key: 'shibuya',   x: 111, y: 172, count: 1, labelY: 195, ja: '渋谷区',  en: 'Shibuya' },
  { key: 'meguro',    x: 111, y: 187, count: 1, labelY: 230, ja: '目黒区',  en: 'Meguro' },
  { key: 'shinagawa', x: 135, y: 217, count: 1, labelY: 265, ja: '品川区',  en: 'Shinagawa' },
]

function JapanMap({ lang, w }) {
  const name = (p) => (lang === 'en' ? p.en : p.ja)
  const unit = w.countUnit
  return (
    <svg viewBox="0 0 380 320" className="w-full" role="img" aria-label={w.mapTitle}>
      {/* 日本列島(簡略) */}
      <path d={JAPAN_PATH} fill="#E4E9F0" stroke="#CBD5E1" strokeWidth="0.6" strokeLinejoin="round" />

      {/* 関西 */}
      {MAP_POINTS_WEST.map((p) => (
        <g key={p.key}>
          <line x1={p.x} y1={p.y} x2={p.labelX + 34} y2={p.labelY - 3} stroke="#96959A" strokeWidth="0.7" />
          <circle cx={p.x} cy={p.y} r="3.4" fill="#E94F5B" stroke="#fff" strokeWidth="1.1" />
          <text x={p.labelX} y={p.labelY - 6} fontSize="9.5" fontWeight="700" fill="#3E3A39">{name(p)}</text>
          <text x={p.labelX} y={p.labelY + 4} fontSize="8" fill="#D83F4B" fontWeight="700">{p.count}{unit}</text>
        </g>
      ))}

      {/* 首都圏(右側へ引き出し) */}
      {MAP_POINTS.map((p) => (
        <g key={p.key}>
          <line x1={p.x} y1={p.y} x2={266} y2={p.labelY - 3} stroke="#96959A" strokeWidth="0.7" />
          {p.tokyo ? (
            <circle cx={p.x} cy={p.y} r="4.6" fill="#385988" stroke="#fff" strokeWidth="1.2" />
          ) : (
            <circle cx={p.x} cy={p.y} r="3" fill="#E94F5B" stroke="#fff" strokeWidth="1" />
          )}
          <text x={272} y={p.labelY} fontSize="9.5" fontWeight={p.tokyo ? '800' : '700'} fill={p.tokyo ? '#385988' : '#3E3A39'}>
            {name(p)}
            <tspan fill="#D83F4B" fontWeight="700"> {p.count}{unit}</tspan>
          </text>
          {p.tokyo && (
            <text x={272} y={p.labelY + 10} fontSize="7" fill="#96959A">{w.tokyoHint}</text>
          )}
        </g>
      ))}
    </svg>
  )
}

function TokyoInset({ lang, w }) {
  const name = (p) => (lang === 'en' ? p.en : p.ja)
  const unit = w.countUnit
  return (
    <svg viewBox="0 0 390 300" className="w-full" role="img" aria-label={w.tokyoTitle}>
      {/* 東京23区の実形 */}
      <path d={TOKYO23_PATH} fill="#E4E9F0" stroke="#CBD5E1" strokeWidth="1" strokeLinejoin="round" />
      <text x="18" y="288" fontSize="9" fill="#96959A" letterSpacing="2">TOKYO 23 WARDS</text>
      {TOKYO_POINTS.map((p) => (
        <g key={p.key}>
          <line x1={p.x} y1={p.y} x2={288} y2={p.labelY - 3} stroke="#96959A" strokeWidth="0.7" />
          <circle cx={p.x} cy={p.y} r={p.count > 1 ? 5 : 3.6} fill="#E94F5B" stroke="#fff" strokeWidth="1.2" />
          {p.count > 1 && (
            <text x={p.x} y={p.y + 2.6} fontSize="7" fontWeight="800" fill="#fff" textAnchor="middle">{p.count}</text>
          )}
          <text x={294} y={p.labelY} fontSize="10" fontWeight="700" fill="#3E3A39">
            {name(p)}
            <tspan fill="#D83F4B"> {p.count}{unit}</tspan>
          </text>
        </g>
      ))}
    </svg>
  )
}

export default function Works() {
  const { t, lang } = useLang()
  const w = t.works

  const badge = (type) =>
    type === 'sale'
      ? 'bg-red/10 text-red-dark'
      : 'bg-navy/10 text-navy'

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

      {/* マップ2枚 */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-lg font-bold text-ink">{w.mapTitle}</h2>
            <p className="mt-1 text-xs text-ink-soft">{w.mapSub}</p>
            <div className="mt-4">
              <JapanMap lang={lang} w={w} />
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-lg font-bold text-ink">{w.tokyoTitle}</h2>
            <p className="mt-1 text-xs text-ink-soft">{w.tokyoSub}</p>
            <div className="mt-4">
              <TokyoInset lang={lang} w={w} />
            </div>
          </div>
        </div>
      </section>

      {/* 事例カード */}
      <section className="bg-mist py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{w.casesTitle}</h2>
          <p className="mt-2 text-ink-soft">{w.casesSub}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <div key={c.id} className="overflow-hidden rounded-2xl border border-line bg-white transition hover:border-red hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-cloud">
                  <img src={c.img} alt={lang === 'en' ? c.en : c.ja} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${badge(c.type)}`}>
                    {c.type === 'sale' ? w.saleBadge : w.rentBadge}
                  </span>
                  <h3 className="mt-2 font-semibold text-ink">{lang === 'en' ? c.en : c.ja}</h3>
                  <p className="mt-0.5 text-sm text-ink-soft">{c.note[lang] || c.note.ja}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
