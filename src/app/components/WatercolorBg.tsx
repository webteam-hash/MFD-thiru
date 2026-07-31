/**
 * Organic watercolor sage blobs — scattered here & there on white.
 * Palette: #659287 | #88BDA4 | #B1D3B9 | #E6F2DD
 */

interface Blob {
  x: number   // vw %
  y: number   // vh %
  w: number   // px
  h: number   // px
  color: string
  op: number  // 0–1
  blur: number
  r: string   // border-radius
  delay?: number
}

const BLOBS: Blob[] = [
  /* ── TOP-LEFT CORNER CLUSTER ── */
  { x: -4,  y: -6,  w: 520, h: 420, color: '#B1D3B9', op: 0.55, blur: 70, r: '62% 38% 28% 72% / 58% 32% 68% 42%' },
  { x:  0,  y: -2,  w: 320, h: 280, color: '#88BDA4', op: 0.40, blur: 55, r: '42% 58% 68% 32% / 44% 56% 44% 56%' },
  { x:  6,  y:  5,  w: 180, h: 160, color: '#659287', op: 0.22, blur: 40, r: '70% 30% 54% 46% / 30% 65% 35% 70%' },

  /* ── TOP-RIGHT CORNER CLUSTER ── */
  { x: 88,  y: -4,  w: 480, h: 360, color: '#88BDA4', op: 0.45, blur: 65, r: '38% 62% 62% 38% / 55% 40% 60% 45%' },
  { x: 82,  y:  2,  w: 260, h: 240, color: '#659287', op: 0.25, blur: 48, r: '58% 42% 36% 64% / 46% 62% 38% 54%' },

  /* ── MID-LEFT DRIFT ── */
  { x: -6,  y: 38,  w: 360, h: 280, color: '#B1D3B9', op: 0.38, blur: 60, r: '45% 55% 65% 35% / 62% 38% 62% 38%', delay: 0.3 },
  { x: -2,  y: 45,  w: 180, h: 150, color: '#E6F2DD', op: 0.70, blur: 35, r: '68% 32% 48% 52% / 38% 68% 32% 62%' },

  /* ── MID-RIGHT DRIFT ── */
  { x: 87,  y: 40,  w: 340, h: 260, color: '#B1D3B9', op: 0.42, blur: 58, r: '32% 68% 52% 48% / 58% 42% 58% 42%', delay: 0.6 },
  { x: 92,  y: 50,  w: 200, h: 170, color: '#88BDA4', op: 0.28, blur: 44, r: '60% 40% 38% 62% / 42% 60% 40% 60%' },

  /* ── BOTTOM-RIGHT CLUSTER ── */
  { x: 80,  y: 82,  w: 500, h: 380, color: '#B1D3B9', op: 0.50, blur: 72, r: '35% 65% 42% 58% / 50% 44% 56% 50%' },
  { x: 85,  y: 88,  w: 300, h: 250, color: '#88BDA4', op: 0.32, blur: 52, r: '55% 45% 32% 68% / 40% 62% 38% 60%' },
  { x: 78,  y: 94,  w: 160, h: 140, color: '#659287', op: 0.20, blur: 38, r: '72% 28% 58% 42% / 32% 72% 28% 68%' },

  /* ── BOTTOM-LEFT DRIFT ── */
  { x: -3,  y: 80,  w: 380, h: 290, color: '#88BDA4', op: 0.35, blur: 62, r: '48% 52% 68% 32% / 60% 40% 65% 35%', delay: 0.9 },
  { x:  4,  y: 88,  w: 220, h: 180, color: '#B1D3B9', op: 0.45, blur: 46, r: '38% 62% 44% 56% / 56% 38% 62% 38%' },

  /* ── CENTER HAZES (very faint, large) ── */
  { x: 42,  y: 20,  w: 600, h: 380, color: '#E6F2DD', op: 0.80, blur: 90, r: '50% 50% 50% 50%' },
  { x: 55,  y: 60,  w: 500, h: 320, color: '#E6F2DD', op: 0.70, blur: 85, r: '50% 50% 50% 50%' },

  /* ── RANDOM SCATTERED ACCENTS ── */
  { x: 22,  y: 55,  w: 260, h: 200, color: '#88BDA4', op: 0.20, blur: 48, r: '60% 40% 70% 30% / 30% 70% 42% 58%', delay: 0.4 },
  { x: 65,  y: 72,  w: 220, h: 180, color: '#659287', op: 0.15, blur: 42, r: '44% 56% 38% 62% / 62% 38% 56% 44%', delay: 0.7 },
  { x: 35,  y: 35,  w: 180, h: 150, color: '#B1D3B9', op: 0.30, blur: 38, r: '52% 48% 60% 40% / 46% 54% 46% 54%', delay: 0.2 },
]

export function WatercolorBg({ dense = false }: { dense?: boolean }) {
  const blobs = dense ? BLOBS : BLOBS.filter((_, i) => i % 2 === 0 || BLOBS[i].op > 0.5)

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {BLOBS.map((b, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.w,
            height: b.h,
            background: `radial-gradient(ellipse at 40% 40%, ${hexAlpha(b.color, b.op)} 0%, ${hexAlpha(b.color, b.op * 0.5)} 40%, transparent 72%)`,
            borderRadius: b.r,
            filter: `blur(${b.blur}px)`,
            mixBlendMode: 'multiply',
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  )
}

function hexAlpha(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${a})`
}

/* ─────────────────────────────────────────────
   SectionBlob — inline blob for specific sections
   ───────────────────────────────────────────── */
export function SectionBlob({
  x = '0%', y = '0%', w = 400, h = 300, color = '#88BDA4', op = 0.35, blur = 60,
  r = '60% 40% 50% 50% / 50% 60% 40% 50%',
}: {
  x?: string; y?: string; w?: number; h?: number;
  color?: string; op?: number; blur?: number; r?: string;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: x, top: y,
        width: w, height: h,
        background: `radial-gradient(ellipse at 40% 40%, ${hexAlpha(color, op)} 0%, ${hexAlpha(color, op * 0.45)} 42%, transparent 70%)`,
        borderRadius: r,
        filter: `blur(${blur}px)`,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
