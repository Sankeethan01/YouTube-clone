/* eslint-disable react/prop-types */

import './Sidebar.css'

import beast_icon from '../../assets/beast_icon.jpg'

import food_icon from '../../assets/food_icon.png'
import games_icon from '../../assets/games_icon.png'
import music_icon from '../../assets/music_icon.png'

import news_icon from '../../assets/news_icon.png'

import sony_icon from '../../assets/sony_icon.jpg'
import sports_icon from '../../assets/sports_icon.png'
import techboss_icon from '../../assets/techboss_icon.jpg'
import technology_icon from '../../assets/technology_icon.png'
import thinkmusic_icon from '../../assets/thinkmusic_icon.jpg'

import vehicle_icon from '../../assets/vehicle_icon.png'
import home_icon from '../../assets/home_icon.png'

import entertaintment from '../../assets/entertaintment_icon.png'
import movie from '../../assets/movies.png'
import blogs from '../../assets/blogs.png'



const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)} >
          <img src={home_icon} alt="" /><p>Home</p>
        </div>
        <div className={`side-link ${category===15?"active":""}`} onClick={()=>setCategory(15)} >
          <img src={food_icon} alt="" /><p>Shorts</p>
        </div>
        <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)} >
          <img src={music_icon} alt="" /><p>Music</p>
        </div>
        <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)} >
          <img src={entertaintment} alt="" /><p>Entertaintment</p>
        </div>
        <div className={`side-link ${category===1?"active":""}`} onClick={()=>setCategory(1)} >
          <img src={movie} alt="" /><p>Movies</p>
        </div>
        <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)} >
          <img src={sports_icon} alt="" /><p>Sports</p>
        </div>
        <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)} >
          <img src={games_icon} alt="" /><p>Gaming</p>
        </div>
        <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)} >
          <img src={technology_icon} alt="" /><p>Technology</p>
        </div>
        <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)} >
          <img src={news_icon} alt="" /><p>News</p>
        </div>
       
        <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)} >
          <img src={blogs} alt="" /><p>Blogs</p>
        </div>
       
        <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)} >
          <img src={vehicle_icon} alt="" /><p>Automobiles</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className={`side-link ${category===0?"active":""}`}>
          <img src={sony_icon} alt="" /><p>Sony Music South</p>
        </div>
        <div className={`side-link ${category===0?"active":""}`}>
          <img src={beast_icon} alt="" /><p>MrBeast</p>
        </div>
        <div className={`side-link ${category===0?"active":""}`}>
          <img src={thinkmusic_icon} alt="" /><p>Think Music India</p>
        </div>
        <div className={`side-link ${category===0?"active":""}`}>
          <img src={techboss_icon} alt="" /><p>Tech Boss</p>
        </div>
       
      </div>
    </div>
  )
}

export default Sidebar