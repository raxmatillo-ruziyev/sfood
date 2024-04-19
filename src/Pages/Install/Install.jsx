import { Link } from 'react-router-dom'
import './Install.css'
import  install1 from './Lavsh.img/install1.jpg'
import  install2 from './Lavsh.img/install2.jpg'
import  install3 from './Lavsh.img/install3.jpg'
import  install4 from './Lavsh.img/install4.jpg'
import  install5 from './Lavsh.img/install5.png'
import  install6 from './Lavsh.img/install6.jpg'
import  install7 from './Lavsh.img/install7.jpg'
import  install8 from './Lavsh.img/install8.jpg'
import  install9 from './Lavsh.img/install9.jpg'
import Footer from '../../Copmonents/Footer/Footer'
import Navbar from '../../Copmonents/Navbar/Navbar'
import  headerImg from './HomePage.img/headerImg.jpeg'
import  headerImg2 from './HomePage.img/headerImg2.jpeg'
import  headerImg3 from './HomePage.img/headerImg3.jpeg'
function Install() {

  return (
    <>
    <Navbar/>



     {/* header */}
     <div className='header'>
   
   <div className='container headerContainer'>
   <img className='homePageImg' src={headerImg} alt="" width={1200} height={600} />
   <ul className='headerList'>
    <li className='headerItem'><img className='homePageImg' src={headerImg} alt="" width={290} height={250} /></li>
    <li className='headerItem'><img className='homePageImg' src={headerImg2} alt="" width={290} height={250} /></li>
    <li className='headerItem'><img className='homePageImg' src={headerImg3} alt="" width={290} height={250} /></li>
    <li className='headerItem'><img className='homePageImg' src={headerImg} alt="" width={290} height={250} /></li>
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
           <img src={install1} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Achchiq tajribali dengiz mahsulotlari noodle</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>2,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={install2} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>x boyqushlar mavjud</h2><br />
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>3,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={install3} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Qo'ziqorin sousi bilan tuzlangan makaron</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>5,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={install4} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Issiq sho'rvada mol go'shti köftesi</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>3,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={install5} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Omlet bilan issiq qovurilgan guruch</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>5,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={install6} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>Achchiq lahzali noodle</h2> <br />
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>3,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={install7} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>doimiy noodle maxsus omlet</h2>
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>5,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionItem'>
           <img src={install8} alt="" width={250} height={200} />
          <h2 className='sectionSubtitle'>ismaloq bilan noodle</h2><br />
          <p className='sectionSubtext'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
          <ul className='lavashList'>
          <h3 className='sectionNextTitle'>3,29 so'm</h3>
          <Link className='navbarSublink' to="/Kirish">Buyurtma</Link>
          </ul>
        </li>
        <li className='sectionNextItem'>
           <img src={install9} alt="" width={250} height={200} />
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
      <br />
      <Footer/>
    </>
  )
}

export default Install
