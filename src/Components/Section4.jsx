import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import img1 from '../img/section4/image1.jpg';
import img2 from '../img/section4/image2.jpg';
import img3 from '../img/section4/image3.png';

const images = [
  { id: 1, src: img1, link: 'https://srconstruction.az/' },
  { id: 2, src: img2, link: 'https://nasproject.az/' },
  { id: 3, src: img3, link: 'https://mgs.az/' },
];

function Section4() {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-12">
      <h2 className='text-black text-[56px] leading-[64px] font-bold whitespace-normal mb-12'data-aos="fade-up">
        Ən son təhvil verilən 3 vebsayt
      </h2>

      <Swiper
        spaceBetween={24}
        slidesPerView={1.5}
        loop={true}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="relative"data-aos="fade-up"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} >
            <div className="relative rounded-2xl bg-[#f7f7f5] bg-opacity-40 p-6 shadow-md overflow-hidden">
              <img
                src={image.src}
                alt={`Slide ${image.id}`}
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute bottom-16 left-16">
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#203c36] bg-opacity-70 text-white px-8 py-3 rounded-md text-sm"
                >
                  Veb sayta keçid
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center mt-6 gap-4">
        <button
          onClick={() =>
            document.querySelector('.swiper').swiper.slidePrev()
          }
          className="bg-[#fff] hover:bg-gray-200 transition px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold"
        >
          ‹
        </button>
        <div className="text-xl text-gray-300 font-medium">
          {currentIndex + 1} / {totalSlides}
        </div>
        <button
          onClick={() =>
            document.querySelector('.swiper').swiper.slideNext()
          }
          className="bg-[#fff] hover:bg-gray-200 transition px-4 py-2 border border-gray-200  rounded-xl text-sm font-semibold"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Section4;
