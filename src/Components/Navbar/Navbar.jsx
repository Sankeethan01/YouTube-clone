/* eslint-disable react/prop-types */

import './Navbar.css'
import menu_icon from '../../assets/menu_icon.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import upload_icon from '../../assets/upload_icon.png'
import notification_icon from '../../assets/notification_icon.png'
import profile_icon from '../../assets/profile_icon.png'
import { Link } from 'react-router-dom'



const Navbar = ({setSidebar}) => {

   return (
    <nav className='nav'>
        <div className='left-nav nav'>
            <img className='menu-icon' src={menu_icon} onClick={()=>setSidebar(prev=>prev===false?true:false)} alt="" />
            <Link to='/'><img className='logo' src={logo} alt="" /></Link>
        </div>
        <div className='middle-nav nav'>
          <div className="search-box nav">
            <form>
          <input type="text" placeholder='Search'/>
       
           <button type='submit'>
           <img src={search_icon} alt=""  />
           </button>
        
           </form>
          </div>
            
        </div>
        <div className='right-nav nav'>
            <img src={upload_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img className='user-icon' src={profile_icon} alt="" />
            
        </div>

    </nav>
  )
}

export default Navbar