export function Clock() {
  const w = 500;
  const h = 500;
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) / 2 - 20;

  const hourMarkR1 = r - 20;
  const hourMarkR2 = r - 10;

  const minuteMarkR1 = r - 18;
  const minuteMarkR2 = hourMarkR2;

  const hourLabel24R = r - 35;
  const hourLabel12R = r - 70;
  const hourLabelUtcR = r + 5;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        background: `conic-gradient(${(
          [
            ["night", 6],
            ["day", 7.5],
            ["day", 7 + 12],
            ["night", 8 + 12],
          ] as const
        )
          .map(
            ([color, hourOfDay]) =>
              `var(--${color}-color) ${(hourOfDay / 24) * 100}%`
          )
          .join(", ")})`,
      }}
    >
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (3 / 4 + i / 24) * Math.PI * 2;

        const [j, m] =
          i >= 12 ? ([i - 12, "pm"] as const) : ([i, "am"] as const);

        return (
          <>
            <line
              x1={cx + hourMarkR1 * Math.cos(angle)}
              y1={cy + hourMarkR1 * Math.sin(angle)}
              x2={cx + hourMarkR2 * Math.cos(angle)}
              y2={cy + hourMarkR2 * Math.sin(angle)}
              stroke="black"
              strokeWidth={3}
            />
            <text
              x={cx + hourLabel24R * Math.cos(angle)}
              y={cy + hourLabel24R * Math.sin(angle)}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {i}
            </text>
            <text
              x={cx + hourLabel12R * Math.cos(angle)}
              y={cy + hourLabel12R * Math.sin(angle)}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={12}
            >
              {j === 0 ? 12 : j}
              {m}
            </text>
            <text
              x={cx + hourLabelUtcR * Math.cos(angle)}
              y={cy + hourLabelUtcR * Math.sin(angle)}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={12}
            >
              {(i + 5) % 24}
            </text>
          </>
        );
      })}
      {Array.from({ length: 24 * 5 }).map((_, i) => {
        if (i % 5 === 0) {
          return;
        }

        const angle = (3 / 4 + i / (24 * 5)) * Math.PI * 2;

        return (
          <line
            x1={cx + minuteMarkR1 * Math.cos(angle)}
            y1={cy + minuteMarkR1 * Math.sin(angle)}
            x2={cx + minuteMarkR2 * Math.cos(angle)}
            y2={cy + minuteMarkR2 * Math.sin(angle)}
            stroke="black"
          />
        );
      })}

      <circle
        cx={cx}
        cy={cy}
        r={hourMarkR2}
        fill="none"
        stroke="black"
        strokeWidth={1}
      />
    </svg>
  );
}
