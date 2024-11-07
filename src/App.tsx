import React from "react";
import Navbar from "./components/Navbar";
import StreamingPromo from "./components/HeroSection";
import Footer from "./components/Footer";
import cardData from "./assets/data";

const App: React.FC = () => {
  console.log({ cardData });
  return (
    <div>
      <Navbar />
      {cardData?.map((card) => (
        <StreamingPromo
          title={card?.title}
          description={card?.description}
          buttonText={card?.button_text}
          bgImage={card?.bg_image}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
