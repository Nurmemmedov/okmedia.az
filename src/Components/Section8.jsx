import React, { useEffect } from 'react'
import img1 from "../img/section8/img1.jpg"
import img2 from "../img/section8/img2.jpg"
import img3 from "../img/section8/img3.jpg"
import img4 from "../img/section8/img4.jpg"
import img5 from "../img/section8/img5.jpg"
import img6 from "../img/section8/img6.jpg"
import img7 from "../img/section8/img7.jpg"
import img8 from "../img/section8/img8.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';


function Section8() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  

  const sizeClasses = ["w-[150px] h-[150px]", "w-[100px] h-[100px]", "w-[170px] h-[170px]"];

  return (
    <div className='max-w-[1400px] mx-auto px-4 py-12'>
      <h2 className='font-bold text-4xl md:text-5xl mb-12 text-center md:text-left'data-aos="fade-up">
        İnnovativ mühit, xoşbəxt komanda
      </h2>

      <div className='flex flex-col md:flex-row gap-6'>
        <div className='w-full md:w-[30%] h-[450px] bg-[rgb(232,229,249)] rounded-[20px] p-[48px]'data-aos="fade-up">
          <h3 className="text-[28px] md:text-[32px] leading-[40px] md:leading-[42px] mb-[40px] font-semibold">
            Pozitiv enerji ilə <br /> hazırlanan saytlar.
          </h3>
          <p className="text-[18px] md:text-[20px] leading-[28px]">
            Vebsayt – zəka və yaradıcılıq işidir. Onu tərtib edən komandanın həyat keyfiyyəti və iş mühitində rahatlığı birbaşa sizin vebsaytınıza təsir edən amildir.
          </p>
        </div>

        <div className='w-full md:w-[65%] bg-[rgb(231,237,251)] rounded-[20px] p-6 md:p-[40px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center' data-aos="fade-up">
          {images.map((img, i) => {
            const sizeClass = sizeClasses[i % sizeClasses.length]; // 3 ölçü təkrar
            return (
              <img
                key={i}
                src={img}
                alt={`office-${i}`}
                className={`rounded-full object-cover shadow-sm ${sizeClass}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Section8
