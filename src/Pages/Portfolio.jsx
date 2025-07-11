import React, { useState } from 'react';
import img from "../img/Portfolio/img.jpeg"
import card from "../img/carddetail/card1.gif";
import img1 from "../img/Portfolio/img1.jpg"
import img2 from "../img/Portfolio/img2.jpg"
import img3 from "../img/Portfolio/img3.png"
import img4 from "../img/Portfolio/img4.png"
import img5 from "../img/Portfolio/img5.png"
import img6 from "../img/Portfolio/img6.png"
import img7 from "../img/Portfolio/img7.png"
import img8 from "../img/Portfolio/img8.png"
import img9 from "../img/Portfolio/img9.png"
import img10 from "../img/Portfolio/img10.png"
import img11 from "../img/Portfolio/img11.png"
import img12 from "../img/Portfolio/img12.png"
import img13 from "../img/Portfolio/img13.png"
import img14 from "../img/Portfolio/img14.png"
import img15 from "../img/Portfolio/img15.png"
import img16 from "../img/Portfolio/img16.png"
import img17 from "../img/Portfolio/img17.png"
import img18 from "../img/Portfolio/img18.png"
import img19 from "../img/Portfolio/img19.png"
import img20 from "../img/Portfolio/img20.png"
import img21 from "../img/Portfolio/img21.png"
import img22 from "../img/Portfolio/img22.png"
import img23 from "../img/Portfolio/img23.png"
import img24 from "../img/Portfolio/img24.png"
import img25 from "../img/Portfolio/img25.png"
import img26 from "../img/Portfolio/img26.png"
import img27 from "../img/Portfolio/img27.jpg"
import img28 from "../img/Portfolio/img28.png"
import img29 from "../img/Portfolio/img29.png"
import img30 from "../img/Portfolio/img30.png"
import img31 from "../img/Portfolio/img31.png"
import img32 from "../img/Portfolio/img32.png"
import img33 from "../img/Portfolio/img33.png"
import img34 from "../img/Portfolio/img34.png"
import img35 from "../img/Portfolio/img35.png"
import img36 from "../img/Portfolio/img36.png"
import img37 from "../img/Portfolio/img37.png"
import img38 from "../img/Portfolio/img38.png"
import img39 from "../img/Portfolio/img39.png"
import img40 from "../img/Portfolio/img40.png"
import img41 from "../img/Portfolio/img41.png"
import img42 from "../img/Portfolio/img42.png"
import img43 from "../img/Portfolio/img43.png"
import img44 from "../img/Portfolio/img44.png"
import img45 from "../img/Portfolio/img45.png"
import img46 from "../img/Portfolio/img46.png"
import img47 from "../img/Portfolio/img47.png"
import img48 from "../img/Portfolio/img48.png"
import img49 from "../img/Portfolio/img49.png"
import img50 from "../img/Portfolio/img50.png"
import img51 from "../img/Portfolio/img51.png"

