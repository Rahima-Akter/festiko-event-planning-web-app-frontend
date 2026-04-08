import { IUserStats } from "@/types/stats/stats.types";
import { useState } from "react";

interface OverviewChartProps {
  userStats: IUserStats | null;
}

const UserOverviewChart = ({ userStats }: OverviewChartProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  if (!userStats) return null;

  const rawData = [
    { label: "Events Created", value: userStats.totalCreatedEvents },
    { label: "Invition Accepted", value: userStats.totalInvitationsAccepted },
    { label: "Invition Recieved", value: userStats.totalInvitationsReceived },
    { label: "Events Joined", value: userStats.totalJoinedEvents },
    { label: "Total Spent", value: userStats.totalPaidAmount },
  ];

  const width = 800;
  const height = 300;
  const max = Math.max(...rawData.map((d) => d.value), 1);

  // keep original x positions (no shifting)
  const compression = 0.9; // 0.9 means 90% of width is used
  const startPadding = ((1 - compression) / 1) * width;
  const endPadding = startPadding;

  const points = rawData.map((d, i) => {
    const totalSteps = rawData.length - 1;
    const x =
      startPadding + (i / totalSteps) * (width - startPadding - endPadding);
    const y = height - (d.value / max) * height;
    return { ...d, x, y };
  });

  const path = points.reduce((acc, p, i) => {
    if (i === 0) return `M${p.x},${p.y}`;
    const prev = points[i - 1];
    const cx = (prev.x + p.x) / 2;
    return `${acc} Q${prev.x},${prev.y} ${cx},${(prev.y + p.y) / 2}`;
  }, "");

  const last = points[points.length - 1];
  const linePath = points.length ? `${path} T${last.x},${last.y}` : "";
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

  return (
    <section className="bg-[#353029] p-6 rounded-2xl border border-[#C8B273]/5">
      <div className="flex justify-between mb-10">
        <h4 className="text-2xl font-serif font-bold text-[#f9efe5]">
          Growth Chart
        </h4>
        <span className="px-3 pt-2 bg-[#C8B273]/10 text-[10px] text-[#C8B273] uppercase border border-[#C8B273]/20">
          Metrics
        </span>
      </div>

      <div className="h-96 w-full relative">
        {/* Expand viewBox horizontally so nothing gets clipped */}
        <svg className="w-full h-full" viewBox="-35 -5 840 350">
          <defs>
            <linearGradient id="growthGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#C8B273" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C8B273" stopOpacity="0" />
            </linearGradient>
            <filter
              id="lineShadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="0"
                dy="1"
                stdDeviation="3"
                floodColor="#C8B273"
                floodOpacity="0.15"
              />
            </filter>
            <style>
              {`
                .line-anim {
                  stroke-dasharray: 1000;
                  stroke-dashoffset: 1000;
                  animation: draw 1.6s ease forwards;
                }
                @keyframes draw {
                  to {
                    stroke-dashoffset: 0;
                  }
                }
                .label-text {
                  fill: #f9efe5;
                  font-size: 10px;
                  opacity: 0.75;
                }
              `}
            </style>
          </defs>

          {/* Area */}
          <path d={areaPath} fill="url(#growthGradient)" />

          {/* Animated Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#C8B273"
            strokeWidth="3"
            filter="url(#lineShadow)"
            className="line-anim"
          />

          {/* Hover Effects */}
          {points.map((p, i) => (
            <g key={i}>
              <rect
                x={p.x - 25}
                y={0}
                width={50}
                height={height}
                fill="transparent"
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              />

              {hoverIndex === i && (
                <>
                  <line
                    x1={p.x}
                    y1={0}
                    x2={p.x}
                    y2={height}
                    stroke="#C8B273"
                    strokeDasharray="4"
                    opacity="0.25"
                  />

                  <circle cx={p.x} cy={p.y} r="8" fill="#C8B273" />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="14"
                    fill="#C8B273"
                    opacity="0.12"
                  />

                  <text
                    x={p.x}
                    y={p.y - 14}
                    textAnchor="middle"
                    fill="#f9efe5"
                    fontSize="12"
                  >
                    {p.value}
                  </text>
                </>
              )}
            </g>
          ))}

          {/* Bottom Labels */}
          <g>
            {points.map((p, i) => (
              <text
                key={i}
                x={p.x}
                y={360}
                textAnchor="middle"
                className="label-text"
                transform={`translate(-${((width * 0.1) / (rawData.length - 1)) * i}, 0)`}
              >
                {p.label}
              </text>
            ))}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default UserOverviewChart;
