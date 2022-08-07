import { Box, Button, Heading, ResponsiveContext, Text } from 'grommet'

function Schedule() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => size === 'small'
        ? (
            <Box
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
                width='1000px'
                height='medium'
              >
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
                        <Button color='#006ee6' primary label="Schedule a Tour" onClick={() => {}} />
                      </Box>
                  </Box>
                </Box>
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
                background='url(happy.jpg)'
                width='1000px'
                height='medium'
              >
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
                        <Button color='#006ee6' primary label="Schedule a Tour" onClick={() => {}} />
                      </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
        )
      }
    </ResponsiveContext.Consumer>
  )
}

export default Schedule