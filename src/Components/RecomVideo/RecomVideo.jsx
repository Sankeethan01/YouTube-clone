/* eslint-disable react/prop-types */
import './RecomVideo.css'


import { useEffect, useState } from 'react'
import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom'

const RecomVideo = ({categoryId}) => {
   
     const [apiData,setApiData]= useState([])

     const fetchData=async ()=>{
        const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
     }

     useEffect(()=>{
     fetchData()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])

  return (
    <div className='recommended'>
        {apiData.map((item,index)=>{
             return(
                <Link to={`/Video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-videos">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <div className="vid-info">
                    <h4>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{value_converter(item.statistics.viewCount)} Views</p>
                </div>
            </Link>
             )
        })}
        
        
    </div>
  )
}

export default RecomVideo