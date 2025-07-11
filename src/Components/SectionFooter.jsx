import React from "react";

const QuoteForm = () => {
  return (
    <div className="bg-[#fede68] py-10">
      <div className="max-w-[1400px] mx-auto my-20 bg-white rounded-2xl p-20 md:p-10 flex flex-col md:flex-row gap-8 items-start">
        {/* Sol tərəf */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            <span role="img" aria-label="wave">👋</span> Fikrinizi qısaca izah edərək vebsayt qiymətinin hesablanması üçün sürətli sorğu göndərin
          </h2>
          <p className="text-sm pt-20 text-gray-400">
            son 30 gündə 349 nəfər qiymət təklifi aldı
          </p>
        </div>

        {/* Sağ tərəf */}
        <div className="md:w-1/2 w-full space-y-6">
          {/* Textarea (floating label) */}
          <div className="relative">
            <textarea
              rows="3"
              placeholder="Necə bir vebsayt istəyirsiniz ?"
              className="peer w-full p-4 pt-6 bg-white border border-gray-200 rounded-lg text-sm text-black placeholder-transparent resize-none"
            />
            <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm">
              Necə bir vebsayt istəyirsiniz ?
            </label>
          </div>

          {/* Inputlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ad Soyad */}
            <div className="relative">
              <input
                type="text"
                placeholder="Adınız və soyadınız :"
                className="peer w-full p-4 pt-6 bg-gray-50 border border-gray-200 rounded-lg text-sm text-black placeholder-transparent"
              />
              <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm">
                Adınız və soyadınız :
              </label>
            </div>

            {/* Əlaqə nömrəsi */}
            <div className="relative">
              <input
                type="text"
                placeholder="Əlaqə nömrəniz :"
                className="peer w-full p-4 pt-6 bg-gray-50 border border-gray-200 rounded-lg text-sm text-black placeholder-transparent"
              />
              <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm">
                Əlaqə nömrəniz :
              </label>
            </div>

            {/* Şirkət */}
            <div className="relative md:col-span-1">
              <input
                type="text"
                placeholder="Təmsil etdiyiniz şirkət :"
                className="peer w-full p-4 pt-6 bg-gray-50 border border-gray-200 rounded-lg text-sm text-black placeholder-transparent"
              />
              <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm">
                Təmsil etdiyiniz şirkət :
              </label>
            </div>

            {/* Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-6 py-3 transition md:col-span-1">
              Qiymət təklifi al
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
