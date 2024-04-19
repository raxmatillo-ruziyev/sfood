import { Link } from 'react-router-dom'
import './Lavash.css'
import  LavashImg from './Lavsh.img/LavashImg.jpeg'
import  lavash2 from './Lavsh.img/lavash2.jpg'
import  lavash3 from './Lavsh.img/lavash3.jpg'
import  lavash4 from './Lavsh.img/lavsh4.jpg'
import  lavash5 from './Lavsh.img/lavash5.png'
import  lavash6 from './Lavsh.img/lavsh6.png'
function Lavash() {

  return (
    <>
      <div className='lavash'>
         <div className='container lavashContainer '>
            <ul className='lavashWrapper'>
            <li className='sectionItem'>
           <img src={LavashImg} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Achchiq tajribali dengiz mahsulotlari noodle</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>2,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={LavashImg} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>x boyqushlar mavjud</h2><br />
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>3,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={LavashImg} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Qo'ziqorin sousi bilan tuzlangan makaron</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>5,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={LavashImg} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Issiq sho'rvada mol go'shti köftesi</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>3,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={lavash2} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Omlet bilan issiq qovurilgan guruch</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>5,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={lavash3} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Achchiq lahzali noodle</h2> <br />
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>3,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={lavash4} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>doimiy noodle maxsus omlet</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>5,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={lavash5} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>ismaloq bilan noodle</h2><br />
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>3,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionNextItem'>
           <img src={lavash6} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Qo'ziqorin sousi bilan tuzlangan makaron</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>3,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
       
            </ul>
            
         </div>
      </div>
    </>
  )
}

export default Lavash
