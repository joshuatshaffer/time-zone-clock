export function Clock() {
  const w = 600;
  const h = 600;
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) / 2 - 20;

  const hourMarkR1 = r - 20;
  const hourMarkR2 = r - 10;

  const minuteMarkR1 = r - 18;
  const minuteMarkR2 = hourMarkR2;

  const hourLabelAmR = r - 35;
  const hourLabelPmR = r - 60;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (3 / 4 + i / 12) * Math.PI * 2;

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
              x={cx + hourLabelAmR * Math.cos(angle)}
              y={cy + hourLabelAmR * Math.sin(angle)}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="red"
            >
              {i}
            </text>
            <text
              x={cx + hourLabelPmR * Math.cos(angle)}
              y={cy + hourLabelPmR * Math.sin(angle)}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="blue"
            >
              {i + 12}
            </text>
          </>
        );
      })}
      {Array.from({ length: 12 * 5 }).map((_, i) => {
        if (i % 5 === 0) {
          return;
        }

        const angle = (3 / 4 + i / (12 * 5)) * Math.PI * 2;

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
