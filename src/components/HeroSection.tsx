import React, { useRef, useEffect, useState } from "react";

interface StreamingPromoProps {
  family: string;
  title: string;
  description: string;
  buttonText: string;
  bgVideo: string; // Single video URL
  link: string;
}

const StreamingPromo: React.FC<StreamingPromoProps> = ({
  title,
  description,
  buttonText,
  bgVideo,
  link,
  family,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log({ isPlaying, description });
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio === 1) {
          // 100% visibility
          videoRef.current?.play();
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      {
        root: null,
        threshold: 1.0, // Trigger when the video is 100% visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden mb-3">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={bgVideo}
          loop
          muted
          className="w-full h-full object-contain md:object-fill"
        />
      </div>

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content container */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-6">
          {/* Main content */}
          <div className="space-y-8 text-white">
            {/* Title without glow effect */}
            <div className="flex mx-auto w-fit items-baseline">
              <h1 className="text-4xl md:text-6xl text-center georgia-text tracking-wide">
                {family}
              </h1>
              <h1 className="text-4xl md:text-4xl text-center tracking-wide">
                {title}
              </h1>
            </div>
            {/* Description */}
            {/* <p className="text-lg md:text-xl text-center italic max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {description}
            </p> */}

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={buttonText}
              >
                <button
                  type="button"
                  className="group bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full 
                             hover:scale-105 active:scale-95 transition-transform duration-200 
                             text-base font-medium shadow-lg flex items-center space-x-2"
                >
                  <span>{buttonText}</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingPromo;