const Portfolio = () => {
    
  const cards = [
    { img: img1, link: "https://srconstruction.az/" },
    { img: img2, link: "https://nasproject.az/" },
    { img: img3, link: "https://mgs.az/" },
    { img: img4, link: "https://www.bravotravel.az/" },
    { img: img5, link: "https://coreconstruction.az/" },
    { img: img6, link: "https://bluecity.az/" },
    { img: img7, link: "https://example.com/7" },
    { img: img8, link: "https://example.com/8" },
    { img: img9, link: "https://example.com/9" },
    { img: img10, link: "https://example.com/10" },
    { img: img11, link: "https://example.com/11" },
    { img: img12, link: "https://example.com/12" },
    { img: img13, link: "https://example.com/13" },
    { img: img14, link: "https://example.com/14" },
    { img: img15, link: "https://example.com/15" },
    { img: img16, link: "https://example.com/16" },
    { img: img17, link: "https://example.com/17" },
    { img: img18, link: "https://example.com/18" },
    { img: img19, link: "https://example.com/19" },
    { img: img20, link: "https://example.com/20" },
    { img: img21, link: "https://example.com/21" },
    { img: img22, link: "https://example.com/22" },
    { img: img23, link: "https://example.com/23" },
    { img: img24, link: "https://example.com/24" },
    { img: img25, link: "https://example.com/25" },
    { img: img26, link: "https://example.com/26" },
    { img: img27, link: "https://example.com/27" },
    { img: img28, link: "https://example.com/28" },
    { img: img29, link: "https://example.com/29" },
    { img: img30, link: "https://example.com/30" },
    { img: img31, link: "https://example.com/31" },
    { img: img32, link: "https://example.com/32" },
    { img: img33, link: "https://example.com/33" },
    { img: img34, link: "https://example.com/34" },
    { img: img35, link: "https://example.com/35" },
    { img: img36, link: "https://example.com/36" },
    { img: img37, link: "https://example.com/37" },
    { img: img38, link: "https://example.com/38" },
    { img: img39, link: "https://example.com/39" },
    { img: img40, link: "https://example.com/40" },
    { img: img41, link: "https://example.com/41" },
    { img: img42, link: "https://example.com/42" },
    { img: img43, link: "https://example.com/43" },
    { img: img44, link: "https://example.com/44" },
    { img: img45, link: "https://example.com/45" },
    { img: img46, link: "https://example.com/46" },
    { img: img47, link: "https://example.com/47" },
    { img: img48, link: "https://example.com/48" },
    { img: img49, link: "https://example.com/49" },
    { img: img50, link: "https://example.com/50" },
    { img: img51, link: "https://example.com/51" },
  ];

  const [visibleCount, setVisibleCount] = useState(10);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
        <div className="max-w-[1400px] mx-auto p-4">
          <div className="max-w-[1400px] mx-auto my-12 px-6" data-aos="fade-up" >
              <div className="flex flex-col md:flex-row justify-around rounded-2xl bg-[#f3f3f5] items-start gap-12 mb-20">
                  <div className="max-w-[500px]">
                  <p className="text-2xl text-gray-600 mt-10">Qısa zamanda təhvil verilən işlərimiz</p>
                  <h2 className="text-5xl font-bold text-gray-900 mt-20">
                    Görülən işlər
                  </h2>
                  <h3 className="text-xl text-bold text-gray-700 mt-10 mb-20">
                  Hazır şablonsuz, unikal dizaynla hazırladığımız vebsaytlarla tanış olun
                  </h3>
                  </div>
          
                  <div className="flex flex-col gap-8 max-w-[600px]">
                  <div className="flex items-center mt-10 rounded-3xl w-full bg-black gap-4 p-4">
                      <img className="w-[50px]" src={card} alt="card" />
                      <h2 className="text-md font-semibold text-white">
                      Hazırladığımız vebsaytlar MilliNet, Netty kimi <br />
                      IT müsabiqələrində dəfələrlə qalib olmuşdur
                      </h2>
                  </div>
                  <div>
                      <img
                      className="w-full h-[220px] object-cover rounded-2xl"
                      src={img}
                      alt="img"
                      />
                  </div>
                  </div>
              </div>
              </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.slice(0, visibleCount).map((card, index) => (
                <div
                key={index}
            className="relative w-full overflow-hidden rounded-xl shadow-gray-600 hover:shadow-lg transition"
            >
            <a href={card.link} target="_blank" rel="noopener noreferrer">
                <img
                src={card.img}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-[350px] object-cover rounded-3xl m-3"
                />
            </a>
            <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 inline-block px-5 py-2 bg-[#333333] bg-opacity-70 text-white rounded-full hover:bg-opacity-90 transition"
            >
                Veb sayta keçid
            </a>
            </div>
        ))}
        </div>

      {visibleCount < cards.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-white text-black border rounded-3xl hover:bg-gray-500 transition"
          >
            Daha çoxuna bax
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
