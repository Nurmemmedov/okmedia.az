import React, { useEffect } from 'react';
import img1 from "../img/Referans/img1.png";
import img2 from "../img/Referans/img2.png";
import img3 from "../img/Referans/img3.png";
import img4 from "../img/Referans/img4.png";
import img5 from "../img/Referans/img5.png";
import img6 from "../img/Referans/img6.png";
import img7 from "../img/Referans/img7.png";
import img8 from "../img/Referans/img8.png";
import img9 from "../img/Referans/img9.png";
import img10 from "../img/Referans/img10.png";
import img11 from "../img/Referans/img11.png";
import img12 from "../img/Referans/img12.png";
import img13 from "../img/Referans/img13.png";
import img14 from "../img/Referans/img14.png";
import img15 from "../img/Referans/img15.png";
import img16 from "../img/Referans/img16.jpg";
import img17 from "../img/Referans/img17.png";
import img18 from "../img/Referans/img18.png";

import AOS from 'aos';
import 'aos/dist/aos.css';


function Referans() {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18
  ];

   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <h2 className="py-10 font-bold text-4xl sm:text-5xl md:text-6xl "  data-aos="fade-up">Referanslar</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 place-items-center my-16">
        {images.map((imgSrc, idx) => (
          <div
           data-aos="fade-up"
            key={idx}
            className="w-full max-w-[180px] h-[120px] flex items-center justify-center bg-gray-50 hover:bg-[#e1e1e7] transition-all duration-300 rounded-md shadow-sm"
          >
            <img  data-aos="fade-up"
              src={imgSrc}
              alt={`Referans ${idx + 1}`}
              className="w-[80%] h-[80%] object-contain transition-transform duration-300 hover:scale-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Referans;
