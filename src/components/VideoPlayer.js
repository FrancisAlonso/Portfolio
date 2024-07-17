import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const VideoContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  zIndex: 1000,
  overflow: 'hidden', // Asegura que el contenido que sobrepase el contenedor se oculte
  '& video': {
    width: '100%',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    objectFit: 'contain',
  },
}));

const VideoPlayer = ({ selectedVideo }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.load();
          await videoRef.current.play();
        } catch (error) {
          console.error("Failed to play the video:", error);
        }
      };
      playVideo();
    }
  }, [selectedVideo]);

  return (
    <Box width="100%" height="450px"> {/* Ajusta la altura para que coincida con DeveloperInfo */}
      {selectedVideo && (
        <VideoContainer>
          <video ref={videoRef} autoPlay loop muted>
            <source src={selectedVideo} type="video/mp4" />
          </video>
        </VideoContainer>
      )}
    </Box>
  );
};

export default VideoPlayer;
