import React, { useEffect } from 'react'
import img from '../img/techsupport/xidmetler.jpeg'
import card from "../img/carddetail/card1.gif";

import AOS from 'aos';
import 'aos/dist/aos.css';

function paymentIntegration() {
    
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    

  return (
    <div>
       <div className="max-w-[1400px] mx-auto my-12 px-6" data-aos="fade-up" >
            <div className="flex flex-col md:flex-row justify-around rounded-2xl bg-[#f3f3f5] items-start gap-12 mb-20">
                <div className="max-w-[500px]">
                <p className="text-2xl text-gray-600 mt-10">Ödəmə sistemlərinin inteqrasiyası</p>
                <h2 className="text-4xl font-bold text-gray-900 mt-20">
                   Ödəmə sistemlərinin inteqrasiyası                  
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
            <h1 className='text-center text-5xl font-semibold'> Ödəmə sistemlərinin inteqrasiyası</h1>
            </div>

      <div class="p-[70px] max-w-[1400px] mx-auto bg-[#f7f7f5] mt-20 rounded-[20px]">
        <div className="space-y-3 text-gray-800">
            <p className='texd-xl font-semibold pt-5 pb-2' >
          Müasir internet dünyasında vebsaytlar şirkətlər və müştərilər arasındakı ən güvənli əlaqə vasitəsi hesab olunur. Bu da müştərilərdə öz ödənişlərini və ya pulla bağlı digər əməliyyatlarını da sayt üzərindən etmələri üçün stimul yaradır. 
            </p>
             <p className='texd-xl font-semibold pt-5 pb-2' >
           Sayt üzərindən edilən ödənişlər həm müştərilərin öz vaxtlarına qənaət etmələrinə, həm də əməliyyatların daha dəqiq və güvənli şəkildə yerinə yetirilməsinə səbəb olur. Vebsaytınızda online ödəniş sistemlərinin əsas məqsədi həm şirkətiniz, həm də müştəriləriniz üçün əlçatan, rahat bir alət yaratmaqdır.

            </p>
             <p className='texd-xl font-semibold pt-5 pb-5' >
           "OKmedia" olaraq verdiyimiz xidmətlərdən biri də şirkətiniz üçün tam güvənli və rahat istifadəli Online ödəniş funksiyası yaratmaqdır. Təklif etdiyimiz ödəniş sistemi inteqrasiyası xidməti sizə bu üstünlükləri qazandıracaq:

            </p>

          <div className=' ml-5'>
            <p> — Saytınızla dünyanın hər yerindən ödəmə qəbul etmə imkanı</p>
            <p> — Sürətli və istifadəçi dostu interfeys</p>
            <p> — Banklar tərəfindən 3D şifrələnmə və yüksək təhlükəsizlik</p>
            <p> — director@shirketiniz.az</p>
            <p> — Məlumatların səliqəli şəkildə toplanması və idarə panelinizə ötürülməsi</p>
          </div>

        </div>
   </div>
    </div>
  )
}

export default paymentIntegration