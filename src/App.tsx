import React, { useState } from "react";
import Navbar from "./components/Navbar";
import StreamingPromo from "./components/HeroSection";
import Footer from "./components/Footer";
import cardData from "./assets/data";
import "./App.css";

const App: React.FC = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleExpandChange = (isExpanded: boolean) => {
    setIsNavbarExpanded(isExpanded);
  };

  return (
    <div className="montserrat-font">
      <Navbar onExpandChange={handleExpandChange} />
      <div className={isNavbarExpanded ? "blurred-content" : ""}>
        {cardData?.map((card) => (
          <StreamingPromo
            key={card.title}
            title={card?.title}
            description={card?.description}
            buttonText={card?.button_text}
            bgVideo={card?.bg_image}
            link={card?.link}
            family={card?.family}
          />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default App;
