import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hosting from '../img/section9/hosting.jpg';
import bloq1 from '../img/section9/bloq1.png';
import bloq2 from '../img/section9/bloq2.jpg';
import bloq3 from '../img/section9/bloq3.png';
import bloq4 from "../img/section9/bloq4.jpg"
import bloq5 from "../img/section9/bloq5.jpg"
import elshen from '../img/section9/elshen.jpeg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const allBlogs = [
  {
    slug: 'hosting-nedir',
    title: 'Hostinq nədir?',
    img: hosting,
    content: <div className="blog-full-story space-y-6 leading-relaxed text-gray-800 text-[17px]">
  

  <h3 className="text-2xl font-semibold text-gray-900">
    Veb Hosting Nədir və Niyə Əhəmiyyətlidir?
  </h3>

  <p>
    Əgər bir veb sayt yaratmaq istəyirsinizsə, ilk addımlardan biri
    veb hosting xidməti haqqında məlumat sahibi olmaqdır. Bəs
    veb hosting nədir və niyə veb saytınız üçün vacibdir? Gəlin bu
    barədə ətraflı danışaq.
  </p>

  <h3 className="text-2xl font-semibold text-gray-900">Veb Hosting</h3>

  <p>
    Veb hosting, veb saytınızı internet üzərindən yayımlamağa imkan verən bir
    xidmətdir. Bu xidmət vasitəsilə
    saytınıza aid olan bütün məlumatlar xüsusi serverlərdə saxlanılır.
  </p>

  <h3 className="text-2xl font-semibold text-gray-900">
    Şəxsi Kompüterlə Veb Hosting Mümkündürmü?
  </h3>

  <p>
    Texniki olaraq, bəli – şəxsi noutbukunuzu və ya masaüstü kompüterinizi
   veb serverə çevirərək, öz veb saytınızı yayımlaya bilərsiniz. Amma bu,
    bir sıra çətinliklər yaradır:
  </p>

  <ul className="list-disc ml-10 text-[17px] leading-relaxed text-gray-800 space-y-2 marker:text-[#baba00]">
    <li>Kompüteriniz 24 saat açıq qalmalıdır.</li>
    <li>Güclü və stabil internet bağlantınız olmalıdır.</li>
    <li>
      Təhlükəsizlik, texniki dəstək və məlumat ehtiyat nüsxələri kimi məsələləri
      özünüz həll etməlisiniz.
    </li>
  </ul>

  <p>
    Əslində, bu cür yanaşma çoxlu risklər və texniki çətinliklər yaradır.
    Ona görə də əksər istifadəçilər bu yolu seçmirlər.
  </p>

  <p>
    Veb saytınızın daim əlçatan və sürətli olması üçün etibarlı bir
    veb hosting şirkəti ilə əməkdaşlıq etmək ən doğru qərardır. Bu
    şirkətlər sizə:
  </p>

  <ul className="list-disc ml-10 text-[17px] leading-relaxed text-gray-800 space-y-2 marker:text-[#baba00]">
    <li>Fiziki yaddaş (serverlər)</li>
    <li>24/7 texniki dəstək</li>
    <li>Təhlükəsizlik və məlumat qorunması</li>
    <li>Avtomatik backup (ehtiyat nüsxə)</li>
  </ul>

  <p>
    kimi vacib imkanlar təqdim edir. Beləliklə, siz saytınızın idarəçiliyinə
    deyil, məzmununa və inkişafına fokuslana bilərsiniz.
  </p>

  <p>
    Veb hosting xidməti olmadan bir saytın internetdə yayımlanması mümkün deyil.
    Əgər peşəkar və daim aktiv bir sayt yaratmaq istəyirsinizsə, etibarlı bir
    veb hosting şirkəti seçmək ilk addımınız olmalıdır.
  </p>

  <p>
    Unutmayın: <b>Hosting – saytınızın evi, domen isə onun ünvanıdır!</b>
  </p>
</div>

  },
  {
    slug: 'sunni-intellekt-vebsaytlara-tesiri',
    title: 'Süni intellekt vebsaytlara necə təsir edə bilər?',
    img: bloq1,
    content: <div className="max-w-[800px]  text-lg leading-relaxed text-gray-800">
  <p className="mb-4">
    Son illərdə sürətlə inkişaf edən sahələrdən biri olan süni intellekt (AI) vebsaytların hazırlanmasında da əhəmiyyətli təsir göstərə biləcək gücə sahibdir. Bu yazıda süni intellektin vebsaytların fərdiləşdirilməsinə necə təsir edə biləcəyinin nümunələrini sizə təqdim edirik.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-2">İstifadəçi təcrübələrinin fərdiləşdirilməsi:</h3>
  <ul className="list-disc ml-10 text-[17px] leading-relaxed text-gray-800 space-y-2 marker:text-[#baba00]">
    <li>
      Süni intellekt hər bir fərdi istifadəçi üçün veb-sayt təcrübəsini fərdiləşdirmək üçün istifadəçi davranışını, üstünlüklərini və nümunələrini təhlil edə bilər. Buraya fərdiləşdirilmiş məhsul tövsiyələri, fərdiləşdirilmiş axtarış nəticələri və uyğunlaşdırılmış məzmun daxildir.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-2">Proqnozlu analitika:</h3>
  <ul className="list-disc ml-10 text-[17px] leading-relaxed text-gray-800 space-y-2 marker:text-[#baba00]">
    <li>
      Süni intellekt istifadəçi ehtiyaclarını və üstünlüklərini təxmin etmək üçün proqnozlaşdırıcı analitikadan istifadə edir. İstifadəçi məlumatlarını təhlil edərək, AI alqoritmləri istifadəçilərin daha sonra nə edəcəyini proqnozlaşdıra və müvafiq məzmun və ya məhsulları təklif edə bilər.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-2">Real vaxtda optimallaşdırma:</h3>
   <ul className="list-disc ml-10 text-[17px] leading-relaxed text-gray-800 space-y-2 marker:text-[#baba00]">
    <li>
      AI istifadəçi davranışına əsaslanaraq real vaxt rejimində veb sayt təcrübəsini optimallaşdıra bilər. Məsələn, istifadəçi alış-veriş səbətindən imtina edərsə, AI alqoritmləri dərhal müvafiq məhsulları təklif edə və ya istifadəçini alışı tamamlamağa təşviq etmək üçün endirim təklif edə bilər.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-2">Virtual köməkçilər:</h3>
  <ul className="list-disc ml-10 text-[17px] leading-relaxed text-gray-800 space-y-2 marker:text-[#baba00]">
    <li>
      Süni intellektlə işləyən virtual köməkçilər istifadəçilərə fərdi yardım göstərə bilər. Onlar sualları cavablandıra, tövsiyələr verə və istifadəçilərin seçimlərinə əsaslanaraq uyğun səhifəyə istiqamətləndirə bilərlər.
    </li>
  </ul>
</div>

  },
  {
    slug: 'vebsayt-etibar-qazan',
    title: 'Vebsaytınızla müştərilərinizin etibarını qazanın.',
    img: bloq2,
    content:<div id="blog-full-story" className="text-gray-800 text-[17px] leading-relaxed max-w-4xl mx-auto px-4 py-6">
  <p className="mb-6">
    Müştərilərlə inam yaratmaq istənilən biznes, xüsusən də onlayn fəaliyyət göstərənlər üçün çox vacibdir.
    Müştərilərin biznesiniz haqqında ilk təəssüratı əsasən vebsaytınız üzərindən yaranır,
    ona görə də vebsaytınız maksimum şəkildə güvənverici olmalıdır.
    Müştərilərinizin biznesinizə güvənməsinə kömək edəcək veb-sayt hazırlamaq üçün bəzi üsulları sizə təqdim edirik.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    1. Peşəkar dizayndan istifadə edin:
  </h3>
  <ul className="list-disc marker:text-[#baba00] ml-8 space-y-2 mb-6">
    <li>
      Müştərinin güvənini qazanmaq üçün onun qarşısına peşəkar şəkildə çıxmaq və düzgün ilk təəssürat yaratmaq çox önəmlidir.
      Ona görə də vebsaytınızın hazırlanmasında brendinizi əks etdirən rəng sxemi ilə təmiz, müasir dizayndan istifadə edin.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    2. Naviqasiyanı asanlaşdırın:
  </h3>
  <ul className="list-disc marker:text-[#baba00] ml-8 space-y-2 mb-6">
    <li>
      Aydın naviqasiya ilə yaxşı təşkil edilmiş vebsayt müştərilərə axtardıqlarını tez və asanlıqla tapmağa kömək edə bilər.
      Aydın başlıqlar və alt başlıqlardan istifadə edin və saytınızın bütün cihazlarda asanlıqla istifadə edilə bildiyindən əmin olun.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    3. Müştəri rəylərini göstərin:
  </h3>
  <ul className="list-disc marker:text-[#baba00] ml-8 space-y-2 mb-6">
    <li>
      Müştəri rəyləri və geridönüşləri potensial müştərilərlə inam yaratmaq üçün güclü bir yoldur.
      Ana səhifə və ya məhsul səhifələrinizə rəylər daxil edin və müştərilərin rəy bildirməsini asanlaşdırın.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    4. Etibar nişanları və sertifikatlarınızı nümayiş edin:
  </h3>
  <ul className="list-disc marker:text-[#baba00] ml-8 space-y-2 mb-6">
    <li>
      Əgər biznesiniz üçüncü tərəf təşkilatı tərəfindən akkreditə olunubsa və ya hər hansı sertifikat alıbsa,
      onları vebsaytınızda diqqətəlayiq şəkildə göstərin.
      Bu, müştərilərdə inam yaratmağa kömək edə və onları nüfuzlu şirkətlə iş gördüklərinə inandıra bilər.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    5. Aydın əlaqə məlumatı təqdim edin:
  </h3>
  <ul className="list-disc marker:text-[#baba00] ml-8 space-y-2 mb-6">
    <li>
      Telefon nömrəniz, e-poçt ünvanınız və fiziki ünvanınız daxil olmaqla,
      aydın əlaqə məlumatlarını təqdim etməklə müştərilərin sizinlə əlaqə saxlamasını asanlaşdırın.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    6. Təhlükəsiz ödəniş üsullarından istifadə edin:
  </h3>
  <ul className="list-disc marker:text-[#baba00] ml-8 space-y-2 mb-6">
    <li>
      Əgər məhsul və ya xidmətlərinizi onlayn şəkildə satırsınızsa,
      müştərilərinizin həssas məlumatlarını qorumaq üçün təhlükəsiz ödəniş üsullarından istifadə etdiyinizə əmin olun.
    </li>
  </ul>
</div>
,
  },
  {
    slug: 'seo-ucun-5-web-dizayn-tovsiyesi',
    title: 'Axtarış motorlarında ilk sırada çıxmaq üçün 5 web dizayn tövsiyəsi',
    img: bloq3,
    content:<div id="blog-full-story" className="text-gray-800 text-[17px] leading-relaxed max-w-4xl mx-auto px-4 py-6">
  <p className="mb-6">
    Veb dizayn axtarış motorlarının optimallaşdırılmasında (SEO) mühüm rol oynayır,
    çünki bu, axtarış motorlarının veb saytınızı necə skan etdiyinə təsir göstərir.
    Veb dizayn vasitəsilə saytınızı axtarış motorları üçün optimallaşdırmaq üçün bəzi tövsiyələr: </p>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    1. Responsiv dizayndan istifadə edin:
  </h3>
  <ul className="list-disc marker:text-[#baba00] ml-8 space-y-2 mb-6">
    <li>
      Google və digər axtarış motorları mobil cihazlara uyğun və həssas dizaynı olan veb-saytlara üstünlük verirlər.
      Bu o deməkdir ki, vebsayt bütün cihazlarda qüsursuz istifadəçi təcrübəsi təmin edərək müxtəlif ekran ölçüləri və funksiyalara uyğunlaşa bilməlidir.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    2. Şəkillərinizi optimallaşdırın:
  </h3>
  <ul className="list-disc marker:text-[#baba00] ml-8 space-y-2 mb-6">
    <li>
      Şəkillər veb saytınızın yükləmə sürətini ləngidə bilər, bu isə SEO-ya mənfi təsir göstərir.
      Şəkillərinizi optimal ölçülərdə yükləyərək və teqlərdən istifadə edərək axtarış motorlarına şəkillərin nə ilə bağlı olduğunu başa düşməyə kömək edə bilərsiniz.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    3. Kodlarınız təmiz olsun:
  </h3>
  <ul className="list-disc marker:text-[#baba00] ml-8 space-y-2 mb-6">
    <li>
      Axtarış motorları oxunması və başa düşülməsi asan, təmiz, səliqəli şəkildə təşkil edilmiş kodu olan veb-saytlara üstünlük verir.
      Saytınızı ləngidə biləcək proqramlaşdırma dillərindən həddindən artıq istifadə etməməyə və kodlarınızın tam səliqəli formada olmasına diqqət edin.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    4. Açar sözlərə daha çox yer verin:
  </h3>
  <ul className="list-disc marker:text-[#baba00] ml-8 space-y-2 mb-6">
    <li>
      Açar sözlər SEO-nun vacib hissəsidir, ona görə də onları URL-lərinizə, başlıqlarınıza daxil etmək vacibdir.
      Bu, axtarış motorlarına veb saytınızın nə haqqında olduğunu anlamağa kömək edir və müvafiq axtarış sorğuları üçün daha yüksək yer tutmağınıza imkan yaradır.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    5. Daxili keçiddən istifadə edin:
  </h3>
  <ul className="list-disc marker:text-[#baba00] ml-8 space-y-2 mb-6">
    <li>
      Daxili keçid axtarış motorlarına veb saytınızın strukturunu və müxtəlif səhifələr arasındakı əlaqələri anlamağa kömək edə bilər.
      Bir-biri ilə əlaqəli olan kontentləri linklər vasitəsilə əlaqələndirməyə və keçid verməyə diqqət edin.
    </li>
  </ul>

  <p>
    Bu tövsiyələr sayəsində siz veb saytınızın dizaynını SEO üçün optimallaşdıra bilərsiniz.
    Eyni zamanda mükəmməl istifadəçi təcrübəsi təmin etməyi və yüksək keyfiyyətli məzmun yaratmağı da unutmayın,
    çünki bu amillər SEO-nun uğuru üçün də vacibdir.
  </p>
   </div>
,

  },
   {
    slug: 'Bu-saytlar-səni-başqa-bir-dünyaya-aparacaq',
    title: 'Bu saytlar səni başqa bir dünyaya aparacaq',
    img: bloq4,
    content: <div className="blog-full-story" id="blog-full-story">
  <br />
  <br />
  <span className="masha_index masha_index8" rel={8} />
  Yaşadığımız internet dövründə mövcudluğundan xəbərdar belə olmadığımız
  milyonlarla vebsayt var. Bu saytların arasından bəziləri xüsusilə öz
  yaradıcılıqları, dizaynları, məqsədləri ilə digərlərindən tamamilə fərqlənir.
  Bu cür saytlar təqdim etdikləri özəllikləri ilə səni internet dünyasının
  dərinliklərinə apararaq, maraqlı təcrübə yaşamağına səbəb olacaq. Beləliklə,
  səni başqa bir dünyaya aparacaq saytlardan bəzilərini sənə təqdim edirik.
  <br />
  <br />
  <h3>
    <span className="masha_index masha_index9" rel={9} />
    1. A Soft Murmur
  </h3>
  <ul>
    <li>
      <span className="masha_index masha_index10" rel={10} />
      Bu vebsayt sizə öz şəxsi səs mənzərənizi yaratmaq üçün müxtəlif mühit
      səslərini qarışdırmağa və uyğunlaşdırmağa imkan verir. Yağış, ildırım,
      dalğa və s. kimi səsləri birləşdirərək maraqlı səs təcrübəsi yaşaya
      bilərsiniz.
    </li>
  </ul>
  <br />
  <h3>
    <span className="masha_index masha_index11" rel={11} />
    2. Scale of Universe
  </h3>
  <ul>
    <li>
      <span className="masha_index masha_index12" rel={12} />
      Bu veb-sayt ən kiçik hissəciklərdən tutmuş ən böyük strukturlara qədər
      kainatın ölçüsünü interaktiv şəkildə tədqiq etməyə imkan verir. Kainatdakı
      yerimiz haqqında yeni perspektiv əldə etmək üçün maraqlı yoldur.
    </li>
  </ul>
  <br />
  <h3>
    <span className="masha_index masha_index13" rel={13} />
    3. Gnoosic
  </h3>
  <ul>
    <li>
      <span className="masha_index masha_index14" rel={14} />
      "Gnoosic" sevimli ifaçılarınız əsasında yeni mahnılar kəşf etməyə kömək
      edə biləcək vebsaytdır. Bu musiqi üfüqlərinizi genişləndirmək və zövqünüzə
      uyğun yeni sənətçilər tanımaq üçün əla bir yoldur.
    </li>
  </ul>
  <br />
  <h3>
    <span className="masha_index masha_index15" rel={15} />
    4. The Secret Door&nbsp;
  </h3>
  <ul>
    <li>
      <span className="masha_index masha_index16" rel={16} />
      Bu sayt sizi Google Street View-da təsadüfi maraqlı yerlərə aparmaq üçün
      hazırlanıb. Yeni məkanlar kəşf etmək və maraqlı vaxt keçirmək üçün olduqca
      ideal bir saytdır.
    </li>
  </ul>
  <br />
  <h3>
    <span className="masha_index masha_index17" rel={17} />
    5. Radiooooo&nbsp; &nbsp; &nbsp;&nbsp;
  </h3>
  <ul>
    <li>
      <span className="masha_index masha_index18" rel={18} />
      "Radiooooo" dünyanın müxtəlif yerlərindən və müxtəlif zaman dövrlərindən
      musiqi kəşf etməyə imkan verən vebsaytdır. İstədiyiniz ölkəni və dövrü
      seçərək bir növ zamanda səyahət edə bilərsiniz.
    </li>
  </ul>
</div>

  },
    {
    slug: 'Kod-yazmadan-vebsayt-hazırlaya-biləcəyin-5-pulsuz-mənbə',
    title: 'Kod yazmadan vebsayt hazırlaya biləcəyin 5 pulsuz mənbə',
    img: bloq5,
    content: <div className="blog-full-story" id="blog-full-story">
  <span className="masha_index masha_index8" rel={8} />
  Müasir biznes dünyasında vebsaytların nə qədər mühim rol oynadığını yəqin ki,
  özünüz də təcrübə etmisiniz. Xüsusilə pandemiya dövründə onlayn xidmətlərin
  önplana çıxması ilə vebsaytların nə qədər önəmli olduğu daha da anlaşıldı.
  Vebsayt hazırlamaq hər nə qədər qarışıq proses olaraq düşünülsə də, bu gün
  sizə vebsayt hazırlamaqda kömək edəcək, heç bir kod biliyi tələb etməyən çoxlu
  saytlar mövcuddur. Bu yazıda sizə kod yazmadan vebsayt hazırlaya biləcəyiniz 5
  pulsuz mənbəni təqdim edəcəyik.
  <br />

  <h2>
    <span className="masha_index masha_index9" rel={9} />
    Wix
  </h2>
  <br />
  <h3>
    <span className="masha_index masha_index10" rel={10} />
    Üstünlükləri
  </h3>
  <ol>
    <li>
      <span className="masha_index masha_index11" rel={11} />
      Müxtəlif sahələr üçün hazırlanmış 900-dən çox pulsuz şablon
    </li>
    <li>
      <span className="masha_index masha_index12" rel={12} />
      Birdən çox vebsayt yaratma imkanı
    </li>
    <li>
      <span className="masha_index masha_index13" rel={13} />
      Fərdiləşdirilmiş dizayn alətlər
    </li>
    <li>
      <span className="masha_index masha_index14" rel={14} />
      Mobil optimizasiya
    </li>
    <li>
      <span className="masha_index masha_index15" rel={15} />
      Geniş şəkil qaleriyası
    </li>
  </ol>
  <br />
  <br />
  <h3>
    <span className="masha_index masha_index16" rel={16} />
    Çatışmazlıqları
  </h3>
  <ol>
    <li>
      <span className="masha_index masha_index17" rel={17} />
      &nbsp;Seçilən şablonu sonradan dəyişmək mümkün olmur.
    </li>
    <li>
      <span className="masha_index masha_index18" rel={18} />
      &nbsp;Çox seçimin olması yeni istifadəçilər üçün yorucu ola bilər.
    </li>
    <li>
      <span className="masha_index masha_index19" rel={19} />
      &nbsp;Pulsuz versiyası sadəcə 500MB yaddaş imkanı verir.
    </li>
  </ol>
  <br />
  <br />
  <h2>
    <span className="masha_index masha_index20" rel={20} />
    Webflow
  </h2>
  <br />
  <h3>
    <span className="masha_index masha_index21" rel={21} />
    Üstünlükləri
  </h3>
  <ol>
    <li>
      <span className="masha_index masha_index22" rel={22} />
      Çoxsaylı SEO alətlərinin olması
    </li>
    <li>
      <span className="masha_index masha_index23" rel={23} />
      Pulsuz 10GB yaddaş
    </li>
    <li>
      <span className="masha_index masha_index24" rel={24} />
      Sıfırdan saytı dizayn etmə imkanı
    </li>
  </ol>
  <br />
  <br />
  <h3>
    <span className="masha_index masha_index25" rel={25} />
    Çatışmazlıqları
  </h3>
  <ul>
    <li>
      <span className="masha_index masha_index26" rel={26} />
      İnterfeysi "Photoshop" və ya "InDesign" kimi Adobe proqramlarına bənzədiyi
      üçün qrafik dizaynerlərin istifadəsini asanlaşdırsa da, bu proqramları çox
      bilməyən insanlar üçün qarışıq gələ bilər.
    </li>
  </ul>
  <br />
  <br />
  <h2>
    <span className="masha_index masha_index27" rel={27} />
    WordPress
  </h2>
  <br />
  <h3>
    <span className="masha_index masha_index28" rel={28} />
    Üstünlükləri
  </h3>
  <ol>
    <li>
      <span className="masha_index masha_index29" rel={29} />
      &nbsp;Bloq formalı vebsayt yaratmaq üçün ən yaxşı alətlər
    </li>
    <li>
      <span className="masha_index masha_index30" rel={30} />
      &nbsp;İstənilən qədər vebsayt yaratma imkanı
    </li>
    <li>
      <span className="masha_index masha_index31" rel={31} />
      &nbsp;Birbaşa sayt vasitəsilə domen almaq imkanı
    </li>
    <li>
      <span className="masha_index masha_index32" rel={32} />
      &nbsp;İstifadəsinin rahatlığı
    </li>
  </ol>
  <br />
  <br />
  <h3>
    <span className="masha_index masha_index33" rel={33} />
    Çatışmazlıqları
  </h3>
  <ol>
    <li>
      <span className="masha_index masha_index34" rel={34} />
      &nbsp;Satış xarakterli vebsayt yaratmaq üçün çox uyğun deyil.
    </li>
    <li>
      <span className="masha_index masha_index35" rel={35} />
      &nbsp;Təhlükəsizliyin nisbətən zəif olması
    </li>
  </ol>
  <br />
  <h2>
    <span className="masha_index masha_index36" rel={36} />
    Jimdo
  </h2>
  <br />
  <h3>
    <span className="masha_index masha_index37" rel={37} />
    Üstünlükləri
  </h3>
  <ol>
    <li>
      <span className="masha_index masha_index38" rel={38} />
      &nbsp;Çox sadə istifadəsi ilə bir neçə dəqiqəyə vebsayt yaratma imkanı
    </li>
    <li>
      <span className="masha_index masha_index39" rel={39} />
      &nbsp;Mobil tətbiq vasitəsilə telefon üzərindən də işləməyin mümkünlüyü
    </li>
    <li>
      <span className="masha_index masha_index40" rel={40} />
      &nbsp;Daha ətraflı işləmək üçün HTML əlavə etməyin mövcudluğu
    </li>
    <li>
      <span className="masha_index masha_index41" rel={41} />
      &nbsp;Şəkil və video əlavə etməyin rahatlığı
    </li>
  </ol>
  <br />
  <br />
  <h3>
    <span className="masha_index masha_index42" rel={42} />
    Çatışmazlıqları
  </h3>
  <ol>
    <li>
      <span className="masha_index masha_index43" rel={43} />
      &nbsp;Bloq funksiyası çox qarışıqdır.
    </li>
    <li>
      <span className="masha_index masha_index44" rel={44} />
      &nbsp;Pulsuz versiyası nisbətən daha limitlidir.
    </li>
  </ol>
  <br />
  <h2>
    <span className="masha_index masha_index45" rel={45} />
    Weebly
  </h2>
  <br />
  <h3>
    <span className="masha_index masha_index46" rel={46} />
    Üstünlükləri
  </h3>
  <ol>
    <li>
      <span className="masha_index masha_index47" rel={47} />
      &nbsp;Peşəkar şəkildə hazırlanmış çoxlu sayda şablon
    </li>
    <li>
      <span className="masha_index masha_index48" rel={48} />
      &nbsp;Videolar vasitəsilə daha dinamik arxaplan yaratmaq imkanı
    </li>
    <li>
      <span className="masha_index masha_index49" rel={49} />
      &nbsp;Mobil tətbiq vasitəsilə telefon üzərindən də işləməyin mümkünlüyü
    </li>
    <li>
      <span className="masha_index masha_index50" rel={50} />
      "Autosave" funksiyasının olması
    </li>
  </ol>
  <br />
  <h3>
    <span className="masha_index masha_index51" rel={51} />
    Çatışmazlıqları
  </h3>
  <ol>
    <li>
      <span className="masha_index masha_index52" rel={52} />
      &nbsp;SEO imkanlarının limitli olması
    </li>
    <li>
      <span className="masha_index masha_index53" rel={53} />
      &nbsp;Zaman-zaman platforma dona bilir.
    </li>
    <li>
      <span className="masha_index masha_index54" rel={54} />
      &nbsp;Pulsuz versiyası sadəcə 500MB yaddaş imkanı yaradır.
    </li>
  </ol>
  <br />
  <br />
  <br />
</div>


  },
];

