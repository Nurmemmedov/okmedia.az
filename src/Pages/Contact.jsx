import React from 'react'
import img from "../img/section9card/img.jpeg";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

function Contact() {
  return (
    <div>
      {/* Banner */}
      <div
        className="flex justify-start items-end h-[67vh] bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})`
        }}>
        <h2 className='text-6xl text-white font-semibold m-10'>Bizimlə əlaqə</h2>
      </div>

      {/* Banner altı mətn */}
      <p className='m-10 text-2xl'>
        Sizə yardımçı olmaq üçün buradayıq! Ofisimiz bazar <br /> ertəsindən şənbə gününə qədər 10:00-dan 18:00-dək <br /> açıqdır
      </p>

      <hr />

      {/* Əlaqə məlumatları */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">Əlaqə məlumatları</h2>
          <div className="space-y-8">
            {/* Ünvan */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-6 border-b border-gray-300 pb-6">
              <div className="flex items-center gap-2 w-full md:w-1/4 mb-2 md:mb-0">
                <FiMapPin className="text-red-600 text-xl" />
                <span className="font-medium">Ünvan :</span>
              </div>
              <div className="w-full md:w-3/4 pl-6">
                <p>H.Əliyev prospekti 115</p>
                <p>Bakı, Azərbaycan</p>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-6 border-b border-gray-300 pb-6">
              <div className="flex items-center gap-2 w-full md:w-1/4 mb-2 md:mb-0">
                <FiPhone className="text-black text-xl" />
                <span className="font-medium">Telefon :</span>
              </div>
              <div className="w-full md:w-3/4 pl-6">
                <p>(012) 555 11 31</p>
                <p>(055) 250 96 00</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-6 border-b border-gray-300 pb-6">
              <div className="flex items-center gap-2 w-full md:w-1/4 mb-2 md:mb-0">
                <FiMail className="text-black text-xl" />
                <span className="font-medium">Email :</span>
              </div>
              <div className="w-full md:w-3/4 pl-6">
                <p>office@okmedia.az</p>
              </div>
            </div>

            {/* İş qrafiki */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <div className="flex items-center gap-2 w-full md:w-1/4 mb-2 md:mb-0">
                <FiClock className="text-black text-xl" />
                <span className="font-medium">İş qrafiki :</span>
              </div>
              <div className="w-full md:w-3/4 pl-6">
                <p><span className="font-semibold">Ofis :</span></p>
                <p>I-VI günlər, saat 10:00 – 18:00</p>
                <p className="mt-2"><span className="font-semibold">Texniki dəstək şöbəsi :</span></p>
                <p>365 gün, fasiləsiz</p>
              </div>
            </div>
          </div>

          {/* Əlaqə formu */}
          <div className="mt-16 flex flex-col md:flex-row md:items-start md:gap-6">
            <div className="w-full md:w-1/4 mb-4 md:mb-0"></div>
            <div className="w-full md:w-3/4 pl-6">
              <form className="space-y-6">
                <div className="flex flex-col md:flex-row md:gap-6">
                  <input
                    type="text"
                    placeholder="Adınız və soyadınız"
                    className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Əlaqə nömrəniz"
                    className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg mt-4 md:mt-0"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email ünvanınız"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />

                <textarea
                  rows="4"
                  placeholder="Qeydiniz"
                  className="w-full p-4 border border-gray-300 rounded-lg resize-y"
                ></textarea>

                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-6 py-3"
                >
                  Qiymət təklifi al
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row md:items-start md:gap-6">
            <div className="w-full">
                <div className="relative w-full overflow-hidden rounded-lg " style={{ paddingTop: '30%'  }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.508145483016!2d49.86709251573791!3d40.4092619793641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d06c2fbc13d%3A0xf90b8a5dd16377b!2sHeydar%20Aliyev%20Center!5e0!3m2!1sen!2saz!4v1623402553282!5m2!1sen!2saz"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </div>
            </div>
    </div>
  );
}

export default Contact;
