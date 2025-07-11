import React, { useEffect } from 'react'
import BloqCards from './BloqCards'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Bloq() {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <div  data-aos="fade-up" >
        <BloqCards/>
    </div>
  )
}

export default Bloq