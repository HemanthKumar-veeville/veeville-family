import React from "react";
import Navbar from "./components/Navbar";
import StreamingPromo from "./components/HeroSection";
import Footer from "./components/Footer";
import cardData from "./assets/data";

const App: React.FC = () => {
  console.log({ cardData });
  return (
    <div className="montserrat-font">
      <Navbar />
      {cardData?.map((card) => (
        <StreamingPromo
          title={card?.title}
          description={card?.description}
          buttonText={card?.button_text}
          bgImage={card?.bg_image}
          link={card?.link}
          family={card?.family}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
