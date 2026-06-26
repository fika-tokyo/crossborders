// CROSSBORDERS brand logo — recreated from the official logo guidelines.
// Colors: coral-red #E94F5B + blue #385988.

const RED = '#E94F5B'
const BLUE = '#385988'

// Circular emblem mark: arched "CROSS"(red) "BORDERS"(blue) + JAPAN + red sun
// + striped blue sea. viewBox 240×200.
export function LogoEmblem({ className = '', title = 'CROSSBORDERS' }) {
  return (
    <svg viewBox="0 0 240 200" className={className} role="img" aria-label={title}
         xmlns="http://www.w3.org/2000/svg">
      <g fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="25"
         textAnchor="middle" dominantBaseline="central">
        <text x="47.04" y="171.21" fill={RED} transform="rotate(-124.00 47.04 171.21)">C</text>
        <text x="33.75" y="139.48" fill={RED} transform="rotate(-101.45 33.75 139.48)">R</text>
        <text x="33.64" y="105.07" fill={RED} transform="rotate(-78.91 33.64 105.07)">O</text>
        <text x="46.73" y="73.26" fill={RED} transform="rotate(-56.36 46.73 73.26)">S</text>
        <text x="71.02" y="48.89" fill={RED} transform="rotate(-33.82 71.02 48.89)">S</text>
        <text x="102.80" y="35.70" fill={BLUE} transform="rotate(-11.27 102.80 35.70)">B</text>
        <text x="137.20" y="35.70" fill={BLUE} transform="rotate(11.27 137.20 35.70)">O</text>
        <text x="168.98" y="48.89" fill={BLUE} transform="rotate(33.82 168.98 48.89)">R</text>
        <text x="193.27" y="73.26" fill={BLUE} transform="rotate(56.36 193.27 73.26)">D</text>
        <text x="206.36" y="105.07" fill={BLUE} transform="rotate(78.91 206.36 105.07)">E</text>
        <text x="206.25" y="139.48" fill={BLUE} transform="rotate(101.45 206.25 139.48)">R</text>
        <text x="192.96" y="171.21" fill={BLUE} transform="rotate(124.00 192.96 171.21)">S</text>
      </g>
      <text x="100" y="114" fill={BLUE} fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="700" fontSize="10.5" letterSpacing="2.5" textAnchor="middle">JAPAN</text>
      <circle cx="143" cy="106" r="16.5" fill={RED} />
      <path d="M 66.08 129 L 173.92 129 A 54 54 0 0 1 171.25 143 L 68.75 143 A 54 54 0 0 1 66.08 129 Z" fill={BLUE} />
      <path d="M 71.14 149 L 168.86 149 A 54 54 0 0 1 160.25 162 L 79.75 162 A 54 54 0 0 1 71.14 149 Z" fill={BLUE} />
      <path d="M 86.06 168 L 153.94 168 A 54 54 0 0 1 127.33 179.5 L 112.67 179.5 A 54 54 0 0 1 86.06 168 Z" fill={BLUE} />
    </svg>
  )
}

// Horizontal wordmark: CROSS (red) BORDERS (blue). For headers / small spaces.
// onDark=true makes "BORDERS" white so it reads on dark backgrounds.
export function Wordmark({ className = '', onDark = false }) {
  return (
    <span className={`font-bold tracking-[0.12em] leading-none ${className}`}>
      <span style={{ color: RED }}>CROSS</span>
      <span style={{ color: onDark ? '#ffffff' : BLUE }}>BORDERS</span>
    </span>
  )
}
