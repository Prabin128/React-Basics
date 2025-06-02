import { useState } from 'react'
import './VideoPlayer.css'
import videoSource from './assets/random-video.mp4'
import { useRef } from 'react'

function VideoPlayer() {
  
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null);

  const handleToogle = ()=> {
    if(!videoRef.current) return;

    if (isPlaying){
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }

  const videoEnded = () => {
    setIsPlaying(false);
  }

  return (
    <div className='video-player-container'>
      <video className='video-element' ref={videoRef} onEnded={videoEnded}>
        <source src= {videoSource}/>
      </video>
      <div>
        <button className='play-button' onClick={handleToogle}>
          {
            isPlaying ? '⏸ Pause' : '▶️ Play'
          }
      </button>
      </div>
    </div>
  )
}

export default VideoPlayer