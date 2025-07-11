import React, { useEffect } from 'react';
import img1 from "../img/section3/image1.png";
import img2 from "../img/section3/image2.png";
import img3 from "../img/section3/image3.png";
import img4 from "../img/section3/image4.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Section3() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const cards = [
    {
      icon: img1,
      title: "Veb saytların hazırlanması",
      desc: "Hazır Şablonsuz, Unikal dizayn hazırlayırıq",
      bgGradient: "bg-gradient-to-b from-[#e9ffd4] to-[#ffdfd6]",
    },
    {
      icon: img2,
      title: "Veb saytlara texniki dəstək",
      desc: "Saytınızda olan bütün problemləri aradan qaldıraq",
      bgGradient: "bg-gradient-to-b from-[#dcd4fe] to-[#feddd7]",
    },
    {
      icon: img3,
      title: "Korporativ mail xidməti",
      desc: "İşgüzar yazışmalarda biznes emailiniz ən yaxın dostunuz olsun",
      bgGradient: "bg-gradient-to-b from-[#eafed4] to-[#fedfd6]",
    },
    {
      icon: img4,
      title: "Online ödəmə sistemi inteqrasiyası",
      desc: "Müştərilərinizdən ödənişləri veb saytınızdan qəbul edin",
      bgGradient: "bg-gradient-to-b from-[#dbd4fe] to-[#ffded7]",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 300}  
            className={`relative ${card.bgGradient} rounded-3xl p-10 shadow-md
              transition-transform duration-700 ease-out transform
              hover:-translate-y-6 hover:shadow-xl cursor-pointer
              z-10 hover:z-20
            `} >
            <img
              className="absolute -top-10 right-6 w-40 rotate-[15deg] drop-shadow-lg"
              src={card.icon}
              alt={`icon-${index + 1}`}
            />
            <div className="pt-16">
              <h2 className="text-xl font-semibold text-black mb-2">{card.title}</h2>
              <p className="text-gray-800">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
