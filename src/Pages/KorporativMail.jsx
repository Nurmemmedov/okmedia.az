import React, { useEffect } from 'react'
import img from '../img/techsupport/xidmetler.jpeg'
import card from "../img/carddetail/card1.gif";

import AOS from 'aos';
import 'aos/dist/aos.css';



function KorporativMail() {
  
     useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (
    <div>
    <div className="max-w-[1400px] mx-auto my-12 px-6"  data-aos="fade-up" >
              <div className="flex flex-col md:flex-row justify-around rounded-2xl bg-[#f3f3f5] items-start gap-12 mb-20">
                <div className="max-w-[500px]">
                  <p className="text-2xl text-gray-600 mt-10">Korporativ email (şirkətə özəl emaillər)</p>
                  <h2 className="text-4xl font-bold text-gray-900 mt-20">
                  Korporativ email 
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
              <h1 className='text-center text-5xl font-semibold'> Korporativ email</h1>
            </div>

           <div class="p-[70px] max-w-[1400px] mx-auto bg-[#f7f7f5] mt-20 rounded-[20px]">
        <div className="space-y-3 text-gray-800">
            <p className='texd-xl font-semibold pb-5' >
           İnternet məkanında korporativ kimliyinizin ən vacib faktorlarından biri şirkət domainində qurulmuş e-mail adresinizdir.
            </p>
            <p className='texd-xl font-semibold pt-5 pb-10' >
           Xüsusən də, əgər yeni yaranmış şirkətsinizsə  rəqabətdə üstünlük əldə etməniz üçün öz şirkət imicinizi yüksək səviyyədə göstərməlisiniz. Şirkət emailindən istifadə həm də, sizin öz işinizə olan hörmətin, biznesinizə nə qədər ciddi yanaşmanızın göstəricisidir.
            </p>
            <h2 className='text-3xl font-bold pb-6'>Korporativ mailin ən çox istifadə olunan formaları:</h2>

          <div className=' ml-5'>
            <p> — office@shirketiniz.az</p>
            <p> — info@shirketiniz.az</p>
            <p> — hr@shirketiniz.az</p>
            <p> — director@shirketiniz.az</p>
            <p> — adiniz.soyadiniz@shirketiniz.az</p>
          </div>

            <p className='texd-xl font-semibold py-10'>
            Əgər sizin üçün də şirkətinizin korporativ kimliyi və şirkət ciddiyyəti vacib amildirsə, mail.ru, gmail.com, hotmail.com, yahoo.com və s. əvəzinə, öz şirkətinizə məxsus e-mail hesablarını seçməlisiniz.
            </p>

            <p className='texd-xl font-semibold py-10'>
            Xüsusən də yeni yaranmış şirkətlər üçün bu, çox mühüm məsələdir. Unutmayın ki, təkliflərinizi və yazışmalarınızı korporativ mail ilə etməniz şirkətinizə əlavə dəyər qazandırır.
            </p>

            <h2 className='text-3xl font-bold pb-6'>Şirkət mailinin bilmədiyiniz 6 üstünlüyü:</h2>

            <div className=' ml-5'>
            <p> — Biznesinizin ciddiyyətini və professionallığını artırır </p>
            <p> — Müəssisənin bütün şöbələrinə gələn məktublara nəzarət sizdə olur</p>
            <p> — İşçi işdən çıxarsa ona məxsus korporativ emaili silmək, yönləndirmək və tam nəzarət etmək mümkündür</p>
            <p> — Avtomatik backup sistemi sayəsində maillərinizin ehtiyat nüsxəsi saxlanılır</p>
            <p> — Səhvən və ya kiberhücum zamanı mail silinərsə geri qaytarmaq mümkündür</p>
            <p> — Çox cüzi məbləğə başa gəlir</p>
            </div>

        </div>
   </div>
               
    </div>
  )
}

export default KorporativMail