import { useState } from 'react'
import { Box, Button, Heading, Image, Layer, Paragraph, ResponsiveContext, Text } from 'grommet'
import IMG1 from '../../assets/room1.JPG'
import IMG2 from '../../assets/room2.JPG'
import IMG3 from '../../assets/room3.JPG'
import IMG4 from '../../assets/room4.JPG'
import IMG5 from '../../assets/room5.JPG'
import IMG6 from '../../assets/room6.JPG'
import IMG7 from '../../assets/room7.JPG'
import IMG8 from '../../assets/centralArea.JPG'
import IMG9 from '../../assets/frontArea.JPG'
import IMG10 from '../../assets/kitchen.JPG'
import IMG11 from '../../assets/laundryRoom.JPG'
import IMG12 from '../../assets/shower.JPG'
import IMG13 from '../../assets/showerBath.JPG'
import IMG14 from '../../assets/tubAndBath.JPG'

function Panel() {
  const items = [IMG1,IMG2,IMG3,IMG4,IMG5,IMG6,IMG7,IMG8,IMG9,IMG10,IMG11,IMG12,IMG13,IMG14]
  const items1 = [IMG1,IMG2,IMG3,IMG4,IMG5,IMG6]
  const [show, setShow] = useState(false)
  const [viewMore, setViewMore] = useState(false)
  const [num, setNum] = useState()

  const display = (num) => {
    setNum(num)
    setShow(true)
  }

  return (
    <ResponsiveContext.Consumer>
      {(size) => size === 'small'
        ? (<Box
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
            justify='center'
            align='center'
            pad='medium'
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
            <Text size='small' margin={{ bottom: 'small'}}>Click to enlarge</Text>
            <Box>
              {viewMore === false 
                ? (
                  <Box
                    gap='small'
                  >
                    <Box
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '.5rem'
                      }}
                      >
                      {items1.map((item, key) => {
                        return (
                          <Box
                            key={key}
                            width='xsmall'
                            height='xsmall'
                            onClick={() => display(key)}
                          >
                            <Image fit='cover' src={item}/>
                          </Box>
                        )
                      })}
                      </Box>
                      <Box>
                        <Button label='View More' onClick={() => setViewMore(true)}/>
                      </Box>
                  </Box>
                )
                : (
                  <Box
                    gap='small'
                  >
                    <Box
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '.5rem'
                      }}
                    >
                      {items.map((item, key) => {
                        return (
                          <Box
                            key={key}
                            width='xsmall'
                            height='xsmall'
                            onClick={() => display(key)}
                          >
                            <Image fit='cover' src={item}/>
                          </Box>
                        )
                      })}
                    </Box>
                    <Box>
                        <Button label='View Less' onClick={() => setViewMore(false)}/>
                      </Box>
                  </Box>
                )
              }
            </Box>
          </Box>
          {show && (
              <Layer
                onEsc={() => setShow(false)}
              >
                <Box
                  align='center'
                  justify='center'
                  gap='small'
                >
                  <Box
                    align='center'
                    justify='center'
                    direction='row'
                    pad='small'
                  >
                    <Button
                      primary
                      color='#006ee6'
                      label='close'
                      onClick={() => setShow(false)} 
                      margin={{ top: 'xsmall'}}
                    />
                  </Box>
                  <Box
                    width='medium'
                    height='large'
                  >
                    <Image fit='cover' src={items[num]}/>
                  </Box>
                </Box>
              </Layer>
            )}
        </Box>)
        : (<Box
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
            pad='small'
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
            <Text size='small' margin={{ bottom: 'small'}}>Click to enlarge</Text>
            <Box
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2.5rem'
              }}
            >
              {items.map((item, key) => {
                return (
                  <Box
                    key={key}
                    width='small'
                    height='small'
                    onClick={() => display(key)}
                  >
                    <Image fit='cover' src={item}/>
                  </Box>
                )
              })}
            </Box>
            {show && (
              <Layer
                onEsc={() => setShow(false)}
              >
                <Box
                  gap='small'
                >
                  <Box
                    align='center'
                    justify='center'
                    direction='row'
                    pad='small'
                  >
                    <Button
                      primary
                      color='#006ee6'
                      label='close'
                      onClick={() => setShow(false)} 
                      margin={{ top: 'xsmall'}}
                    />
                  </Box>
                  <Box
                    width='medium'
                    height='large'
                  >
                    <Image fit='cover' src={items[num]}/>
                  </Box>
                </Box>
              </Layer>
            )}
          </Box>
        </Box>)
      }
    </ResponsiveContext.Consumer>
  )
}

export default Panel