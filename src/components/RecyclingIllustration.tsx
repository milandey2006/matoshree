const INK = "var(--ink)";
const GREEN = "var(--green)";
const TINT = "#cfdccd";
const CLEAR = "#e8eef0";

const MID_Y = 104;

const CHIPS: { p: string; f: string }[] = [
  { p: "70,322 82,314 90,324 78,332", f: GREEN },
  { p: "92,330 104,320 114,330 100,338", f: CLEAR },
  { p: "118,326 130,318 138,330 124,336", f: TINT },
  { p: "142,330 154,322 162,334 148,340", f: GREEN },
  { p: "164,334 176,328 180,340 168,344", f: CLEAR },
  { p: "60,338 72,332 76,344 64,346", f: CLEAR },
  { p: "80,340 94,336 96,348 82,350", f: TINT },
  { p: "102,342 116,338 120,350 106,352", f: GREEN },
  { p: "124,342 138,338 142,350 128,354", f: CLEAR },
  { p: "146,344 160,342 162,352 148,356", f: TINT },
  { p: "96,308 106,302 112,312 102,316", f: TINT },
  { p: "120,306 130,300 136,310 126,314", f: CLEAR },
  { p: "108,318 116,312 122,320 112,324", f: GREEN },
  { p: "134,314 144,310 148,320 138,322", f: GREEN },
];

function Arrow({ x1, x2 }: { x1: number; x2: number }) {
  return (
    <g stroke={GREEN} strokeWidth="2" fill="none">
      <line x1={x1} y1={MID_Y} x2={x2} y2={MID_Y} strokeDasharray="4 5" />
      <polyline points={`${x2 - 9},${MID_Y - 7} ${x2},${MID_Y} ${x2 - 9},${MID_Y + 7}`} />
    </g>
  );
}

function Label({ x, n, text }: { x: number; n: string; text: string }) {
  return (
    <g textAnchor="middle">
      <text x={x} y="222" fontFamily="var(--mono)" fontSize="15" fill={GREEN}>
        {n}
      </text>
      <text x={x} y="252" fontFamily="var(--serif)" fontSize="24" fill={INK}>
        {text}
      </text>
    </g>
  );
}

export default function RecyclingIllustration() {
  return (
    <figure className="illustration">
      <svg
        viewBox="0 0 720 280"
        role="img"
        aria-label="Illustration: a scrap PET bottle is broken down into plastic chips and made into a PET plastic roll"
      >
        <rect x="0.5" y="0.5" width="719" height="279" fill="var(--paper-2)" stroke="var(--rule)" />

        {/* 01 Scrap PET bottle */}
        <g
          transform={`translate(120 ${MID_Y}) scale(0.85) translate(-120 -116)`}
          stroke={INK}
          strokeWidth="1.8"
          strokeLinejoin="round"
        >
          <rect x="108" y="34" width="24" height="16" rx="2" fill={GREEN} />
          <path
            d="M112 50 H128 V62 C128 72 148 78 148 98 V182 C148 192 141 198 132 198 H108 C99 198 92 192 92 182 V98 C92 78 112 72 112 62 Z"
            fill={CLEAR}
          />
          <path d="M92 118 H148 M92 168 H148" fill="none" />
          <path d="M100 128 C110 136 104 150 116 158" fill="none" stroke={GREEN} strokeWidth="1.4" />
        </g>
        <Label x={120} n="01" text="Scrap PET bottle" />

        <Arrow x1={190} x2={248} />

        {/* 02 Plastic chips */}
        <g
          transform={`translate(350 ${MID_Y}) scale(1.4) translate(-120 -328)`}
          stroke={INK}
          strokeWidth="1"
          strokeLinejoin="round"
        >
          {CHIPS.map((c) => (
            <polygon key={c.p} points={c.p} fill={c.f} />
          ))}
        </g>
        <Label x={350} n="02" text="Plastic chips" />

        <Arrow x1={448} x2={492} />

        {/* 03 PET plastic roll */}
        <g
          transform={`translate(560 ${MID_Y}) scale(0.9) translate(-120 -467)`}
          stroke={INK}
          strokeWidth="1.7"
          strokeLinejoin="round"
        >
          <path d="M150 494 H270 L282 506 H162 Z" fill={TINT} />
          <ellipse cx="70" cy="461" rx="16" ry="33" fill={CLEAR} />
          <rect x="70" y="428" width="80" height="66" fill={CLEAR} stroke="none" />
          <path d="M70 428 H150 M70 494 H150" fill="none" />
          <ellipse cx="150" cy="461" rx="16" ry="33" fill={TINT} />
          <ellipse cx="150" cy="461" rx="10" ry="21" fill="none" />
          <ellipse cx="150" cy="461" rx="4" ry="9" fill={GREEN} />
        </g>
        <Label x={600} n="03" text="PET plastic roll" />
      </svg>
      <figcaption>From scrap bottle to plastic chips and rolls.</figcaption>
    </figure>
  );
}
