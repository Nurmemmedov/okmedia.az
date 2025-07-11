import React, { useState } from 'react'
import bloq1 from "../img/section9/bloq1.png"
import bloq2 from "../img/section9/bloq2.jpg"
import bloq3 from "../img/section9/bloq3.png"
import bloq4 from "../img/section9/bloq4.jpg"
import bloq5 from "../img/section9/bloq5.jpg"
import bloq6 from "../img/section9/bloq6.jpeg"
import bloq7 from "../img/section9/bloq7.jpg"
import bloq8 from "../img/section9/bloq8.jpg"
import bloq9 from "../img/section9/bloq9.png"
import bloq10 from "../img/section9/bloq10.jpg"
import work from "../img/section9/work.jpg"
import work1 from "../img/section9/work1.png"
import work2 from "../img/section9/work2.jpg"
import hosting from "../img/section9/hosting.jpg"
import { Link } from 'react-router-dom'

function BloqCards() {
  const cards = [
    { img: bloq1, title: 'Süni intellekt vebsaytlara necə təsir edə bilər?' },
    { img: bloq2, title: 'Vebsaytınızla müştərilərinizin etibarını qazanın.' },
    { img: bloq3, title: 'Axtarış motorlarında ilk sırada çıxmaq üçün 5 veb dizayn tövsiyəsi' },
    { img: bloq4, title: 'Bu saytlar səni başqa bir dünyaya aparacaq' },
    { img: bloq5, title: 'Kod yazmadan vebsayt hazırlaya biləcəyin 5 pulsuz mənbə' },
    { img: bloq6, title: 'Müştərilərinə toplu email göndərə biləcəyin 5 pulsuz sayt' },
    { img: bloq7, title: 'Düzgün sayt dizaynı ilə müştərilərinizi artırın' },
    { img: bloq8, title: 'Satışlarınızı artıracaq 5 e-mail marketinq ideyası' },
    { img: bloq9, title: 'Vebsaytlarda "call to action" nə işə yarayır?' },
    { img: bloq10, title: 'Korporativ e-mailə sahib olmağınızı məcburiyyətə çevirən 5 əsas amil' },
    { img: work, title: 'Saytınızı mobil istifadəçilər üçün necə uyğun edə bilərsiniz?' },
    { img: work1, title: 'Korporativ Sosial Məsuliyyətin biznesinizə qazandıracağı 4 üstünlük' },
    { img: work2, title: 'Biznesinizdə "Google Sheets" istifadə etməyiniz üçün 5 səbəb' },
    { img: hosting, title: 'Hosting nədir?' },

  ]

  const [page, setPage] = useState(1)
  const cardsPerPage = 10

  const startIndex = (page - 1) * cardsPerPage
  const currentCards = cards.slice(startIndex, startIndex + cardsPerPage)

  return (
    <div className="max-w-[1400px] my-10  mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 pt-15 bg-gray-100 rounded-2xl gap-y-6">
        {currentCards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[300px] rounded-2xl object-cover"
            />
            <Link to={'/BlogDetail/'}>
              <h3 className="mt-3 ml-9 text-xl sm:text-2xl md:text-3xl hover:text-gray-500 font-bold">
                {item.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>


      <div className="flex justify-center mt-6 space-x-4">
        {[ 1, 2,].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`w-10 h-10 border border-gray-400 flex items-center justify-center
              ${page === num ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
              hover:bg-gray-800 hover:text-white transition`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BloqCards
