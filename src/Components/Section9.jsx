import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import hosting from "../img/section9/hosting.jpg"
import bloq1 from "../img/section9/bloq1.png"
import bloq2 from "../img/section9/bloq2.jpg"
import bloq3 from "../img/section9/bloq3.png"
import bloq4 from "../img/section9/bloq4.jpg"
import bloq5 from "../img/section9/bloq5.jpg"
import work from "../img/section9/work.jpg"
import work1 from "../img/section9/work1.png"
import work2 from "../img/section9/work2.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';

function Section9() {
  const topics = [
    'Bütün mövzular',
    'İş qurma və sahibkarlıq',
    'Marketinq',
    'Texnologiya',
  ];

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  const [activeTopic, setActiveTopic] = useState('Bütün mövzular');

  const blogData = {
    'Bütün mövzular': [
      { title: 'Hostinq nədir?', img: hosting,slug: 'hosting-nedir' },
      { title: 'Süni intellekt vebsaytlara necə təsir edə bilər?', img: bloq1,slug: 'sunni-intellekt-vebsaytlara-tesiri' },
      { title: 'Vebsaytınızla müştərilərinizin etibarını qazanın.', img: bloq2,slug: 'vebsayt-etibar-qazan' },
      { title: 'Axtarış motorlarında ilk sırada çıxmaq üçün 5 web dizayn tövsiyəsi', img: bloq3,slug: 'seo-ucun-5-web-dizayn-tovsiyesi'  },
    ],
    'Marketinq': [
      { title: 'Vebsaytınızla müştərilərinizin etibarını qazanın.', img: bloq2, slug:'vebsaytinizla-musterilerinizin-etibarini-qazanin' },
      { title: 'Düzgün sayt dizaynı ilə müştərilərinizi artırın', img: bloq2,slug:'duzgun-sayt-dizayni-ile-musterilerinizi-artirin' },
      { title: 'Satışlarınızı artıracaq 5 e-mail marketinq ideyası', img:bloq5,slug:'satislarinizi-artiracaq-5-e-mail-marketinq-ideyasi' },
      { title: 'Vebsaytlarda "call to action" nə işə yarayır?', img: bloq4,slug:'vebsaytlarda-call-to-action-ne-ise-yarayir' },
    ],
    'İş qurma və sahibkarlıq': [
      { title: 'Saytınızı mobil istifadəçilər üçün necə uyğun edə bilərsiniz?', img: work,slug:'saytinizi-mobil-istifadeciler-ucun-nece-uygun-ede-bilersiniz.'  },
      { title: 'Korporativ Sosial Məsuliyyətin biznesinizə qazandıracağı 4 üstünlük', img: work1,slug:'korporativ-e-maile-sahib-olmaginizi-mecburiyyete-ceviren-5-esas-amil.' },
      { title: 'Biznesinizdə "Google Sheets" istifadə etməyiniz üçün 5 səbəb', img: work2,slug:'biznesinizde-google-sheets-istifade-etmeyiniz-ucun-5-sebeb' },
    ],
    'Texnologiya': [
      { title: 'Hostinq nədir?', img: hosting,slug: 'hosting-nedir'},
      { title: 'Süni intellekt vebsaytlara necə təsir edə bilər?', img: bloq1,slug:'suni-intellekt-vebsaytlara-nece-tesir-ede-biler' },
      { title: 'Vebsaytınızla müştərilərinizin etibarını qazanın.', img: bloq3,slug: 'vebsayt-etibar-qazan' },
      { title: 'Axtarış motorlarında ilk sırada çıxmaq üçün 5 web dizayn tövsiyəsi', img: bloq4,slug:'axtaris-motorlarinda-ilk-sirada-cixmaq-ucun-5-veb-dizayn-tovsiyesi' },
    ]
  };

  const selectedBlogs = blogData[activeTopic];

  return (
    <div className="max-w-[1400px] mx-auto py-30 px-4">
      <div className="flex justify-between items-center">
        <h2 className="text-[60px] leading-[1.3em] max-w-[1076px]" data-aos="fade-up">Bloq</h2>
        <Link
          to="/Cards"
          className="font-bold text-[16px] text-[#6654d9] transition-all duration-200 w-[180px]"
        >
          bütün bloqlara bax
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </Link>
      </div>

      <div className="mt-[32px]" data-aos="fade-up">
        <ul className="flex flex-wrap">
          {topics.map((topic, index) => (
            <li
              key={index}
              onClick={() => setActiveTopic(topic)}
              className={`border border-[#eff0f5] rounded-[66px] px-[20px] py-[11px] m-[10px_15px_10px_0] cursor-pointer text-center text-[17px] leading-[24px] transition-all duration-200
                ${
                  activeTopic === topic
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-[#f5f5f5]'
                }`}
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[40px] flex justify-between" data-aos="fade-up">
       <div className="w-[30%]" data-aos="fade-up">
        {selectedBlogs[0] && (
          <Link to={`/bloq/${selectedBlogs[0].slug}`} className="block">
            <h3 className="text-[28px] hover:text-gray-400 font-bold mt-4">
              {selectedBlogs[0].title}
            <img src={selectedBlogs[0].img} alt="Main Blog" className="rounded-[20px] w-full" />

            </h3>
          </Link>
        )}
      </div>

        <div className="w-[50%] flex flex-col justify-between gap-6">
          {selectedBlogs.slice(1).map((item, idx) => (
            <div key={idx} className={`flex items-center justify-between ${idx < 2 ? 'border-b border-gray-300 pb-4' : ''}`}>
             <Link
              to={`/bloq/${item.slug}`}
              className="leading-[1.3em] font-bold text-[24px] w-[80%] max-w-[327px] hover:text-gray-400 text-black"
            >
              {item.title}
            </Link>

              <img src={item.img} alt="Blog" className="w-[160px] h-[90px] object-cover rounded-[16px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section9;
