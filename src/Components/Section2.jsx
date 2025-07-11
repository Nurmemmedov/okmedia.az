import React, { useEffect } from 'react'; 
import icon1 from "../img/section2/icon1.png";
import icon2 from "../img/section2/icon2.png";
import icon3 from "../img/section2/icon3.png";
import icon4 from "../img/section2/icon4.png";
import icon5 from "../img/section2/icon5.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Section2() {
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
    <div className="bg-white py-16 px-4">
      <div className="bg-red-50 max-w-[1400px] mx-auto rounded-[60px] p-10 lg:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
   <div className="bg-gray-100 mx-auto my-20 px-6 py-10 rounded-[30px] max-w-[1400px]"  data-aos="fade-up">
  <div className="flex flex-col lg:flex-row items-center gap-8">
    
    <div className="flex-shrink-0 w-[60px] h-[60px]">
      <img src={icon5} alt="icon" className="w-full h-full object-contain" />
    </div>

    <div className="text-center lg:text-left">
      <h2 className="text-lg lg:text-xl font-medium text-gray-800">
        Hədəf kütlə davranışları, istifadəçi təcrübəsi (UX) və datalara əsaslanan araşdırma nəticələri ilə vebsaytınız 10X daha effektiv olacaq. Təkmilləşdirilmiş bazar araşdırması və data analitikasından istifadə etməyimiz sizə hədəfə doğru sürətli addımlarla aparacaq.
      </h2>
    </div>

  </div>
</div>
<div className="w-full px-6 py-10 max-w-[1400px] mx-auto " data-aos="fade-up">
  <div className="flex flex-col lg:flex-row justify-between gap-8">
    
    <div className="flex-1 text-center lg:text-left">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900">800% ROI</h2>
      <h3 className="text-base lg:text-xl text-gray-700 mt-2">
        Müştərilərimiz saytına xərclədiyi investisiyanı illik 9X olaraq geri əldə edir
      </h3>
    </div>

    <div className="flex-1 text-center lg:text-left">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900">1 200 000 aylıq istifadəçi</h2>
      <h3 className="text-base lg:text-xl text-gray-700 mt-2">
        Saytlarımız toplamda 1.2 milyon aylıq ziyarətçiyə xidmət göstərir
      </h3>
    </div>

  </div>
</div>
    </div>
  );
}

export default Section2;
