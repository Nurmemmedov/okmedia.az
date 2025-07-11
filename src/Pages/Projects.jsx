import React from 'react'
import img from '../img/section9/img.png'
import card from "../img/carddetail/card1.gif";
import img1 from "../img/projects/img1.jpg"
import img2 from "../img/projects/img2.jpg"
import img3 from "../img/projects/img3.jpg"
import img4 from "../img/projects/img4.jpg"
import img5 from "../img/projects/img5.jpg"
import img6 from "../img/projects/img6.gif"
import img6logo from "../img/projects/img6.2.gif"
import layihelogo from "../img/projects/layihelogo.png"
import uzmanlogo from "../img/projects/uzmanlogo.png"
import divlogo from "../img/projects/divlogo.png"
import bacararsanlogo from "../img/projects/bacararsanlogo.png"

function Projects() {
  
  const cards = [
    {
      img: img1,
      logo: bacararsanlogo,
      title: "Bacararsan.az - Fiziki məhdudiyyətli gənclərin veb proqramlaşdırma sənətinə yiyələnməsi üçün hazırladığımız korporativ sosial məsuliyyət layihəmizdir.",
      link: "https://bacararsan.az",
    },
    {
      img: img2,
      logo: layihelogo,
      title: "Korporativ email - (şirkət emaili) sonluğu şirkətin adına uyğun olan, şirkət və müəssisələr üçün vacib olan mail formatıdır.",
      link: "https://example.com",
    },
    {
      img: img3,
      logo: divlogo,
      title: "Layihə.az - Rəqəmsal layihələrin idarə edilməsi platforması.",
      link: "https://div.edu.az",
    },
    {
      img: img4,
      logo: uzmanlogo,
      title: "Uzman.az - Peşəkar xidmətlər platforması.",
      link: "https://uzman.az",
    },
    {
      img: img5,
      logo: '',
      title: "WHM.AZ - Hosting idarəetmə paneli.",
      link: "https://whm.az",
    },
    {
      img: img6,
      logo: img6logo,
      title: "Kreativ komandamız daim yeni layihələr üzərində çalışır. Əgər bacarığına güvənirsənsə səni kəşf etməmizə yardımçı ol.",
      link: "Bizə qoşul",
    },
  ];

  return (
    <div>
      <div className="max-w-[1400px] mx-auto my-12 px-6" data-aos="fade-up">
        <div className="flex flex-col md:flex-row justify-around rounded-2xl bg-[#f3f3f5] items-start gap-12 mb-20">
          <div className="max-w-[500px]">
            <p className="text-2xl text-gray-600 mt-10">
              İdarə etdiyimiz daxili layihələr
            </p>
            <h2 className="text-5xl font-bold text-gray-900 mt-20">
              Layihələrimiz
            </h2>
            <h3 className="text-xl text-bold text-gray-700 mt-10 mb-20">
              Komandamızda innovasiya sahəsi üzrə ölkənin istedadlı kadrları
              çalışır. Bu komanda ilə daim uğurlu rəqəmsal məhsullar ortaya
              çıxarırıq.
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

      {/* 🟢 Card Grid hissəsi */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
          data-aos="fade-up"
            key={index}
            className="bg-gray-100 p-5 rounded-2xl shadow-md overflow-hidden flex flex-col text-left"
          >
            <img
              src={card.img}
              alt={`Project ${index + 1}`}
              className="w-full max-h-[300px] object-contain rounded-md bg-white"
            />

            {card.logo === '' ? (
              <div className="w-25 text-center bg-blue-400 text-white font-bold rounded-3xl mt-4 text-left pl-1 py-2">
                WHM.AZ
              </div>
            ) : (
              <img
                src={card.logo}
                alt="Logo"
                className="w-40 h-20 object-contain mt-4"
              />
            )}

            <h3 className="text-sm font-medium text-gray-700 py-4">
              {card.title}
            </h3>

            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline text-xl font-semibold"
            >
              {card.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
