
import { useParams } from 'react-router-dom'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import RecomVideo from '../../Components/RecomVideo/RecomVideo'
import './Video.css'


const Video = () => {

 const {videoId,categoryId} = useParams()

  return (
    <div className='play-container'>
      
       <PlayVideo videoId={videoId} />
       <RecomVideo categoryId={categoryId} />
    </div>
  )
}

export default Video