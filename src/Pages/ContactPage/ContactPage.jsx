import { Link } from 'react-router-dom'
import Footer from '../../Copmonents/Footer/Footer'
import Navbar from '../../Copmonents/Navbar/Navbar'
import './ContactPage.css'
function ContactPage() {

  return (
    <>
     <Navbar/>
         <div className='contact'>
             <div className='container contactContainer'>
                  <ul className='contactList'>
                     <li className='contactItem'>
                      <h1 className='contactTitle'>Aloqa markazi raqamlari</h1>
                      <h2 className='contactNextTitle'>Kuniga 24 soat, haftada etti kun</h2>
                      <ul>
                        <li className='contactWrap'><h2  className='contactNextTitle'>Toshkent</h2>
                        <Link className='contactLink' to='tel:+998938901105'>+998938901105</Link>
                        </li>
                        <hr />
                        <li className='contactWrap'><h2  className='contactNextTitle'>Namangan</h2>
                        <Link className='contactLink' to='tel:+998938901105'>+998330800229</Link>
                        </li>
                        <hr />
                        <li className='contactWrap'><h2  className='contactNextTitle'>Olmaliq</h2>
                        <Link className='contactLink' to='tel:+998938901105'>+998330803611</Link>
                        </li>
                        <hr />
                      </ul>
                     </li>
                     <li className='contactItem'>
                      <h1 className='contactTitle'>Mijozlarni qo'llab-quvvatlash bo'limi</h1>
                      <ul>
                        <li className='contactWrap'><h2  className='contactNextTitle'>Elektron pochta</h2>
                        <Link className='contactLink' to='tel:+998938901105'>raxmatillo248@gmail.com</Link>
                        </li>
                        <hr />
                        <li className='contactWrap'><h2  className='contactNextTitle'>aloqa telefon raqami</h2>
                        <Link className='contactLink' to='tel:+998938901105'>+998330800229</Link>
                        </li>
                        <hr />
                      </ul>
                     </li>
                     <li className='contactItem'>
                      <h1 className='contactTitle'>Mualliflik huquqi egalari</h1>
                      <h2 className='contactNextTitle'>Savdo belgilari, logotiplar va boshqa materiallardan noto'g'ri foydalanish bilan bog'liq bo'lgan savollar uchun biz bilan elektron pochta orqali bog'laning va tasdiqlovchi hujjatlar ilova qilinadi.</h2>
                      <ul>
                        <li className='contactWrap'><h2  className='contactNextTitle'>Elektron pochta</h2>
                        <Link className='contactLink' to='tel:+998938901105'>raxmatillo248@gmail.com</Link>
                        </li>
                      </ul>
                     </li>
                  </ul>
             </div>
         </div>
       <Footer/>
    </>
  )
}

export default ContactPage
