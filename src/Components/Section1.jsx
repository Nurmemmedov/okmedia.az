import React, { useEffect } from 'react'; 
import img1 from "../img/section1/image1.png";
import img2 from "../img/section1/image2.png";
import img3 from "../img/section1/image3.png";
import img4 from "../img/section1/image4.png";
import img5 from "../img/section1/image5.png";
import img6 from "../img/section1/image6.png";
import img7 from "../img/section1/image7.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

function Section1() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='w-full bg-gradient-to-r from-[#323232] to-[#020202] text-white py-16'>
      <h2 className='text-center text-4xl sm:text-5xl md:text-6xl font-bold max-w-[1400px] mx-auto mb-6'c>
        Onların hekayəsində biz də varıq
      </h2>

      <h3 className='text-center text-base sm:text-lg max-w-[700px] mx-auto px-4 mb-12' data-aos="fade-up" data-aos-delay="100">
        İstər böyük markalar olsun, istərsə də kiçik bizneslər – hər biznesə təyin olunmuş KPI göstəricilərinə uyğun güc qatmaq üçün burdayıq!
      </h3>

      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="200">
          {images.slice(0, 4).map((src, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-[12px] p-[10px_12px] shadow-[0_4px_10px_rgba(0,0,0,0.2)]
                w-[218px] min-w-[200px] min-h-[70px] flex items-center justify-center
                ${index % 2 === 0 ? 'rotate-[2.5deg]' : 'rotate-[-2.5deg]'}
              `}
            >
              <img src={src} alt={`image-${index + 1}`} className="max-h-20 object-contain" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="300">
          {images.slice(4).map((src, index) => (
            <div
              key={index + 4}
              className={`
                bg-white rounded-[12px] p-[12px_14px] shadow-[0_4px_10px_rgba(0,0,0,0.2)]
                w-[218px] min-w-[200px] min-h-[150px] flex items-center justify-center
                ${(index + 4) % 2 === 0 ? 'rotate-[2.5deg]' : 'rotate-[-2.5deg]'}
              `}
            >
              <img src={src} alt={`image-${index + 5}`} className="max-h-20 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section1;
