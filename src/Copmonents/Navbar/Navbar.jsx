import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

  return (
    <>
  <div className='navbar'>
    <div className='container  navbarContainer'>
       <ul className='navbarList'>
           <li className='navbarTopItem'> <Link className='navbarToplink' to="/"> SFood</Link></li>
           <li className='navbarNextItem'>
            <Link className='navbarLink' to="/">uy</Link>
            <Link className='navbarLink' to="/Branch">Filiallar</Link>
            <Link className='navbarLink' to="/About">Biz haqimizda</Link>
            <Link className='navbarLink' to="/contact">Kontaktlar</Link>
           </li>
           <li className='navbarItem'>
              <Link className='navbarIconlink' to="#"><i id='navbarIcon'  class="fa fa-shopping-cart"></i></Link>
              <Link className='navbarSublink' to="/contact">Kirish uchun</Link>
           </li>
           <Link className='hamburger'><i id='navbarIcon'  class="fa fa-navicon"></i> </Link>
       </ul>
     </div>
  </div>
    </>
  )
}

export default Navbar
