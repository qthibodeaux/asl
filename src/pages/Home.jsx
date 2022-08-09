import { useState } from 'react'
import { Box, Layer } from 'grommet';
import { Amenities, BannerOne, Community, FormSet, Hero, Panel, Schedule, Services } from '../components';

function Home() {
  const [form, setForm] = useState(false)
  const open = () => {
    setForm(true)
  }
  const close = () => {
    setForm(false)
  }

  return (
   <Box>
      <Hero open={open}/>
      <BannerOne />
      <Services />
      <Panel />
      <Amenities />
      <Community />
      <Schedule open={open}/>
      {form && (
        <Layer
          modal
          onEsc={() => setForm(false)}
          onClickOutside={() => setForm(false)}
          position='right'
          full='vertical'
        >
          <FormSet close={close} />
        </Layer>
      )}
    </Box>
  )
}

export default Home