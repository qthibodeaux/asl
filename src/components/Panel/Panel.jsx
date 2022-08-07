import { Box, Carousel, Heading, Image, Paragraph, ResponsiveContext } from 'grommet'
import IMG1 from '../../assets/room1.JPG'
import IMG2 from '../../assets/room2.JPG'
import IMG3 from '../../assets/room3.JPG'
import IMG4 from '../../assets/room4.JPG'
import IMG5 from '../../assets/room5.JPG'

function Panel() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => 
        (<Box
          justify='center'
          align='center'
          background={{
            color: '#CCCCCC',
            opacity:'strong'
          }}
          border={{
            color: '#006ee6',
            side: 'bottom',
            size: 'xsmall'
        }}
        >
          <Box
            width='1000px'
            justify='center'
            align='center'
            pad={size !== 'small' && 'medium'}
          >
            <Heading
              color='#006ee6'
              margin={{
                vertical: 'none'
              }}
            >
              Gallery
            </Heading>
            <Paragraph
              margin={{
                vertical: 'xsmall'
              }}
            >
              A tour of our faciltiies
            </Paragraph>
          <Box
            height='medium'
            width='large'
            overflow='hidden'
          >
            <Carousel fill>
              <Image fit='cover' src={IMG1}/>
              <Image fit='cover' src={IMG2}/>
              <Image fit='cover' src={IMG3}/>
              <Image fit='cover' src={IMG4}/>
              <Image fit='cover' src={IMG5}/>
            </Carousel>
          </Box>
          </Box>
        </Box>)
      }
    </ResponsiveContext.Consumer>
  )
}

export default Panel