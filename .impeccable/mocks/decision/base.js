document.documentElement.classList.add("js");

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }
}, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
document.querySelectorAll(".rv").forEach((el) => io.observe(el));

const header = document.querySelector(".site-header");
const parallax = [...document.querySelectorAll("[data-parallax]")];
let ticking = false;
function onScroll() {
  ticking = false;
  if (header) header.style.borderBottomColor = scrollY > 24 ? "var(--filet)" : "transparent";
  if (reduce) return;
  for (const el of parallax) {
    const r = el.getBoundingClientRect();
    const k = parseFloat(el.dataset.parallax) || 0.08;
    const offset = (r.top + r.height / 2 - innerHeight / 2) * -k;
    el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  }
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => {
    b.parentElement.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
  });
});
