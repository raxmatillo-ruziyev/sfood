import { Link } from 'react-router-dom'
import Navbar from '../../Copmonents/Navbar/Navbar'
import Lavash from '../Lavash/Lavsh'
import './HomePage.css'
import  headerImg from './HomePage.img/headerImg.jpeg'
import  headerImg2 from './HomePage.img/headerImg2.jpeg'
import  headerImg3 from './HomePage.img/headerImg3.jpeg'
import Footer from '../../Copmonents/Footer/Footer'
import Desert from '../Desert/Desert';




function HomePage() {   

  return (
    <>
     <Navbar/>
     <div className='header'>
        
   
        <div className='container headerContainer'>
        <img className='homePageImg' src={headerImg} alt=""  />
        <ul className='headerList'>
         <li className='headerItem'><img className='homeImg' src={headerImg} alt="" /></li>
         <li className='headerItem'><img className='homeImg' src={headerImg2} alt="" /></li>
         <li className='headerItem'><img className='homeImg' src={headerImg3} alt="" /></li>
         <li className='headerItem'><img className='homeImg' src={headerImg} alt="" /></li>
        </ul>
     </div>
     </div>
        <div className='links'>
    
            <Link className='linksLink' to="/">Lavash</Link>
            <Link className='linksLink' to="/Desert">Desert</Link>
            <Link className='linksLink' to="/Install">Set</Link>
            <Link className='linksLink' to="/Haggi">Xaggi</Link>
            <Link className='linksLink' to="/Burger">Burger</Link>
            <Link className='linksLink' to="/Pizza">Pizza</Link>
            <Link className='linksLink' to="/Sandwich">Sendvich</Link>
            <Link className='linksLink' to="/">Donar</Link>
            <Link className='linksLink' to="/Burger">Xot-Dog</Link>
            <Link className='linksLink' to="/Pizza">Free</Link>
            <Link className='linksLink' to="/">Drink</Link>
            <Link className='linksLink' to="/Haggi">Salad</Link>
            <Link className='linksLink' to="/Burger">Bread</Link>
            <Link className='linksLink' to="/Pizza">Sauce</Link>     
        </div>
      <Lavash/>
      <br />
      <Footer/>
    </>
  )
}

export default HomePage
