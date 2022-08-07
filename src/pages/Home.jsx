import React from 'react'
import { Box } from 'grommet';
import { Amenities, BannerOne, Community, Hero, Panel, Schedule, Services } from '../components';

function Home() {
  return (
    <Box>
        <Hero />
        <BannerOne />
        <Services />
        <Panel />
        <Amenities />
        <Community />
        <Schedule />
    </Box>
  )
}

export default Home