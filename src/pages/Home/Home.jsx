/* eslint-disable react/prop-types */


import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import VideoField from '../../Components/VideoField/VideoField'
import { useState } from 'react'




const Home = ({sidebar}) => {

  const [category,setCategory]=useState(0)

  return (
    <>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
    <div className={`container ${sidebar?"":'large-container'}`}>
      <VideoField category={category} />
    </div>
    </>
  )
}


export default Home