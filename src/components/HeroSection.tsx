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
}

const StreamingPromo: React.FC<StreamingPromoProps> = ({
  title,
  description,
  buttonText,
  bgImage,
}) => {
  console.log({ bgImage });
  return (
    <div className="relative w-full h-[450px] overflow-hidden mb-3">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bgImage.bg1 || bgImage.bg2 || bgImage.bg3}
          alt="Promotional background"
          className="h-[600px] w-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-6">
          {/* Main content */}
          <div className="space-y-8">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-serif text-white text-center tracking-wide font-bold">
              {title}
            </h1>

            {/* Release info */}
            <p className="text-lg md:text-xl text-white text-center">
              {description}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button
                type="button"
                className="group bg-white text-black px-8 py-3 rounded-full 
                         hover:bg-gray-100 active:bg-gray-200 
                         transition duration-200
                         text-base font-medium
                         flex items-center space-x-2
                         shadow-md"
                aria-label={buttonText}
              >
                <span>{buttonText}</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingPromo;
