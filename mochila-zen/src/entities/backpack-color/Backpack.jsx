export default function Backpack({ color = '#7FA38A', size = 280 }) {
  return (
    <svg width={size} viewBox="0 0 200 240" role="img" aria-label="Ilustração da Mochila Zen">
      <path d="M70 40c0-22 60-22 60 0" fill="none" stroke="#2F4A3A" strokeWidth="9" strokeLinecap="round" />
      <rect x="25" y="38" width="150" height="186" rx="62" fill={color} />
      <rect x="55" y="120" width="90" height="60" rx="22" fill="rgba(0,0,0,.14)" />
      <rect x="62" y="132" width="76" height="6" rx="3" fill="#F6F1E7" />
      <path d="M62 78h76" stroke="#F6F1E7" strokeWidth="6" strokeLinecap="round" />
      <circle cx="82" cy="58" r="3.5" fill="#2F4A3A" /><circle cx="118" cy="58" r="3.5" fill="#2F4A3A" />
      <path d="M90 66q10 7 20 0" fill="none" stroke="#2F4A3A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
