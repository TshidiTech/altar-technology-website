import { useEffect, useRef } from "react";

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;

    const scroll = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, scrollInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden py-10 bg-background/50 sm:py-12">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden sm:gap-8"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="h-40 w-52 flex-shrink-0 overflow-hidden rounded-sm border-2 border-border shadow-card sm:h-48 sm:w-64"
          >
            <img
              src={image}
              alt={`Content creator ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
