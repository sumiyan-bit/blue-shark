// Passagem em onda entre uma seção escura e uma seção creme:
// o lado escuro desce e entra um pouco na parte creme.

const DARK = { ink: "#070a12", sumi: "#1a1614" };

export function Edge({ dark, color = "ink" }: { dark: "above" | "below"; color?: keyof typeof DARK }) {
  const h = 90;
  const flip = dark === "below";
  return (
    <div
      aria-hidden="true"
      style={{
        height: h,
        position: "relative",
        zIndex: 10,
        pointerEvents: "none",
        marginTop: flip ? -h : -1,
        marginBottom: flip ? -1 : -h,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block h-full w-full">
        <path
          d="M0,0 L1440,0 L1440,48 C1360,66 1260,58 1080,34 C900,10 720,28 540,60 C360,92 180,92 0,52 Z"
          fill={DARK[color]}
        />
      </svg>
    </div>
  );
}
