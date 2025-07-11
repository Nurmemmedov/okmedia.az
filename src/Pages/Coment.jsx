import React, { useEffect } from 'react'
import CardDetail from '../Pages/CardDetail'

import AOS from 'aos';
import 'aos/dist/aos.css';



function Coment() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (
    <div data-aos="fade-up">
        <CardDetail/>
    </div>
  )
}

export default Coment