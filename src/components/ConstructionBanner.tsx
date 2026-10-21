export const ConstructionBanner = () => {
  return (
    <a
      href="https://calendar.app.google/pkkvMSJBS3DQLPSW8"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-secondary text-primary-foreground py-2 overflow-hidden border-b border-primary/20 hover:bg-gradient-primary transition-colors"
    >
      <div className="animate-scroll whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-block px-4 text-sm font-bold">
            ✦ NOW ONBOARDING: QUALITY ASSURANCE AS A SERVICE (QAaaS) FOR CONTACT CENTRES & BPOs — BOOK DISCOVERY CALL →
          </span>
        ))}
      </div>
    </a>
  );
};
