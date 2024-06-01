/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import './VideoField.css'

import { Link } from 'react-router-dom'
import { API_KEY ,value_converter} from '../../data'
import { useEffect, useState } from 'react'
import moment from 'moment'

const VodeoField = ({category}) => {

   const [data,setData]=useState([])
  

   const fetchData = async ()=>{
      const videoList_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
      await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
   }

  
   
   useEffect(()=>{
        fetchData();
   },[category])



  return (
    <div className="feed">
      
    {data.map((item,index)=>{
      return(
         <Link to={`Video/${item.snippet.categoryId}/${item.id}`}  key={index} className='card'>
         <img src={item.snippet.thumbnails.medium.url} alt="" />
         <div className="info">
         
          <div className='des'>
          <h2>{item.snippet.title}</h2>
         <h3>{item.snippet.channelTitle}</h3>
         <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </div>
         
         </div>
         
      </Link>   

      )
    })}

    
    
    </div>
    
  )
}

export default VodeoField