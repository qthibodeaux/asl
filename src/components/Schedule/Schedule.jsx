import { Box, Button, Heading, Image, ResponsiveContext, Stack, Text } from 'grommet'
import IMG1 from '../../assets/happy.jpg'

function Schedule({open}) {
  const opener = () => {
    open()
  }
  return (
    <ResponsiveContext.Consumer>
      {(size) => size === 'small'
        ? (
            <Box
              id='contact'
              align='center'
              justify='center'
              pad={{
                top: 'medium'
              }}
              border={{
                color: '#006ee6',
                side: 'bottom',
                size: 'xsmall'
            }}
            >
              <Box
                background='url(happy.jpg)'
                height='small'
                fill
              >
                <Stack>
                  <Box height='small'>
                    <Image fill='vertical' fit='cover' src={IMG1}/>
                  </Box>
                  <Box
                    fill
                    background={{
                      color: 'dark-2',
                      opacity:'medium'
                    }}
                    pad='medium'
                    align='start'
                    justify='center'
                  >
                    <Box
                      width='medium'
                      background={{
                        color: 'light-2',
                        opacity:'strong'
                      }}
                      pad='medium'
                    >
                      <Heading 
                        margin='none'
                      >
                        Contact Us
                      </Heading>
                      <Text
                          margin={{
                            bottom: 'xsmall'
                          }}
                          size='small'
                        >
                          There’s no better way to learn about a senior living community than to visit.
                        </Text>
                        <Box align="start">
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
              align='center'
              justify='center'
              pad={{
                vertical: 'medium'
              }}
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
                <Stack anchor='left'>
                  <Box width='1000px' height='medium'>
                    <Image fill='vertical' fit='cover' src={IMG1}/>
                  </Box>
                  <Box
                    pad='medium'
                    align='start'
                    justify='center'
                  >
                    <Box
                      width='medium'
                      background={{
                        color: 'light-2',
                        opacity:'strong'
                      }}
                      pad='medium'
                    >
                      <Heading 
                        margin='none'
                      >
                        Schedule A Tour
                      </Heading>
                      <Text
                          margin={{
                            bottom: 'xsmall'
                          }}
                          size='small'
                        >
                          There’s no better way to learn about a senior living community than to visit.
                        </Text>
                        <Box align="start">
                          <Button color='#006ee6' primary label="Schedule a Tour" onClick={opener} />
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

export default Schedule