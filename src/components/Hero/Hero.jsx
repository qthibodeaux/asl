import { Box, Button, Heading, Image, ResponsiveContext, Stack, Text } from 'grommet'
import IMG1 from '../../assets/facility.jpg'

function Hero({open}) {
  const opener = () => {
    open()
  }
  return (
    <ResponsiveContext.Consumer>
      {(size) => size === 'small'
        ? (
            <Box
              id='home'
              justify='center'
              align='center'
              border={{
                color: '#006ee6',
                side: 'bottom',
                size: 'xsmall'
            }}
            >
              <Box
                margin= {{ top: '1rem'}}
                height='medium'
              >
                <Stack fill>
                  <Box fill>
                    <Image fit='cover' src={IMG1}/>
                  </Box>
                  <Box
                      fill
                      background={{
                        color: "dark-2",
                        opacity: 'strong'
                      }}
                      pad='medium'
                      justify='center'
                      
                    >
                      <Box
                        width='medium'
                        justify='center'
                      >
                        <Heading
                            margin={{
                              vertical: 'medium'
                            }}
                            color="white"
                            size='small'
                            level='2'
                          >
                            Senior Assisted Living located in Bryan, TX 
                          </Heading>
                          <Text
                            margin={{
                              bottom: 'xsmall'
                            }}
                            size='small'
                          >
                            When you step in the front door of our senior community, you will immediately notice the homelike feel and comfortable atmosphere. Our caring team members are always available to offer a helping hand and there is never a shortage of activities to take part in!

                            We offer the following senior living options: 
                          </Text>
                          <Box align="start" pad="medium">
                            <Button color='#006ee6' primary label="Contact Us" onClick={opener} />
                          </Box>
                      </Box>
                    </Box>
                </Stack>
              </Box>
            </Box>
          )
        : (
          <Box
              id='home'
              justify='center'
              align='center'
              border={{
                color: '#006ee6',
                side: 'bottom',
                size: 'xsmall'
            }}
            >
              <Box
                width='1000px'
                height='medium'
              >
                <Stack fill>
                  <Image fill fit='cover' src={IMG1} />
                  <Box
                    fill
                    background={{
                      color: "dark-2",
                      opacity: 'strong'
                    }}
                    pad='medium'
                    justify='center'
                  >
                    <Box
                      width='medium'
                    >
                      <Heading
                          margin={{
                            vertical: 'medium'
                          }}
                          color="white"
                          size='small'
                          level='2'
                        >
                          Senior Assisted Living located in Bryan, TX 
                        </Heading>
                        <Text
                          margin={{
                            bottom: 'xsmall'
                          }}
                          size='small'
                        >
                          When you step in the front door of our senior community, you will immediately notice the homelike feel and comfortable atmosphere. Our caring team members are always available to offer a helping hand and there is never a shortage of activities to take part in!

                          We offer the following senior living options: 
                        </Text>
                        <Box align="start" pad="medium">
                          <Button color='#006ee6' primary label="Contact Us" onClick={opener} />
                        </Box>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Box>
        )
      }
    </ResponsiveContext.Consumer>
  )
}

export default Hero
