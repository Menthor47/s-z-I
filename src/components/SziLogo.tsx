interface SziLogoProps {
  className?: string;
  alt?: string;
}

export function SziLogo({ className = "h-10 w-auto", alt }: SziLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 64"
      role="img"
      aria-label={alt || "S&Z Trading / SZI Group logo"}
      className={className}
    >
      <title>S&amp;Z Trading / SZI Group</title>
      <desc>Clean wordmark logo for S&amp;Z Trading International (SZI Group)</desc>
      <defs>
        <linearGradient id="szi-letter-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(222, 76%, 40%)" />
          <stop offset="100%" stopColor="hsl(25, 95%, 53%)" />
        </linearGradient>
      </defs>

      {/* Rounded white capsule with subtle border */}
      <circle
        cx="120"
        cy="32"
        r="32"
        fill="white"
        stroke="hsl(222, 76%, 40%)"
        strokeWidth="2"
      />

      {/* Subtle speed lines behind the letters */}
      <g fill="hsl(222, 76%, 40%)" opacity="0.2">
        <rect x="82" y="20" width="30" height="2" rx="1" />
        <rect x="78" y="26" width="40" height="2" rx="1" />
        <rect x="86" y="32" width="28" height="2" rx="1" />
      </g>

      {/* SZI letters with blue→orange gradient */}
      <text
        x="120"
        y="36"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="24"
        fontWeight="800"
        letterSpacing="4"
        textAnchor="middle"
        fill="url(#szi-letter-gradient)"
      >
        SZI
      </text>

      {/* GROUP label */}
      <text
        x="120"
        y="50"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="10"
        fontWeight="600"
        letterSpacing="3"
        textAnchor="middle"
        fill="hsl(222, 47%, 11%)"
      >
        GROUP
      </text>
    </svg>
  );
}
