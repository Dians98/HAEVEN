// Poussière de lumière : valeurs déterministes (aucun hasard au rendu), montée lente en CSS.
const grains = Array.from({ length: 20 }, (_, i) => {
  const dur = 15 + ((i * 7) % 16);
  return {
    left: (i * 37 + 11) % 97,
    size: 1 + (i % 3),
    opacity: (0.15 + ((i * 13) % 36) / 100).toFixed(2),
    dur,
    delay: -((i * 11) % dur),
    dx: (i % 2 ? 1 : -1) * (14 + ((i * 5) % 40)),
    light: i % 3 === 0,
  };
});

export function Dust() {
  return (
    <div aria-hidden="true" className="dust pointer-events-none absolute inset-0 overflow-hidden">
      {grains.map((g, i) => (
        <span
          key={i}
          className={g.light ? "grain bg-bleu-1" : "grain bg-ivoire"}
          style={{
            left: `${g.left}%`,
            width: g.size,
            height: g.size,
            animationDuration: `${g.dur}s`,
            animationDelay: `${g.delay}s`,
            ["--dx" as string]: `${g.dx}px`,
            ["--o" as string]: g.opacity,
          }}
        />
      ))}
    </div>
  );
}
