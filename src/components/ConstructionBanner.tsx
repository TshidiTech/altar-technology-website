export const ConstructionBanner = () => {
  return (
    <div className="bg-gradient-primary text-foreground py-2 overflow-hidden border-b border-border">
      <div className="animate-scroll whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-block px-4 text-sm font-bold">
            WEBSITE IS UNDER CONSTRUCTION, PLEASE WHATSAPP US ON 067 062 2953
          </span>
        ))}
      </div>
    </div>
  );
};
