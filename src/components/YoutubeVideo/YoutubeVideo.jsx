import "./YoutubeVideo.css";
import React, { useState } from 'react';
import { FaPlayCircle } from "react-icons/fa";
import videoThumbnail from '../../assets/Images/video1.png';

export default function YoutubeVideo() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="youtubeVideo" style={{
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      borderRadius: '24px',
      overflow: 'hidden',
    }}>
     
      <iframe
        width="100%"
        height="350px"
        src="https://www.youtube.com/embed/l-aV3qt6dKw?autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {!isVideoPlaying && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={videoThumbnail}      
            alt="Video Thumbnail"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}
            onClick={handlePlayVideo}
          >
            <FaPlayCircle size={50} color="white" />
          </div>
        </div>
      )}
    </div>
  );
}
