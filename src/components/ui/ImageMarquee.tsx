import { Partners } from "@/components/landing/SponsorsSection";
import Image from "next/image";
import { useRef, useEffect, useState, CSSProperties } from "react";

const GAP = 170;

export default function ImageMarquee({ images }: { images: typeof Partners }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const imgs = Array.from(track.querySelectorAll("img")).slice(
      0,
      images.length,
    );
    const totalWidth = imgs.reduce(
      (acc, img) => acc + img.offsetWidth + GAP,
      0,
    );

    setTrackWidth(totalWidth);
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.viewport}>
        <div
          ref={trackRef}
          style={
            {
              ...styles.track,
              animationDuration: `${20}s`,
              animationPlayState: paused ? "paused" : "running",
              "--track-width": `-${trackWidth}px`,
            } as unknown as CSSProperties
          }
        >
          {[...images, ...images].map((image, index) => (
            <Image
              title={image.name}
              key={index + image.name}
              src={image.logo}
              alt={image.name}
              width={image.width}
              height={image.height}
              className="h-[80px] md:h-[100px] w-auto object-contain shrink-0"
              style={styles.img}
              draggable={false}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(var(--track-width)); }
        }
      `}</style>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: { background: "#0a0a0a", padding: "40px 0", userSelect: "none" },
  viewport: { overflow: "hidden", width: "100%" },
  track: {
    display: "flex",
    alignItems: "center",
    gap: `${GAP}px`,
    width: "max-content",
    animation: "marquee linear infinite",
    willChange: "transform",
  },
};
