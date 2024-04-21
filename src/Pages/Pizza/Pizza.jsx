import { Link } from 'react-router-dom'
import './Pizza.css'
import  pizza1 from './Lavsh.img/pizza1.jpg'
import  pizza2 from './Lavsh.img/pizza2.jpg'
import  pizza3 from './Lavsh.img/pizza3.jpg'
import  pizza4 from './Lavsh.img/pizza4.jpg'
import  lavash3 from './Lavsh.img/lavash3.jpg'
import  lavash4 from './Lavsh.img/lavsh4.jpg'
import  lavash5 from './Lavsh.img/lavash5.png'
import  lavash6 from './Lavsh.img/lavsh6.png'
import Navbar from '../../Copmonents/Navbar/Navbar'
import Footer from '../../Copmonents/Footer/Footer'
import  headerImg from './HomePage.img/headerImg.jpeg'
import  headerImg2 from './HomePage.img/headerImg2.jpeg'
import  headerImg3 from './HomePage.img/headerImg3.jpeg'
function Pizza() {

  return (
    <>
    <Navbar/>



     {/* header */}
     <div className='header'>
   
   <div className='container headerContainer'>
   <img className='homePageImg' src={headerImg} alt="" width={1200} height={600} />
   <ul className='headerList'>
    {/* <li className='headerItem'><img className='homePageImg' src={headerImg} alt="" width={290} height={250} /></li>
    <li className='headerItem'><img className='homePageImg' src={headerImg2} alt="" width={290} height={250} /></li>
    <li className='headerItem'><img className='homePageImg' src={headerImg3} alt="" width={290} height={250} /></li>
    <li className='headerItem'><img className='homePageImg' src={headerImg} alt="" width={290} height={250} /></li> */}
   </ul>
</div>
</div>
   <div className='links'>

       <Link className='linksLink' to="/">Lavash</Link>
       <Link className='linksLink' to="/Desert">Cho'l</Link>
       <Link className='linksLink' to="/Install">Oʻrnatish</Link>
       <Link className='linksLink' to="/Haggi">Xaggi</Link>
       <Link className='linksLink' to="/Burger">Burger</Link>
       <Link className='linksLink' to="/Pizza">Pizza</Link>
       <Link className='linksLink' to="/Sandwich">Sendvich</Link>
       <Link className='linksLink' to="/">Donar</Link>
       <Link className='linksLink' to="/Burger">Xot-Dog</Link>
       <Link className='linksLink' to="/Pizza">Ozod</Link>
       <Link className='linksLink' to="/">Ichish</Link>
       <Link className='linksLink' to="/Haggi">Salat</Link>
       <Link className='linksLink' to="/Burger">Non</Link>
       <Link className='linksLink' to="/Pizza">Sos</Link>     
   </div>
{/* header */}
      <div className='lavash'>
         <div className='container lavashContainer '>
            <ul className='lavashWrapper'>
            <li className='sectionItem'>
           <img src={pizza1} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Achchiq tajribali dengiz mahsulotlari noodle</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>2,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={pizza2} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>x boyqushlar mavjud</h2><br />
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>3,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={pizza3} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Qo'ziqorin sousi bilan tuzlangan makaron</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>5,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={pizza3} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Issiq sho'rvada mol go'shti köftesi</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>3,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={pizza4} alt="" width={250} height={200} />
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
      <Footer/>
    </>
  )
}

export default Pizza
