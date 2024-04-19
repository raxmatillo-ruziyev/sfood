import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {

  return (
    <>
   <div className='footer'>
   <div className='container footerContainer'>
    <ul className='footerList'>
     <li className='footerItem'>
            <Link className='footerToplink' to="/">SFood</Link><br /><br />
            <Link className='footerLink' to="/">uy</Link><br /><br />
            <Link className='footerLink' to="/Branch">Filiallar</Link><br /><br />
            <Link className='footerLink' to="/About">Biz haqimizda</Link><br /><br />
            <Link className='footerLink' to="/Contact">Kontaktlar</Link>
     </li>
     <li>
        <h1 className='footerTitle'>bizga qo'shiling</h1>
         <Link className='footerSublink' to='t.me/ruziyev_raxmatillo'><i class='fa fa-telegram'></i></Link>
         <Link className='footerSublink'  to='https://www.instagram.com/'><i class='fa fa-instagram'></i></Link>
         <Link className='footerSublink' to='https://www.youtube.com/'><i class='fa fa-youtube-play'></i></Link>
     </li>
     <li>
        <h1 className='footerTitle'>Raqam bo'yich buyurtma</h1>
        <Link className='footerContact' tel='+998938901105'>+998938901105</Link>

     </li>
    </ul>
    <hr className='footerHr' />
    <div className='footerBox'>
      <Link className='footerLink'>© 2020–2022, IT-TIME MChJ, rasmiy veb-sayt</Link>
      <h2 className='footerNextTitle'>Raxmatillo Ruziyev tomonidan ishlab chiqilgan</h2>
    </div>
   </div>
   </div>
    </>
  )
}

export default Footer
