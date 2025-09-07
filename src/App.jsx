import { useState } from "react";
import "./styles.css";

import image1 from "./assets/pikmin/image1.jpg";
import image2 from "./assets/pikmin/image2.jpg";
import image3 from "./assets/pikmin/image3.jpg";
import image4 from "./assets/pikmin/image4.jpg";
import image5 from "./assets/pikmin/image5.jpg";
import image6 from "./assets/pikmin/image6.jpg";
import image7 from "./assets/pikmin/image7.jpg";
import image8 from "./assets/pikmin/image8.jpg";
import image9 from "./assets/pikmin/image9.jpg";
import image10 from "./assets/pikmin/image10.jpg";
import image11 from "./assets/pikmin/image11.jpg";
import image12 from "./assets/pikmin/image12.jpg";


import pikminSound from "./assets/pikmin/pikmin-gcn.mp3";

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12
];



export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  const rotations = [-3, -1, 1, 2, -2, 3, 0, -4, 4, -5, 5, 3]; // rotation angles


  return (
    <div>
      <h2>A pikmin carousel!</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          {"❮"}
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          {"❯"}
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img 
                src={image}
                alt={`Slide ${index + 1}`}
                  style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
                  onClick={() => {
                    const audio = new Audio(pikminSound);
                    audio.play();
                  }}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}