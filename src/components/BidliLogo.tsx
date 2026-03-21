interface BidliLogoProps {
  className?: string;
  variant?: "white" | "color" | "navy";
  showText?: boolean;
}

export default function BidliLogo({
  className = "",
  variant = "white",
  showText = true,
}: BidliLogoProps) {
  const iconColor =
    variant === "navy"
      ? "#142f4c"
      : variant === "color"
        ? "#3fb1e1"
        : "#ffffff";
  const textColor =
    variant === "navy"
      ? "#142f4c"
      : variant === "color"
        ? "#142f4c"
        : "#ffffff";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 336.2 119.95"
      className={className}
      aria-label="Bidli logo"
    >
      {/* Piktogram - 4 diamond shapes */}
      <g>
        <path
          fill={iconColor}
          d="M42.47,7.27C32.77-2.42,17.07-2.42,7.37,7.27h0c-9.7,9.7-9.7,25.4,0,35.1l17.6,17.6L60.07,24.88,42.47,7.27Z"
        />
        <path
          fill={iconColor}
          d="M112.77,7.27h0c-9.7-9.7-25.4-9.7-35.1,0l-17.6,17.6,35.1,35.1,17.6-17.6c9.7-9.7,9.7-25.4,0-35.1"
        />
        <path
          fill={iconColor}
          d="M24.88,59.98l-17.6,17.6c-9.7,9.7-9.7,25.4,0,35.1,9.7,9.7,25.4,9.7,35.1,0l17.6-17.6H24.88v-35.1Z"
        />
        <path
          fill={iconColor}
          d="M112.77,77.58l-17.6-17.6v35.1h-35.1l17.6,17.6c9.7,9.7,25.4,9.7,35.1,0s9.7-25.4,0-35.1"
        />
      </g>
      {/* Text "bidli" */}
      {showText && (
        <g>
          <path
            fill={textColor}
            d="M177.27,82.08c3.4,0,6.1-1.1,8.3-3.2,2.2-2.1,3.3-5.1,3.3-8.7s-1.1-6.5-3.3-8.7c-2.1-2.1-4.9-3.2-8.3-3.2s-6.1,1.1-8.4,3.2c-2.1,2.1-3.2,5.1-3.2,8.7s1.1,6.5,3.2,8.7c2.2,2.1,5,3.2,8.4,3.2M196.67,51.98c4.6,5,6.8,11,6.8,18.2s-2.2,13.3-6.8,18.3c-4.6,5-10,7.4-16.5,7.4s-11.1-1.9-14.5-5.9v4.6h-14.6V26.38h14.6v24.1c3.4-4,8.3-5.9,14.5-5.9s11.9,2.5,16.5,7.5"
          />
          <path
            fill={textColor}
            d="M211.77,45.88h14.6v48.7h-14.6v-48.7ZM212.88,39.08c-3.4-3.5-3.4-9,0-12.4s9-3.5,12.4,0c3.5,3.4,3.5,8.9,0,12.4s-8.9,3.4-12.4,0"
          />
          <path
            fill={textColor}
            d="M260.88,82.08c3.4,0,6.2-1.1,8.4-3.2,2.1-2.1,3.2-5.1,3.2-8.7s-1.1-6.5-3.2-8.7-5-3.2-8.4-3.2-6.2,1.1-8.4,3.2c-2.1,2.1-3.2,5.1-3.2,8.7s1.1,6.5,3.2,8.7c2.1,2.1,5,3.2,8.4,3.2M272.47,26.38h14.6v68.2h-14.6v-4.6c-3.4,4-8.3,5.9-14.5,5.9s-11.9-2.4-16.5-7.4-6.8-11.1-6.8-18.3,2.2-13.2,6.8-18.2c4.6-5,10-7.5,16.5-7.5s11.1,1.9,14.5,5.9v-24.1Z"
          />
          <rect fill={textColor} x="297.77" y="26.38" width="14.6" height="68.2" />
          <path
            fill={textColor}
            d="M320.08,46.08h14.6v48.7h-14.6v-48.7ZM321.17,39.27c-3.4-3.5-3.4-9,0-12.4,3.5-3.5,9-3.5,12.4,0,3.5,3.4,3.5,8.9,0,12.4-3.4,3.4-8.9,3.4-12.4,0"
          />
        </g>
      )}
    </svg>
  );
}

// Standalone piktogram (4 diamonds without text)
export function BidliPiktogram({
  className = "",
  color = "#ffffff",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      className={className}
    >
      <path
        fill={color}
        d="M42.47,7.27C32.77-2.42,17.07-2.42,7.37,7.27h0c-9.7,9.7-9.7,25.4,0,35.1l17.6,17.6L60.07,24.88,42.47,7.27Z"
      />
      <path
        fill={color}
        d="M112.77,7.27h0c-9.7-9.7-25.4-9.7-35.1,0l-17.6,17.6,35.1,35.1,17.6-17.6c9.7-9.7,9.7-25.4,0-35.1"
      />
      <path
        fill={color}
        d="M24.88,59.98l-17.6,17.6c-9.7,9.7-9.7,25.4,0,35.1,9.7,9.7,25.4,9.7,35.1,0l17.6-17.6H24.88v-35.1Z"
      />
      <path
        fill={color}
        d="M112.77,77.58l-17.6-17.6v35.1h-35.1l17.6,17.6c9.7,9.7,25.4,9.7,35.1,0s9.7-25.4,0-35.1"
      />
    </svg>
  );
}
