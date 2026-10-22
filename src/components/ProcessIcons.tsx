import type { ReactNode } from "react";

/*
 * Line icons for the seven process steps.
 * Shared style: 80x80 viewBox, ink outline at 1.6, fills limited to
 * green, a light green tint and a blue-grey "clear plastic".
 */

const INK = "var(--ink)";
const GREEN = "var(--green)";
const TINT = "#cfdccd";
const CLEAR = "#e8eef0";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 80 80"
      width="80"
      height="80"
      fill="none"
      stroke={INK}
      strokeWidth={1.6}
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/* A bottle drawn at 12x30 with its cap top-centre at (0,0), then placed. */
function Bottle({
  x,
  y,
  s = 1,
  r = 0,
  fill = CLEAR,
}: {
  x: number;
  y: number;
  s?: number;
  r?: number;
  fill?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <rect x="-3" y="0" width="6" height="4" rx="0.8" fill={GREEN} vectorEffect="non-scaling-stroke" />
      <path
        d="M-2.5 4 V7 C-2.5 9.5 -6 10.5 -6 14 V28 Q-6 30 -4 30 H4 Q6 30 6 28 V14 C6 10.5 2.5 9.5 2.5 7 V4 Z"
        fill={fill}
        vectorEffect="non-scaling-stroke"
      />
      <path d="M-6 18 H6 M-6 24 H6" vectorEffect="non-scaling-stroke" />
    </g>
  );
}

/* One small PET flake. */
function Flake({ x, y, r = 0, fill }: { x: number; y: number; r?: number; fill: string }) {
  return (
    <polygon
      points="0,0 6,-1.5 7,3.5 1,4.5"
      transform={`translate(${x} ${y}) rotate(${r})`}
      fill={fill}
      strokeWidth={1.3}
    />
  );
}

function gearPath(cx: number, cy: number, ro: number, ri: number, teeth: number, phase: number) {
  const step = (Math.PI * 2) / teeth;
  const pt = (rad: number, a: number) =>
    `${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`;
  const pts: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a = phase + i * step;
    pts.push(pt(ri, a - 0.3 * step), pt(ro, a - 0.17 * step), pt(ro, a + 0.17 * step), pt(ri, a + 0.3 * step));
  }
  return `M${pts.join(" L")} Z`;
}

export function IconCollect() {
  return (
    <Svg>
      {/* sack opening */}
      <path d="M17 36 Q40 29 63 36 Q40 42 17 36 Z" fill={TINT} />
      <Bottle x={40} y={9} s={0.8} />
      <Bottle x={29} y={15} s={0.75} r={-16} fill={TINT} />
      <Bottle x={51} y={14} s={0.75} r={15} />
      {/* sack */}
      <path d="M17 36 Q40 42 63 36 C66 46 67 58 63 68 Q40 76 17 68 C13 58 14 46 17 36 Z" fill={TINT} />
      <path d="M19 51 Q40 56 61 51 M18 61 Q40 66 62 61" strokeDasharray="2 3" />
      <path d="M33 45 Q40 47 47 45" stroke={GREEN} strokeWidth={2.4} />
    </Svg>
  );
}

export function IconSort() {
  return (
    <Svg>
      {/* conveyor */}
      <rect x="6" y="22" width="68" height="8" rx="4" fill={TINT} />
      <circle cx="10" cy="26" r="2" />
      <circle cx="70" cy="26" r="2" />
      <rect x="17" y="18" width="7" height="4" rx="0.8" fill={GREEN} />
      <path d="M31 22 L35 16.5 L44 17.5 L42 22 Z" fill={CLEAR} />
      <Bottle x={58} y={7} s={0.5} />

      {/* drop arrows */}
      <g stroke={GREEN}>
        <path d="M17 33 V41 M40 33 V41 M63 33 V41" strokeDasharray="2 2.5" />
        <path d="M14.5 38.5 L17 41 L19.5 38.5 M37.5 38.5 L40 41 L42.5 38.5 M60.5 38.5 L63 41 L65.5 38.5" />
      </g>

      {/* contents peeking out of the bins */}
      <rect x="10" y="42" width="5.5" height="4" rx="0.8" fill={GREEN} />
      <rect x="17.5" y="41" width="5.5" height="4" rx="0.8" fill={GREEN} transform="rotate(12 20 43)" />
      <path d="M33 47 L35.5 41 L41.5 42 L40 47 Z" fill={CLEAR} />
      <path d="M40 47 L43 42.5 L48 44 L47 47 Z" fill={CLEAR} />
      <Bottle x={59} y={36} s={0.5} r={-12} />
      <Bottle x={67} y={35} s={0.5} r={12} />

      {/* bins */}
      <path d="M7 46 H27 L25 72 H9 Z" fill={TINT} />
      <path d="M30 46 H50 L48 72 H32 Z" fill={TINT} />
      <path d="M53 46 H73 L71 72 H55 Z" fill={TINT} />
      <path d="M7.5 52 H26.5 M30.5 52 H49.5 M53.5 52 H72.5" />
    </Svg>
  );
}