function BlogDetail() {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  

  const { id } = useParams();
  const navigate = useNavigate();
  const blog = allBlogs.find((item) => item.slug === id);

  return (
    <div className="w-full flex justify-center bg-[#ffffff] px-4 md:px-0"data-aos="fade-up">
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-10 py-10">
        <div className="flex-1">
          <div className="text-sm h-[50px] rounded-md flex items-center pl-2 w-full bg-[#f2f2f2] mb-2">
            Ana səhifə {'>'} Bloq {'>'} Marketing
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={elshen}
                alt="Elshen"
                className="w-15 h-15 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-sm">Elşən Cəbrayılzadə</div>
                <div className="text-xs text-gray-500">mart, 2023</div>
              </div>
            </div>
          <div className="flex items-center gap-3 text-gray-600 text-lg">
        <span className="text-sm text-black">Paylaş :</span>
        <i className="fab fa-facebook cursor-pointer bg-[#454545] rounded-full p-2 text-white hover:bg-[#cbcbcb]"></i>
        <i className="fab fa-twitter cursor-pointer bg-[#454545] rounded-full p-2 text-white hover:bg-[#cbcbcb]"></i>
        <i className="fab fa-pinterest cursor-pointer bg-[#454545] rounded-full p-2 text-white hover:bg-[#cbcbcb]"></i>
        <i className="fab fa-linkedin cursor-pointer bg-[#454545] rounded-full p-2 text-white hover:bg-[#cbcbcb]"></i>
        <i className="fab fa-whatsapp cursor-pointer bg-[#454545] rounded-full p-2 text-white hover:bg-[#cbcbcb]"></i>
      </div>
          </div>

          <h1 className="text-3xl md:text-4xl my-20 font-bold mb-6">{blog.title}</h1>
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full rounded-xl  mb-6 max-h-[450px] object-cover"
          />

          <div className="text-lg leading-relaxed mb-10 text-gray-700">
            {blog.content}
          </div>

         <div className="space-y-4 mt-10">
      <span className="text-3xl font-bold text-black block text-center">Sosial şəbəkələrdə paylaş</span>
      <div className="flex justify-center flex-wrap gap-4">
        {[
          { icon: 'facebook-f', color: '#1877F2', url: 'https://www.facebook.com/okmedia.az/' },
          { icon: 'twitter', color: '#1DA1F2', url: 'https://twitter.com/okmedia_az' },
          { icon: 'pinterest-p', color: '#E60023', url: 'https://www.pinterest.com/okmediaaz/' },
          { icon: 'linkedin-in', color: '#0A66C2', url: 'https://www.linkedin.com/company/okmediaaz/' },
          { icon: 'whatsapp', color: '#25D366', url: 'https://wa.me/994000000000?text=Salam%20OKMedia' },
        ].map(({ icon, color, url }) => (
          <a
            key={icon}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-xl border-2 transition-all duration-300"
            style={{
              backgroundColor: color,
              borderColor: color,
              color: 'white',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = color;
              e.currentTarget.style.color = 'white';
            }}
          >
            <i className={`fab fa-${icon}`}></i>
          </a>
        ))}
      </div>
    </div>

        </div>

        <aside className="w-full lg:w-[450px] flex flex-col gap-6">
         <div className="flex mb-8 items-center gap-3">
        <img
          src={elshen}
          alt="Elshen"
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
        />
        <div className="flex flex-col justify-center">
          <div className="font-medium text-base text-gray-900">Elşən Cəbrayılzadə</div>
          <div className="text-xs text-gray-500">Mətn yazarı</div>
        </div>
      </div>

          {allBlogs
            .filter((item) => item.slug !== id)
            .map((item) => (
              <div
                key={item.slug}
                className="flex flex-col gap-2 border-b pb-4 cursor-pointer hover:opacity-80"
                onClick={() => navigate(`/bloq/${item.slug}`)}
              >
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <img
                    src={elshen}
                    className="w-5 h-5 rounded-full object-cover"
                    alt="Author"
                  />
                  Elşən Cəbrayılzadə
                </div>
                <div className="flex justify-between gap-3">
                  <div className="text-xl font-bold text-gray-800">
                    {item.title.length > 55
                      ? item.title.slice(0, 55) + "..."
                      : item.title}
                  </div>
                    <img
                    src={item.img}
                    alt={item.title}
                    className="w-[70px] h-[70px] object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
        </aside>
      </div>
    </div>
  );
}

export default BlogDetail;
