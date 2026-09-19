import React from 'react';

interface AshokaChakraProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export const AshokaChakra: React.FC<AshokaChakraProps> = ({
  className = '',
  size = 48,
  animate = false,
}) => {
  // 24 spokes evenly distributed (360 / 24 = 15 degrees each)
  const spokes = Array.from({ length: 24 }, (_, i) => i * 15);

  return (
    <svg
      id="ashoka-chakra-svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animate ? 'animate-[spin_40s_linear_infinite]' : ''} ${className}`}
      aria-label="Ashoka Chakra"
    >
      {/* Outer circular ring */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="#000080"
        strokeWidth="3.5"
        className="opacity-90"
      />
      {/* Secondary inner border */}
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="#000080"
        strokeWidth="1"
        className="opacity-60"
      />
      {/* Central Hub */}
      <circle
        cx="50"
        cy="50"
        r="7.5"
        fill="#000080"
      />
      <circle
        cx="50"
        cy="50"
        r="3"
        fill="#FFFFFF"
      />

      {/* 24 Spokes */}
      {spokes.map((deg) => (
        <g key={deg} transform={`rotate(${deg} 50 50)`}>
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="8"
            stroke="#000080"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Subtle decorative tooth / spoke tip */}
          <polygon
            points="48.8,11 51.2,11 50,7.5"
            fill="#000080"
          />
        </g>
      ))}

      {/* 24 Perimeter decorative nodes between spokes */}
      {spokes.map((deg) => (
        <circle
          key={`node-${deg}`}
          cx="50"
          cy="5"
          r="1.2"
          fill="#000080"
          transform={`rotate(${deg + 7.5} 50 50)`}
        />
      ))}
    </svg>
  );
};
