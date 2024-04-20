import './BranchPage.css'
import Navbar from '../../Copmonents/Navbar/Navbar';
import Footer from '../../Copmonents/Footer/Footer';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function BranchPage() {

  return (
    <>
    <Navbar/>
       <div className='branch'>
        <div className='container branchContainer'>
             <ul className='branchList'>
                 <li className='branchItem'>
                    <div>
                   <div className='branchBox'>
                   <Link className='branchToplink' to='#'>MaxWay sehrli shahar</Link>
                   <Link className='branchLink' to='#'>Ish vaqti</Link>
                   </div>
         
                 
                   <div className='branchBox'>
                    <Link className='branchLink' to='#'>Sehrli shahar, st. Bobura, 174, Toshkent, O‘zbekiston</Link>
                    <Link className='branchLink' to='#'>10:00-03:00</Link>
              
                    </div>
                    </div>
                 </li>

               
                 <li className='branchItem'>
                    <div>
                   <div className='branchBox'>
                   <Link className='branchToplink' to='#'>MaxWay Toshkent City</Link>
                   <Link className='branchLink' to='#'> Ish vaqti</Link>
                   </div>
                   <div className='branchBox'>
                    <Link className='branchLink' to='#'>Sehrli shahar, st. Bobura, 174, Toshkent, O‘zbekiston</Link>
                    <Link className='branchLink' to='#'>10:00-03:00</Link>
              
                 </div>
                 </div>
            

                 </li>
                 <li className='branchItem'>
                    <div>
                   <div className='branchBox'>
                   <Link className='branchToplink' to='#'>MaxWay Chilonzor shahari</Link>
                   <Link className='branchLink' to='#'>Ish vaqti</Link>
                   </div>
                  
                   <div className='branchBox'>
                    <Link  className='branchLink' to='#'>Sehrli shahar, st. Bobura, 174, Toshkent, O‘zbekiston</Link>
                    <Link className='branchLink' to='#'>10:00-03:00</Link>
                 </div>
            
            
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
