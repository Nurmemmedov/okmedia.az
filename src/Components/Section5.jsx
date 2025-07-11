import React, { useEffect } from 'react';
import icon from "../img/section5/icon.png";

import AOS from 'aos';
import 'aos/dist/aos.css';


function Section5() {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  

  const cards = [
    {
      p: "müzakirə",
      h3: "Biznesinizin ehtiyaclarının təyin olunması",
      title: "Görüşdə nəyə ehtiyacınız olduğunu təyin edirik",
    },
    {
      p: "araşdırma",
      h3: "Rəqib, müştəri davranışları və bazar araşdırması",
      title: "Dataya əsaslanan araşdırma nəticələrini izləyirik",
    },
    {
      p: "dizayn",
      h3: "Hədəf kütlə davranışlarına uyğun UI/UX dizaynın çəkilməsi",
      title: "Hazır şablonsuz, unikal dizayn hazırlayırıq",
    },
    {
      p: "təqdimat",
      h3: "Dizaynın təqdim olunması",
      title: "Həyəcanla gözlədiyiniz yeni saytınızla tanış edirik",
    },
    {
      p: "kontent",
      h3: "Kontentin sayta yerləşdirilməsi",
      title: "Məlumatları sayta özümüz yerləşdiririk",
    },
    {
      p: "nəticə",
      h3: "Veb saytın təhvil verilməsi",
      title: "1 illik pulsuz texniki dəstək müddətini başladırıq",
    }
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 mb-12">
      <h2 className="text-5xl font-bold text-gray-900 mb-6 text-left"data-aos="fade-up">
        Veb saytların hazırlanması
      </h2>

      <div className="text-gray-700 space-y-2 text-2xl text-left mb-12">
        <p className='text-[24px] leading-[36px] max-w-[1076px] pb-[20px]'data-aos="fade-up">
          Sadə proses kimi görünən, ancaq işin mətbəxində böyük bir komanda işinin olduğu veb sayt <p>hazırlanması prosesi müxtəlif mərhələlərdən ibarətdir. Hansı ki, bu, sizin vebsayt üçün xərclərinizi</p> əvvəlcədən effektiv proqnozlaşdırıla bilən ağıllı yatırıma çevirir.
        </p>
        <p className="text-blue-600 cursor-pointer hover:underline text-right mt-2 text-lg">
          <a href="#">Daha ətraflı</a>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"data-aos="fade-up">
        {cards.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col"
          >
            <div className="rounded-md bg-white flex mb-6 w-14 h-14 items-center justify-center">
              <img src={icon} alt="icon" className="w-10 h-10" />
            </div>

            <p className="text-sm text-gray-500 mb-2">{item.p}</p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6 leading-snug">
              {item.h3}
            </h3>

            <div className="inline-block bg-gray-100 text-gray-600 text-base px-6 py-1 rounded-full whitespace-nowrap">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section5;
