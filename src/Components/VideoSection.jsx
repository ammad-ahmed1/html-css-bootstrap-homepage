import React from 'react'
import { useRef, useEffect } from 'react';
import './VideoSectionStyle.css'
const VideoSection = () => {
    const vidRef=useRef();
    useEffect(() => { vidRef.current.play(); },[]);
  return (
    <div className='video-section'>
        {/* <video loop muted autoPlay controls = '' id="myVideo">
            <source src="https://cdn.shopify.com/s/files/1/0256/4594/0810/files/video.mp4?v=1614659458" type="video/mp4" />
        </video> */}
        <div className=''>
            <div className='video-section-vid parent-div d-flex align-items-center justify-content-center'>
            <video
              src="https://cdn.shopify.com/s/files/1/0256/4594/0810/files/video.mp4?v=1614659458"
              ref={vidRef}
              muted
              autoPlay
              loop
              id="myVideo"
          />
            <div className='row video-section-caption child-div align-items-center justify-content-center'>
                <div className='text-align-center'>
                    <h1 className='video-section-heading'>New arrivals</h1>
                </div>
                <div className='self-align-center'>
                    <h1 className='video-section-big-heading'>Autumn is Coming</h1>
                </div>
                <div className='video-section-medium-text'>
                    The 11 Biggest Autumn/Winter 2021 Trends
                </div>
                <div className=''>
                    ___________

                </div>
                <div className='video-section-name-text'>
                    BY VINOVATHEME
                </div>
                <div className='video-section-name-text'>
                    11 NOVEMBER 2021
                </div>
                {/* <div className="">
                    <button className='section-three-button'>
                        <span>Hover me!</span>
                    </button>
                </div> */}
            </div>
        </div>
    </div>
</div>
  )
}

export default VideoSection