import React from 'react'
import { Box, Button, Heading, ResponsiveContext, Text } from 'grommet'

function Hero() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          id='home'
          margin={size === 'small' && { top: '1rem'}}
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
            background='url(facility.jpg)'
            height='medium'
          >
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
                    <Button color='#006ee6' primary label="Contact Us" onClick={() => {}} />
                  </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Hero
