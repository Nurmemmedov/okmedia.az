import React, { useEffect } from 'react'
import icon1 from "../img/section7/icon1.png"
import icon2 from "../img/section7/icon2.png"
import image from "../img/section7/image.png"

import AOS from 'aos';
import 'aos/dist/aos.css';

function Section7() {

   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  

  return (
    <div className="max-w-[1400px] bg-[#F7F7F5] rounded-[10px] mt-20 p-[80px] flex flex-col lg:flex-row justify-between items-start mx-auto gap-10"data-aos="fade-up">
      
      <div className="flex-1">
        <h2 className="text-[52px] leading-[60px] text-bold mb-[40px] max-w-[600px]">
          Heç kimə ehtiyacınız
          <p>olmadan vebsaytınızı</p>
          <p>özünüz idarə edin</p>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img className="w-[35px] h-[35px] object-contain mb-4" src={icon1} alt="icon1" />
            <p className="text-[16px] leading-[24px] w-full">
              Hazırladığımız rahat idarə paneli sayəsində veb saytınızı idarə etməyiniz üçün heç bir texniki bilik tələb olunmur. Proseduru əməkdaşınıza 15 dəqiqəlik qısa təlim vasitəsi ilə öyrədirik.
            </p>
          </div>

          <div>
            <img className="w-[35px] h-[35px] object-contain mb-4" src={icon2} alt="icon2"/>
            <p className="text-[16px] leading-[24px] w-full">
              Hazırladığımız rahat idarə paneli sayəsində veb saytınızı idarə etməyiniz üçün heç bir texniki bilik tələb olunmur. Proseduru əməkdaşınıza 15 dəqiqəlik qısa təlim vasitəsi ilə öyrədirik.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <img className="w-full object-contain rounded-[10px] mb-4" src={image} alt="image" />
        <p className="text-[16px] leading-[24px] text-center">
          Üçüncü tərəf şirkətlərdən və şəxslərdən asılılığınızı minimuma endiririk
        </p>
      </div>
    </div>
  )
}

export default Section7
