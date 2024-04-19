import './BranchPage.css'
import Navbar from '../../Copmonents/Navbar/Navbar';
import Footer from '../../Copmonents/Footer/Footer';
import { Link } from 'react-router-dom';

function BranchPage() {

  return (
    <>
    <Navbar/>
       <div className='branch'>
        <div className='container branchContainer'>
             <ul className='branchList'>
                 <li className='branchItem'>
                   <div>
                   <Link className='branchToplink' to='#'>MaxWay sehrli shahar</Link><br />
                    <Link className='branchLink' to='#'>Sehrli shahar, st. Bobura, 174, Toshkent, O‘zbekiston</Link>
                   </div>
                 <div>
                 <Link className='branchLink' to='#'>Ish vaqti</Link><br /><br />
                    <Link className='branchLink' to='#'>10:00-03:00</Link>
                 </div>
            
            

                 </li>
                 <li className='branchItem'>
                   <div>
                   <Link className='branchToplink' to='#'>MaxWay Toshkent City</Link><br />
                    <Link className='branchLink' to='#'>Sehrli shahar, st. Bobura, 174, Toshkent, O‘zbekiston</Link>
                   </div>
                 <div>
                 <Link className='branchLink' to='#'>Ish vaqti</Link><br /><br />
                    <Link className='branchLink' to='#'>10:00-03:00</Link>
                 </div>
            
            

                 </li>
                 <li className='branchItem'>
                   <div>
                   <Link className='branchToplink' to='#'>MaxWay Chilonzor shahari</Link><br />
                    <Link className='branchLink' to='#'>Sehrli shahar, st. Bobura, 174, Toshkent, O‘zbekiston</Link>
                   </div>
                 <div>
                 <Link className='branchLink' to='#'>Ish vaqti</Link><br /><br />
                    <Link className='branchLink' to='#'>10:00-03:00</Link>
                 </div>
            
            

                 </li>
             </ul>
        </div>

       </div>
    <Footer/>
    </>
  )
}

export default BranchPage
