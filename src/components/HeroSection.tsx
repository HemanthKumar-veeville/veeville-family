import React from "react";

interface BgImageProps {
  bg1?: string;
  bg2?: string;
  bg3?: string;
}

interface StreamingPromoProps {
  title: string;
  description: string;
  buttonText: string;
  bgImage: BgImageProps;
  link: string;
}

const StreamingPromo: React.FC<StreamingPromoProps> = ({
  title,
  description,
  buttonText,
  bgImage,
  link,
}) => {
  console.log({ bgImage });
  return (
    <div className="relative w-full h-[500px] overflow-hidden mb-3">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bgImage.bg1 || bgImage.bg2 || bgImage.bg3}
          alt="Promotional background"
          className="h-[600px] w-full object-cover"
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
            <h1 className="text-4xl md:text-6xl font-serif text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 tracking-wide">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-center italic max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {description}
            </p>

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
