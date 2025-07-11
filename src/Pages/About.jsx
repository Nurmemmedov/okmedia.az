import React, { useEffect } from 'react';
import Section2Cards from '../Components/Section2Card';
import card1 from "../img/carddetail/card1.gif";
import img from "../img/section9card/img.jpeg";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  
  return (
    <div>
          <div className="max-w-[1400px] mx-auto my-12 px-6"data-aos="fade-up">
         <div className="flex flex-col md:flex-row justify-around rounded-2xl bg-[#f3f3f5] items-start gap-12 mb-20">
              {/* Sol */}
              <div className="max-w-[500px]">
                <p className="text-3xl  text-gray-600 mt-10">Haqqımızda</p>
                <h2 className="text-5xl  font-bold text-gray-900 mt-20">
                  Şirkət haqqında
                </h2>
                <h3 className="text-xl text-bold text-gray-700 mt-10 mb-20">
                10 ildir ki, fasiləsiz olaraq yalnız vebsaytların hazırlanması və proqramlaşdırma həllərinə fokuslanmış şirkətimizlə tanış olun
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
                    src={img}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            </div>
    <>
      <Section2Cards />
    </>
    <div class="p-[70px] max-w-[1400px] mx-auto bg-[#f7f7f5] mt-20 rounded-[20px]"data-aos="fade-up">
      <div className="space-y-6 text-gray-800">
  <p>
    «OKmedia» şirkəti 2014-cü ildən fəaliyyət göstərir. Hazırda ölkənin ən böyük
    müştəri portfelinə malik şirkətlərdən biri olaraq, 300-dən çox hüquqi şəxs və
    fərdi sahibkara xidmət göstəririk. Portfelin böyük qismini təkrar
    müştərilərimiz təşkil edir ki, bu da göstərdiyimiz xidmət keyfiyyətinin
    dəyərini göstərir.
  </p>

  <p>
    Daim innovativ həllər, dəqiq bazar araşdırma nəticələri və bazarda ən son
    texnologiyaları tətbiq etməyimiz müştərilərimizin arzu etdiyindən də gözəl əl
    işləri meydana çıxmasına səbəb olur.
  </p>

  <p>
    Sayt hazırlatma səbəbiniz istər satışları artırmaq, istərsə də
    korporativ imicinizi möhkəmləndirmək olsun — daha öncə araşdırılmış bazar nəticələri
    və data analitikasından istifadə etməyimiz sizi hədəfə doğru sürətli
    addımlarla aparacaq.
  </p>

  <div className="space-y-2">
    <h3 className="text-lg font-bold">Müxtəlif müsabiqələrdə qalib olan bəzi layihələrimiz:</h3>

    <div>
      <p className="font-bold">2023</p>
      <ul className="list-disc list-inside">
        <li>bravotravel.az - Netty IT Award - Turizm, səyahət - 1-ci yer</li>
        <li>div.edu.az - MilliNet İnternet Mükafatı - İlin rəqəmsal təhsil resursu - 2-ci yer</li>
      </ul>
    </div>

    <div>
      <p className="font-bold">2022</p>
      <ul className="list-disc list-inside">
        <li>div.edu.az - Netty IT Award - Elm, təhsil və innovasiyalar - 3-cü yer</li>
      </ul>
    </div>

    <div>
      <p className="font-bold">2021</p>
      <ul className="list-disc list-inside">
        <li>lareine.az - Netty IT Award - Sağlamlıq, gözəllik - 3-cü yer</li>
      </ul>
    </div>

    <div>
      <p className="font-bold">2018</p>
      <ul className="list-disc list-inside">
        <li>ulvimirzoyev.com - MilliNet İnternet Mükafatı - Ailə, uşaq və sağlamlıq - 3-cü yer</li>
        <li>sinir.az - MilliNet İnternet Mükafatı - Bloqlar - 2-ci yer</li>
        <li>dragazade.az - MilliNet İnternet Mükafatı - Bloqlar - 3-cü yer</li>
      </ul>
    </div>

    <div>
      <p className="font-bold">2017</p>
      <ul className="list-disc list-inside">
        <li>dragazade.az - MilliNet İnternet Mükafatı - Bloqlar - 2-ci yer</li>
      </ul>
    </div>

    <div>
      <p className="font-bold">2015</p>
      <ul className="list-disc list-inside">
        <li>vaginizm.az - Netty IT Award - Şəxsi saytlar - 1-ci yer</li>
        <li>metas.az - MilliNet İnternet Mükafatı - Korporativ saytlar - 3-cü yer</li>
      </ul>
    </div>
  </div>
</div>

  </div>
  </div>
  );
}
