import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from "react-router-dom";
import { cards } from './cardsData';

export default function MySlider() {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = cards.length;

  const goPrev = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    if (swiper.realIndex === 0) {
      swiper.slideTo(totalSlides - 1);
    } else {
      swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    if (swiper.realIndex === totalSlides - 1) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  };

  return (
    <div className="bg-[#272727] max-w-[1400px] mx-auto rounded-3xl py-16 px-4">
      <h2 className="text-[32px] leading-[40px] text-white ml-[calc(3%+40px)] mb-9">
        Müştərilərimizin fikirləri
      </h2>

      <div className="w-full max-w-[1400px] mx-auto">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
          spaceBetween={30}
          loop={true}
          slidesPerView={2.5}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 2.5 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Link to={`/card/${card.id}`}>
                <div className="bg-[#353535] text-white rounded-2xl p-16 h-auto w-[540px] hover:scale-[1.01] transition">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-[50px] h-[50px] object-cover rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-lg">{card.title}</div>
                      <div className="text-sm text-gray-500">{card.work}</div>
                    </div>
                  </div>
                  <p className="text-[16px] leading-[26px] text-white overflow-hidden min-h-[110px] font-okmedia line-clamp-9">
                    {card.desc}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-md border border-gray-600 text-white flex items-center justify-center"
          >
            <i className="fa-solid fa-chevron-left text-gray-400"></i>
          </button>

          <div className="text-white text-sm sm:text-base">
            {currentSlide} <span className="text-gray-500">/ {totalSlides}</span>
          </div>

          <button
            onClick={goNext}
            className="w-10 h-10 rounded-md border border-gray-600 text-white flex items-center justify-center"
          >
            <i className="fa-solid fa-chevron-right text-gray-400"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
