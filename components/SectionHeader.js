export default function SectionHeader({ eyebrow, title, children, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="section-title text-balance">{title}</h2>
      {children && <div className="mt-5 text-base leading-8 text-blackgold-bone/72 sm:text-lg">{children}</div>}
    </div>
  );
}
