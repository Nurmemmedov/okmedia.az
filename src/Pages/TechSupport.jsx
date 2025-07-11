import React, { useEffect } from 'react'
import img from '../img/techsupport/xidmetler.jpeg'
import card from "../img/carddetail/card1.gif";

import AOS from 'aos';
import 'aos/dist/aos.css';


function TechSupport() {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (
    <div>
    <div className="max-w-[1400px] mx-auto my-12 px-6"  data-aos="fade-up">
         <div className="flex flex-col md:flex-row justify-around rounded-2xl bg-[#f3f3f5] items-start gap-12 mb-20">
           <div className="max-w-[500px]">
             <p className="text-2xl text-gray-600 mt-10">Saytlara texniki dəstək</p>
             <h2 className="text-4xl font-bold text-gray-900 mt-20">
              Saytlara texniki dəstək
             </h2>
             <h3 className="text-xl text-bold text-gray-700 mt-10 mb-20">
               Şirkətinizə müştərilərinizin əlçatanlığını artırmaq və<br />
               sizi rəqiblərdən önə çıxarmaq üçün buradayıq!
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
         <h1 className='text-center text-5xl font-semibold'> Saytlara texniki dəstək</h1>
       </div>

         <div class="p-[70px] max-w-[1400px] mx-auto bg-[#f7f7f5] mt-20 rounded-[20px]">
      <div className="space-y-3 text-gray-800">
            <p className='texd-xl font-semibold pb-10' >
            Çox iş adamı sayt hazırlanması zamanı şirkətin tarixçəsinə, əl işlərinə, müştərilərinin rəylərinə fikir vermədən seçim edir. Bu isə öz növbəsində əksər hallarda eyni şirkət üçün ikinci dəfə xərc çəkilməsinə gətirib çıxarır. Məsələn, aşağıdakı hallar bizə müraciət zamanı ən çox qarşılanan problemlərdir:
            </p>

            
            <p> — Saytı hazırlayan şəxsin lazımi düzəlişləri çox gec icra etməsi, operativliyin olmaması </p>
            <p> — Saytı hazırlayan şəxslə əlaqənin kəsilməsi</p>
            <p> — Saytı hazırlayan şəxs artıq başqa işdə çalışdığı üçün kömək edə bilməməsi</p>
            <p> — Saytı hazırlayan şəxsin sayta əlavə olunacaq funksiyanı inteqrasiya edə bilməməsi</p>
            <p> — Saytı hazırlayan şəxs dəyişiklik üçün real olmayan ödəniş tələb etməsi</p>

            <p className='texd-xl font-semibold py-10'>
            Əgər yuxarıdakı problemlərdən birini yaşayırsınızsa və saytınıza hər-hansı xidmət göstərilməsi lazımdırsa, operativlikdə rəqib tanımayan şirkətimizə mürəciət edərək bu problemləri ən sürətli şəkildə həll edə bilərsiniz:
            </p>
            <p> — Saytı hazırlayan şəxsin lazımi düzəlişləri çox gec icra etməsi, operativliyin olmaması </p>
            <p> — Saytı hazırlayan şəxslə əlaqənin kəsilməsi</p>
            <p> — Saytı hazırlayan şəxs artıq başqa işdə çalışdığı üçün kömək edə bilməməsi</p>
            <p> — Saytı hazırlayan şəxsin sayta əlavə olunacaq funksiyanı inteqrasiya edə bilməməsi</p>
            <p> — Saytı hazırlayan şəxs dəyişiklik üçün real olmayan ödəniş tələb etməsi</p>
        
        </div>
   </div>
    </div>
  )
}

export default TechSupport