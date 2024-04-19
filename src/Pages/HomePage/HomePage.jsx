import { Link } from 'react-router-dom'
import Navbar from '../../Copmonents/Navbar/Navbar'
import Lavash from '../Lavash/Lavsh'
import './HomePage.css'
import  headerImg from './HomePage.img/headerImg.jpeg'
import  headerImg2 from './HomePage.img/headerImg2.jpeg'
import  headerImg3 from './HomePage.img/headerImg3.jpeg'
import Footer from '../../Copmonents/Footer/Footer'


function HomePage() {   

  return (
    <>
     <Navbar/>
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
      <Lavash/>
      <br />
      <Footer/>
    </>
  )
}

export default HomePage
