import { C, PROJECTIONS } from '../data/constants';

// ─── SVG: Donut chart ─────────────────────────────────────────────────────────
export function DonutChart({ items, total, size = 260 }) {
  const cx = size / 2, cy = size / 2;
  const R = size * 0.43, r = size * 0.29;
  const GAP = 0.022;
  const START = -Math.PI / 2;

  const startAngles = items.reduce((acc, item) => {
    const prev = acc[acc.length - 1];
    return [...acc, prev + (item.htg / total) * 2 * Math.PI];
  }, [START]);

  const segments = items.map((item, idx) => {
    const baseAngle = startAngles[idx];
    const fraction  = item.htg / total;
    const fullAng   = fraction * 2 * Math.PI;
    const drawAng   = Math.max(fullAng - GAP, 0.001);
    const a1 = baseAngle + GAP / 2;
    const a2 = a1 + drawAng;
    const ox1 = cx + R * Math.cos(a1), oy1 = cy + R * Math.sin(a1);
    const ox2 = cx + R * Math.cos(a2), oy2 = cy + R * Math.sin(a2);
    const ix2 = cx + r * Math.cos(a2), iy2 = cy + r * Math.sin(a2);
    const ix1 = cx + r * Math.cos(a1), iy1 = cy + r * Math.sin(a1);
    const large = fraction > 0.5 ? 1 : 0;
    const d = `M${ox1},${oy1} A${R},${R} 0,${large},1 ${ox2},${oy2} L${ix2},${iy2} A${r},${r} 0,${large},0 ${ix1},${iy1}Z`;
    return { ...item, d };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "block" }}>
      {segments.map((seg, i) => (
        <path key={i} d={seg.d} fill={seg.color} opacity={0.93} />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.88} fill="rgba(0,8,30,0.96)" />
      <text x={cx} y={cy - 10} textAnchor="middle" fill="#fff"
            fontSize="21" fontWeight="800" fontFamily="'Segoe UI',sans-serif">
        G {total.toLocaleString()}M
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="#7EC8E3"
            fontSize="11" fontFamily="'Segoe UI',sans-serif">
        Bidjè Total
      </text>
      <text x={cx} y={cy + 28} textAnchor="middle" fill="#4A7890"
            fontSize="10" fontFamily="'Segoe UI',sans-serif">
        {items.length} Sous Finansman
      </text>
    </svg>
  );
}

// ─── SVG: Revenue vs Expenses 10-year chart ────────────────────────────────────
export function RevenueChart({ data = PROJECTIONS }) {
  const maxVal = 21000;
  const W = 600, H = 190;
  const padL = 36, padB = 28, padT = 16, padR = 16;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const colW   = chartW / data.length;
  const barW   = colW * 0.34;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
      {[0, 5000, 10000, 15000, 20000].map((v) => {
        const y = padT + chartH - (v / maxVal) * chartH;
        return (
          <g key={v}>
            <line x1={padL} y1={y} x2={W - padR} y2={y}
                  stroke="rgba(255,255,255,0.055)" strokeWidth={1} />
            <text x={padL - 5} y={y + 4} textAnchor="end"
                  fill="#4A7A90" fontSize="9" fontFamily="'Segoe UI',sans-serif">{v}</text>
          </g>
        );
      })}
      {data.map((d, i) => {
        const x = padL + i * colW + colW * 0.08;
        const bw = colW * 0.84;
        const h = (d.exp / maxVal) * chartH;
        return (
          <rect key={`exp-${i}`} x={x} y={padT + chartH - h}
                width={bw} height={h} fill="rgba(255,70,70,0.12)" rx={3} />
        );
      })}
      {data.map((d, i) => {
        const x = padL + i * colW + (colW - barW) / 2;
        const h = (d.rev / maxVal) * chartH;
        const alpha = 0.45 + (i / data.length) * 0.55;
        return (
          <rect key={`rev-${i}`} x={x} y={padT + chartH - h}
                width={barW} height={h} fill={C.accent} rx={3} opacity={alpha} />
        );
      })}
      {data.map((d, i) => (
        <text key={`lbl-${i}`} x={padL + i * colW + colW / 2}
              y={H - 6} textAnchor="middle"
              fill="#4A7A90" fontSize="9" fontFamily="'Segoe UI',sans-serif">
          {d.year}
        </text>
      ))}
      {(() => {
        const bx = padL + 7 * colW + colW / 2;
        return (
          <>
            <line x1={bx} y1={padT} x2={bx} y2={padT + chartH}
                  stroke={C.success} strokeWidth={1.5} strokeDasharray="4,3" opacity={0.7} />
            <text x={bx + 4} y={padT + 10} fill={C.success}
                  fontSize="9" fontFamily="'Segoe UI',sans-serif">Break-even</text>
          </>
        );
      })()}
    </svg>
  );
}
