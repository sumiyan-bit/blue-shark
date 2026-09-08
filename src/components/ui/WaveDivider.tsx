interface WaveDividerProps {
  className?: string;
  color?: string;
}

// Linha inspirada em ondas japonesas (seigaiha) e traços sumi-e, usada
// como um respiro gráfico discreto entre seções.
export function WaveDivider({ className = "", color = "currentColor" }: WaveDividerProps) {
  return (
    <svg
      viewBox="0 0 400 24"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 16C40 4 60 4 100 16C140 28 160 28 200 16C240 4 260 4 300 16C340 28 360 28 400 16"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
