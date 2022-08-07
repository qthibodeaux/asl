import React from 'react'
import { Anchor, Box, Footer, Heading, ResponsiveContext, Text } from 'grommet'

function Bottom() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => size === 'small'
        ? (
            
              <Footer
                background='#999999'
                pad={{
                  vertical: 'large'
                }}
                align='center'
                justify='center'
                border={{
                  color: '#006ee6',
                  side: 'top',
                  size: 'medium'
              }}
              >
                <Box
                  gap='small'
                  justify='between'
                >
                  <Heading
                      margin='none'
                      size='small'
                      level='3'
                      color='white'
                  >
                      James and Tina's Private Care Services
                  </Heading>
                  <Box
                      direction='column'
                      align='start'
                      pad='xsmall'
                      gap='small'
                  >
                      {
                          items.map(({ref, label}, key) => {
                              return (
                                  <Anchor 
                                      color="white" 
                                      size="small"
                                      key={key} 
                                      href={ref} 
                                      label={label}/>
                              )
                          })
                      }
                  </Box>
                  <Box>
                    <Text color='white' size='small'>
                      Manager: Tina Owens
                    </Text>
                    <Text color='white' size='small'>
                      703 Dean St., Bryan, Tx 77803
                    </Text>
                    <Text color='white' size='small'>
                      Cell: (979) 255-9016
                    </Text>
                    <Text color='white' size='small'>
                      Office: (979) 324-5981
                    </Text>
                    <Text color='white' size='small'>
                      Email: tinagreen402@gmail.com
                    </Text>
                  </Box>
                </Box>
              </Footer> 
          )
        : (
            <Box 
              background='#999999'
              align='center'
              justify='center'
              border={{
                color: '#006ee6',
                side: 'top',
                size: 'medium'
            }}
            >
              <Footer
                pad={{
                  vertical: 'medium'
                }}
                width='1000px'
                align='center'
              >
                <Heading
                    margin='none'
                    size='small'
                    level='3'
                    color='white'
                >
                    James and Tina's Private Care Services
                </Heading>
                <Box>
                  <Text color='white' size='small'>
                    Manager: Tina Owens
                  </Text>
                  <Text color='white' size='small'>
                    703 Dean St., Bryan, Tx 77803
                  </Text>
                  <Text color='white' size='small'>
                    Cell: (979) 255-9016
                  </Text>
                  <Text color='white' size='small'>
                    Office: (979) 324-5981
                  </Text>
                  <Text color='white' size='small'>
                    Email: tinagreen402@gmail.com
                  </Text>
                </Box>
              </Footer> 
            </Box>
        )
      }
    </ResponsiveContext.Consumer>
  )
}

const items = [
  {
      ref: '#',
      label: "About"
  },
  {
      ref: '#',
      label: "Amenities"
  },
  {
      ref: '#',
      label: "Contact"
  }
]

export default Bottom