export function IconBale() {
  return (
    <Svg>
      {/* faces */}
      <path d="M40 14 L66 27 L40 40 L14 27 Z" fill={CLEAR} />
      <path d="M14 27 L40 40 V68 L14 55 Z" fill={CLEAR} />
      <path d="M40 40 L66 27 V55 L40 68 Z" fill={TINT} />

      {/* pressed bottles */}
      <g strokeWidth={1.2}>
        <ellipse cx="27" cy="25" rx="3.4" ry="1.8" fill={CLEAR} />
        <ellipse cx="40" cy="20" rx="3.4" ry="1.8" fill={CLEAR} />
        <ellipse cx="51" cy="28" rx="3.4" ry="1.8" fill={CLEAR} />
        <path d="M17 37 C21 36 23 42 27 41 C31 40 33 46 37 46" />
        <path d="M17 47 C21 46 23 52 27 51 C31 50 33 56 37 56" />
        <path d="M43 51 C46 46 49 51 52 46 C55 41 58 46 63 40" />
        <path d="M43 61 C46 56 49 61 52 56 C55 51 58 56 63 50" />
      </g>

      {/* straps */}
      <g stroke={GREEN} strokeWidth={2.4}>
        <path d="M22.7 22.7 L48.7 35.7 V63.7" />
        <path d="M31.3 18.3 L57.3 31.3 V59.3" />
      </g>

      {/* edges on top */}
      <path d="M40 14 L66 27 V55 L40 68 L14 55 V27 Z M14 27 L40 40 L66 27 M40 40 V68" />
    </Svg>
  );
}

export function IconCrush() {
  return (
    <Svg>
      <Bottle x={40} y={1} s={0.5} />
      <path d={gearPath(28.3, 31, 13, 10.3, 11, 0)} fill={TINT} />
      <path d={gearPath(51.7, 31, 13, 10.3, 11, Math.PI + Math.PI / 11)} fill={TINT} />
      <circle cx="28.3" cy="31" r="3" fill={GREEN} />
      <circle cx="51.7" cy="31" r="3" fill={GREEN} />

      <Flake x={36} y={49} r={-10} fill={GREEN} />
      <Flake x={44} y={53} r={20} fill={CLEAR} />
      <Flake x={29} y={57} r={15} fill={CLEAR} />
      <Flake x={40} y={60} r={-20} fill={TINT} />
      <Flake x={50} y={63} r={8} fill={GREEN} />
      <Flake x={23} y={67} r={-5} fill={TINT} />
      <Flake x={36} y={70} r={25} fill={CLEAR} />
    </Svg>
  );
}

export function IconWash() {
  return (
    <Svg>
      {/* steam */}
      <path d="M28 25 c-2.5 -2.5 2.5 -5 0 -7.5 s2.5 -5 0 -7.5" />
      <path d="M40 23 c-2.5 -2.5 2.5 -5 0 -7.5 s2.5 -5 0 -7.5" />
      <path d="M52 25 c-2.5 -2.5 2.5 -5 0 -7.5 s2.5 -5 0 -7.5" />

      {/* water */}
      <path
        d="M12 40 q4 -3 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 V64 Q68 68 64 68 H16 Q12 68 12 64 Z"
        fill={CLEAR}
      />
      <Flake x={20} y={49} r={10} fill={GREEN} />
      <Flake x={33} y={55} r={-15} fill={TINT} />
      <Flake x={46} y={47} r={20} fill={GREEN} />
      <Flake x={54} y={57} r={-8} fill={TINT} />
      <Flake x={25} y={60} r={5} fill={GREEN} />
      <Flake x={42} y={60} r={-20} fill={TINT} />
      <g strokeWidth={1.2}>
        <circle cx="38" cy="45" r="1.4" />
        <circle cx="59" cy="48" r="1.2" />
        <circle cx="27" cy="44" r="1" />
      </g>

      {/* tank */}
      <path d="M12 30 V64 Q12 68 16 68 H64 Q68 68 68 64 V30 M9 30 H15 M65 30 H71" />
      <path d="M68 59 H74 V64" />
      <path d="M18 68 V73 M62 68 V73" />
    </Svg>
  );
}

export function IconChips() {
  return (
    <Svg>
      <path d="M8 66 Q20 40 40 34 Q60 40 72 66 Z" fill={CLEAR} />
      <Flake x={37} y={37} r={-8} fill={GREEN} />
      <Flake x={29} y={44} r={20} fill={TINT} />
      <Flake x={44} y={43} r={-15} fill={CLEAR} />
      <Flake x={21} y={52} r={10} fill={GREEN} />
      <Flake x={34} y={51} r={-25} fill={TINT} />
      <Flake x={48} y={50} r={12} fill={GREEN} />
      <Flake x={56} y={55} r={-10} fill={TINT} />
      <Flake x={15} y={59} r={8} fill={TINT} />
      <Flake x={27} y={58} r={30} fill={CLEAR} />
      <Flake x={40} y={58} r={-5} fill={GREEN} />
      <Flake x={52} y={60} r={18} fill={CLEAR} />
      <Flake x={62} y={59} r={-20} fill={GREEN} />
      <path d="M5 66 H75" />
    </Svg>
  );
}

export function IconProducts() {
  return (
    <Svg>
      {/* unrolled sheet */}
      <path d="M14 51 H62 L72 64 H24 Z" fill={CLEAR} />
      <path d="M30 57.5 H66" strokeWidth={1.2} />
      {/* roll */}
      <ellipse cx="14" cy="36" rx="7" ry="15" fill={CLEAR} />
      <rect x="14" y="21" width="30" height="30" fill={CLEAR} stroke="none" />
      <path d="M14 21 H44 M14 51 H44" />
      <ellipse cx="44" cy="36" rx="7" ry="15" fill={TINT} />
      <ellipse cx="44" cy="36" rx="4.4" ry="9.5" />
      <ellipse cx="44" cy="36" rx="2" ry="4.2" fill={GREEN} />
    </Svg>
  );
}
