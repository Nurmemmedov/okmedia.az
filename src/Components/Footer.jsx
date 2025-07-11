import React from 'react'
import Referans from './Referans'
import SectionFooter from './SectionFooter'
import logo from "../img/logo.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div>
        <Referans/>
        <SectionFooter/>
        <footer id='footer' className="px-16 bg-black text-white">
		     <div className='max-w-[1400px]'>
          	<div className="pb-6 col-span-full  md:pb-0 md:col-span-6">
            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
              <div className="flex items-center justify-center py-3 w-[160px] h-[70px] ">
                <img  src={logo} alt="logo" />
              </div>
            </a>
            <div>
              <p className='py-3 pb-15'>Sizin vebsayt üçün ideyamız var!</p>
            </div>
			</div>
        <div className="container grid grid-cols-2 mx-auto gap-x-2 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-2xl text-gray-500">Şirkət</h2>
          <div className="flex flex-col space-y-2 text-lg text-white">
            <Link to="/about" rel="noopener noreferrer">Şirkət haqqında</Link>
            <Link to="/coment/" rel="noopener noreferrer">Müştərilərin fikri</Link>
            <Link to="/projects/" rel="noopener noreferrer">Layihələrimiz</Link>
            <Link to="/career/" rel="noopener noreferrer">Karyera</Link>
         </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-2xl text-gray-500">Həllər</h2>
          <div className="flex flex-col space-y-2 text-lg text-white">
            <Link to="/Web"rel="noopener noreferrer" >Veb saytların hazırlanması</Link>
            <Link to="/TechSupport" rel="noopener noreferrer">Veb saytlara texniki dəstək</Link>
            <Link to="/KorporativMail" rel="noopener noreferrer">Korporativ mail</Link>
            <Link to="/paymentIntegration" rel="noopener noreferrer">Online ödəmə sistemi inteqrasiyası</Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-2xl text-gray-500">Son işlərimiz</h2>
          <div className="flex flex-col space-y-2 py-2 text-lg text-white">
            <a rel="noopener noreferrer" href="https://milla.az/" target="_blank">www.milla.az</a>
            <a rel="noopener noreferrer" href="https://pribaltika.az/"target="_blank">www.pribaltika.az</a>
            <a rel="noopener noreferrer" href="https:/germanhospital.az/"target="_blank">www.germanhospital.az</a>
            <Link to="/Portfolio" rel="noopener noreferrer" >Bütün işlərə bax</Link>
          </div>
        </div>
        <div className="footer-contact-icons">
                <div className="footer-contact-icons flex flex-wrap gap-4 py-">
                {[
                  { href: "https://facebook.com/okmedia.az/", icon: "fa-facebook-f",bg: "bg-[#3B5998]"},
                  { href: "https://www.youtube.com/@okmedia-az", icon: "fa-youtube", bg:"bg-[#de1111]"},
                  { href: "https://instagram.com/okmedia.az/", icon: "fa-instagram",bg:"bg-[#5851DB]" },
                  { href: "https://www.linkedin.com/company/okmedia/", icon: "fa-linkedin-in",bg:"bg-[#009be9]"},
                  { href: "https://twitter.com/okmediaaz/", icon: "fa-twitter",bg:"bg-[#3B5998]"},
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="nofollow"
                    className={`${item.bg} w-[50px] h-[50px] flex items-center justify-center text-white rounded-full transition-all duration-300 hover:animate-bounce`}>
                    <i className={`fa-brands ${item.icon} text-xl`} />
                  </a>
                ))}
              </div>
                <div className='text-gray-400'>
                  <p>
                    VÖEN: 1904292861.
                    <br />
                    «OKMEDİA» Məhdud Məsuliyyətli Cəmiyyəti.
                </p>
                <p className="footer-link-2">
                  {" "}
                  Veb saytın bütün hüquqları Azərbaycan Respublikasının müvafiq
                  qanunvericiliyinə əsasən qorunur. Resursda qeyd olunan məlumatların,
                  şirkətin yazılı icazəsi olmadan istifadə olunması qadağandır.
                </p>
                <br />
                </div>
              </div>
      </div>
         </div>
    </footer>
        </div>
      )
    }

    export default Footer