import Footer from '../../Copmonents/Footer/Footer'
import Navbar from '../../Copmonents/Navbar/Navbar'
import './AboutPage.css'
import about from './AboutPage.img/about.png'
function AboutPage() {

  return (
    <>
     <Navbar/>
          <div className='about'>
            <div className='container aboutContainer'>
                 <div className='aboutBox'>
                 <img className='aboutImg' src={about} alt=""  width={1150} height={500}/>
                 <h1 className='aboutTitle'>Kompaniya haqida</h1>
                 <p className='aboutText'>Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil etilgan. Hozirda kompaniyaning Toshkent shahrida 11 ta filiali mavjud. Menyu asosan klub sendvichlari, hot-doglar, gamburgerlar, pita nonlari va donarlardan iborat. Bizning ustuvor vazifalarimiz - ingredientlarning yangiligi va sifati, turli xil to'ldirishlar, arzon narxlar va mehmonlarning so'rovlariga e'tibor. Har kuni MaxWay-dan juda ko'p turli xil odamlar buyurtma berishadi. Biz esa tashrif buyuruvchilar sonini ham, filiallar sonini ham oshirishga harakat qilyapmiz. Biz tayyorlagan har bir taom bilan biz o'zimizning o'ziga xos retseptlarimiz tafsilotlarini aniqlaymiz va sizning sevimli brendingiz bo'lib qolishda davom etish uchun narx va sifatning mukammal muvozanatini qidiramiz. Agar siz to'satdan biz tomonimizdan yomon xizmat ko'rsatishga yoki tayyor ovqatning past sifatiga duch kelsangiz, bizga yozing. Biz ijobiy va salbiy fikr-mulohazalarni mamnuniyat bilan qabul qilamiz. Mehmonning shikoyati bizga o'sish uchun imkoniyat beradigan sovg'adir.</p>

                 </div>
            </div>

          </div>
       <Footer/>
    </>
  )
}

export default AboutPage
