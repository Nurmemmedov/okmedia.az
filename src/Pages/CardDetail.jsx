import React from "react";
import card1 from "../img/carddetail/card1.gif";
import card2 from "../img/carddetail/card2.jpeg";
import { cards } from "../Components/cardsData";

function CardDetail() {
  return (
    <div className="max-w-[1400px] mx-auto my-12 px-6">
      {/* ÜST BLOK */}
      <div className="flex flex-col md:flex-row justify-around rounded-2xl bg-[#f3f3f5] items-start gap-12 mb-20">
        {/* Sol */}
        <div className="max-w-[500px]">
          <p className="text-2xl text-gray-600 mt-10">Müştərilərin fikri</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-20">
            Müştərilərin fikri
          </h2>
          <h3 className="text-xl text-bold text-gray-700 mt-10 mb-20">
            300-dən çox korporativ müştəri yanılmış ola bilməz. <br />
            Xüsusən də öz biznes və markasına övladı kimi dəyər verirsə.
          </h3>
        </div>

        {/* Sağ */}
        <div className="flex flex-col gap-8 max-w-[600px]">
          <div className="flex items-center mt-10 rounded-3xl w-full bg-black gap-4 p-4">
            <img className="w-[50px]" src={card1} alt="card1" />
            <h2 className="text-md font-semibold text-white">
              Hazırladığımız vebsaytlar MilliNet, Netty kimi <br />
              IT müsabiqələrində dəfələrlə qalib olmuşdur
            </h2>
          </div>
          <div>
            <img
              className="w-full h-[220px] object-cover rounded-2xl"
              src={card2}
              alt="card2"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 max-w-[1200px] mx-auto">
        {cards.map(({ id, title, image, work, desc }, index) => (
          <div
            key={id}
            className={`flex flex-col md:flex-row items-center gap-8 rounded-2xl p-8 shadow-md w-full max-w-[900px] 
              ${index % 2 === 0 ? "mr-auto bg-gray-200" : "  bg-white ml-auto"}`}
          >
            {/* Şəkil + ad + iş */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <img
                src={image}
                alt={title}
                className="rounded-full w-[170px] h-[170px] object-cover shadow-lg mb-4"
              />
              <p className="text-lg font-semibold">{title}</p>
              <h3 className="text-gray-600 italic">{work}</h3>
            </div>

            {/* Təsvir */}
            <div className="flex flex-col justify-center text-left w-full md:w-2/3">
              <p className="text-[17px] leading-[28px]">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardDetail;
