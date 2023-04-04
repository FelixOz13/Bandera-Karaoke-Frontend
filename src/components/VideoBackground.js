import videoBg from './bgimages/SPACIALVID.mp4'
import'./Background.css'

const VideoBackground = () => {
  return (
    <div className='videoBg'>
      <video
        className="BgVideo"
        src={videoBg}
        autoPlay
        loop
        muted
      />
    </div>
  )
}

export default VideoBackground