import React, { useEffect } from 'react'; 
import icon1 from "../img/section2/icon1.png";
import icon2 from "../img/section2/icon2.png";
import icon3 from "../img/section2/icon3.png";
import icon4 from "../img/section2/icon4.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Section2Cards() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

  const cards = [
    {
      icon: icon1,
      title: "+400 hazırlanmış sayt",
      desc: "300-dən çox sahibkarlarla çalışdıq, hər biri üçün fərdi yanaşma tətbiq etdik.",
    },
    {
      icon: icon2,
      title: "+10 illik təcrübə",
      desc: "10 ildir ki, yalnız veb texnologiyalar üzrə ixtisaslaşmışıq.",
    },
    {
      icon: icon3,
      title: "365 gün fasiləsiz iş",
      desc: "Növbəli rejimlə, ilin 365 günü texniki dəstək göstəririk.",
    },
    {
      icon: icon4,
      title: "Unikal vizual görünüş",
      desc: "Şablonsuz, sıfırdan hazırlanmış premium UI/UX dizaynlar.",
    },
  ];

  return (
    <div className=" max-w-[1400px] mx-auto rounded-[60px] p-7 lg:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-black"
            data-aos="fade-up">
            <img
              className="bg-black w-[70px] h-[70px] rounded-full p-3 mb-4"
              src={card.icon}
              alt={`icon-${index + 1}`}
            />
            <h2 className="font-bold text-xl lg:text-2xl mb-2">{card.title}</h2>
            <h3 className="text-base lg:text-lg">{card.desc}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2Cards;
