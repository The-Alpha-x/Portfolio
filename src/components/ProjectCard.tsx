"use client";

import { useState, useRef } from "react";
import { Rocket, ExternalLink, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  images?: string[];
}

const DEFAULT_IMAGE = "./project-placeholder1.png";

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  images = [],
}: ProjectCardProps) {
  // Use images if provided and non-empty, otherwise default to single placeholder image
  const displayImages = images && images.length > 0 ? images : [DEFAULT_IMAGE];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      if (clientWidth > 0) {
        const newIndex = Math.round(scrollLeft / clientWidth);
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < displayImages.length) {
          setActiveIndex(newIndex);
        }
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const clientWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * clientWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = activeIndex > 0 ? activeIndex - 1 : displayImages.length - 1;
    scrollToIndex(prevIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = activeIndex < displayImages.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(nextIdx);
  };

  const handleModalPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullscreenImageIndex !== null) {
      const prevIdx = fullscreenImageIndex > 0 ? fullscreenImageIndex - 1 : displayImages.length - 1;
      setFullscreenImageIndex(prevIdx);
    }
  };

  const handleModalNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullscreenImageIndex !== null) {
      const nextIdx = fullscreenImageIndex < displayImages.length - 1 ? fullscreenImageIndex + 1 : 0;
      setFullscreenImageIndex(nextIdx);
    }
  };

  return (
    <>
      <div className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)] overflow-hidden">
        {/* Card Header & Link */}
        <div className="p-4 sm:p-6 pb-3 sm:pb-4">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 sm:p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-cyan-400/80 uppercase tracking-wider">Project</span>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800/60 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              aria-label="View Project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
        </div>

        {/* Landscape Image Carousel (16:9 Aspect Ratio) */}
        <div className="relative w-full px-4 sm:px-6 mb-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800/90 group/carousel">
            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {displayImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="w-full h-full flex-shrink-0 snap-center relative group/img cursor-pointer"
                  onClick={() => setFullscreenImageIndex(idx)}
                >
                  <img
                    src={imgSrc}
                    alt={`${title} snapshot ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    onError={(e) => {
                      // Fallback to default placeholder on image load error
                      (e.currentTarget as HTMLImageElement).src = DEFAULT_IMAGE;
                    }}
                  />
                  {/* Hover Overlay with expand icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-black/70 border border-cyan-500/40 text-cyan-300 text-xs font-medium backdrop-blur-sm shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Expand Image</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons (Only shown if more than 1 image) */}
            {displayImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/70 border border-slate-700/80 text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-all opacity-80 sm:opacity-0 group-hover/carousel:opacity-100 shadow-md backdrop-blur-md"
                  aria-label="Previous snapshot"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/70 border border-slate-700/80 text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-all opacity-80 sm:opacity-0 group-hover/carousel:opacity-100 shadow-md backdrop-blur-md"
                  aria-label="Next snapshot"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Top Indicator Pill */}
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-cyan-300 backdrop-blur-md">
              {activeIndex + 1} / {displayImages.length}
            </div>

            {/* Bottom Dots Indicator (Only shown if more than 1 image) */}
            {displayImages.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-slate-950/70 border border-slate-800/80 backdrop-blur-md">
                {displayImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? "w-4 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                        : "w-1.5 bg-slate-600 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Card Content & Description */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex-1 flex flex-col justify-between">
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-light">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-slate-800/80">
            {tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {fullscreenImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setFullscreenImageIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden border border-cyan-500/40 bg-slate-950 shadow-2xl flex items-center justify-center group/modal p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={displayImages[fullscreenImageIndex]}
              alt={`${title} snapshot ${fullscreenImageIndex + 1}`}
              className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = DEFAULT_IMAGE;
              }}
            />

            {/* Modal Navigation Arrows */}
            {displayImages.length > 1 && (
              <>
                <button
                  onClick={handleModalPrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:bg-slate-800 transition-all shadow-lg backdrop-blur-md z-10"
                  aria-label="Previous snapshot"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={handleModalNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:bg-slate-800 transition-all shadow-lg backdrop-blur-md z-10"
                  aria-label="Next snapshot"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* Modal Counter */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900/80 border border-slate-700 text-[10px] sm:text-xs font-mono text-cyan-300 backdrop-blur-md z-10">
              {fullscreenImageIndex + 1} / {displayImages.length}
            </div>

            {/* Modal Close Button */}
            <button
              onClick={() => setFullscreenImageIndex(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

