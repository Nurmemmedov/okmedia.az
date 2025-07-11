import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Career() {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (
    <div   data-aos="fade-up">
    </div>
  );
}

export default Career;
