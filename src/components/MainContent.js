import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import DeveloperInfo from './DeveloperInfo';
import Skills from './Skills';
import VideoPlayer from './VideoPlayer';

const MainContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '450px', // Ajusta la altura de los componentes
}));

const MainContent = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <MainContentContainer>
      <Box sx={{ flex: '1 1 50%', marginRight: 2 }}> {/* Ajusta el ancho de DeveloperInfo */}
        <DeveloperInfo />
      </Box>
      <Box sx={{ flex: '1 1 20%', marginRight: 2 }}> {/* Ajusta el ancho de Skills */}
        <Skills setSelectedVideo={setSelectedVideo} />
      </Box>
      <Box sx={{ flex: '1 1 30%' }}> {/* Ajusta el ancho de VideoPlayer */}
        <VideoPlayer selectedVideo={setSelectedVideo} />
      </Box>
    </MainContentContainer>
  );
};

export default MainContent;
