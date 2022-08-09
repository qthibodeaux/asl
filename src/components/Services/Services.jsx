import { Box, Heading, Text, ResponsiveContext } from 'grommet'
import { FaBed, FaCarSide, FaBath } from 'react-icons/fa'

function Services() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => size === 'small'
        ? (
            <Box
              border={{
                color: '#006ee6',
                side: 'bottom',
                size: 'xsmall'
            }}
            pad={{ bottom: 'small'}}
            >
              <Box
                align='center'
              >
                <Box>
                  <Heading color='#006ee6'>
                    Our Facilities
                  </Heading>
                </Box>
                <Box
                  direction='row-responsive'
                  align='center'
                  justify='center'
                  gap='small'
                  pad='medium'
                >
                  <Box
                    width='large'
                    height='xsmall'
                    background='#CCCCCC'
                    align='center'
                    justify='start'
                    pad={{
                      left: '3.5rem'
                    }}
                    gap='medium'
                    style={{ borderRadius: '2rem'}}
                    direction='row'
                    border={{
                      color: 'blue',
                      side: 'top',
                      size: 'small'
                    }}
                  >
                    <FaBed 
                      color='#006ee6'
                      size='3rem'
                    />
                    <Box>
                      <Text>Five Bedrooms</Text>
                      <Text>Double beds in each room</Text>
                    </Box>
                  </Box>
                  <Box
                    width='large'
                    height='xsmall'
                    background='#CCCCCC'
                    align='center'
                    justify='start'
                    pad={{
                      left: '3.5rem'
                    }}
                    gap='medium'
                    style={{ borderRadius: '2rem'}}
                    direction='row'
                    border={{
                      color: 'blue',
                      side: 'top',
                      size: 'small'
                    }}
                  >
                    <FaBath
                      color='#006ee6' 
                      size='3rem'
                    />
                    <Text>Three bathrooms</Text>

                  </Box>
                  <Box
                    width='large'
                    height='xsmall'
                    background='#CCCCCC'
                    align='center'
                    justify='start'
                    pad={{
                      left: '3.5rem'
                    }}
                    gap='medium'
                    style={{ borderRadius: '2rem'}}
                    direction='row'
                    border={{
                      color: 'blue',
                      side: 'top',
                      size: 'small'
                    }}
                  >
                    <FaCarSide
                      color='#006ee6' 
                      size='3rem'
                    />
                    <Text>Transport Van</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
        )
        : (
            <Box
              align='center'
              border={{
                color: '#006ee6',
                side: 'bottom',
                size: 'xsmall'
            }}
            >
              <Box
                width='1000px'
                pad='large'
              >
                <Box align='center'>
                  <Heading
                    color='#006ee6'
                    margin='small'
                  >
                    Our Facilities
                  </Heading>
                </Box>
                <Box
                  direction='row-responsive'
                  align='center'
                  justify='center'
                  gap='large'
                >
                  <Box
                    width='small'
                    height='small'
                    background='#CCCCCC'
                    pad='medium'
                    gap='small'
                    style={{ borderRadius: '2rem'}}
                    border={{
                      color: '#006ee6',
                      side: 'top',
                      size: 'medium'
                    }}
                  >
                    <FaBed 
                      color='#006ee6' 
                      style={{
                        marginTop: '1rem'
                      }}
                    />
                    <Text>Five Bedrooms</Text>
                    <Text>Double beds in each room</Text>
                  </Box>
                  <Box
                    width='small'
                    height='small'
                    background='#CCCCCC'
                    pad='medium'
                    gap='small'
                    style={{ borderRadius: '2rem'}}
                    border={{
                      color: '#006ee6',
                      side: 'top',
                      size: 'medium'
                    }}
                  >
                    <FaBath
                      color='#006ee6' 
                      style={{
                        marginTop: '1rem'
                      }}
                    />
                    <Text>Three bathrooms</Text>

                  </Box>
                  <Box
                    width='small'
                    height='small'
                    background='#CCCCCC'
                    pad='medium'
                    gap='small'
                    style={{ borderRadius: '2rem'}}
                    border={{
                      color: '#006ee6',
                      side: 'top',
                      size: 'medium'
                    }}
                  >
                    <FaCarSide
                      color='#006ee6' 
                      style={{
                        marginTop: '1rem'
                      }}
                    />
                    <Text>Transport Van</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
        )
      }
    </ResponsiveContext.Consumer>
  )
}

export default Services