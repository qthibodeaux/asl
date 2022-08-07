import { Box, Heading, Image, ResponsiveContext, Text } from 'grommet'
import IMG1 from '../../assets/bryan.jpg'

function Community() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => size === 'small'
        ? (
            <Box
              direction='column'
              align='center'
              justify='center'
              pad='small'
              background='#CCCCCC'
              border={{
                color: '#006ee6',
                side: 'bottom',
                size: 'xsmall'
            }}
            >
              <Box
                pad='small'
                height='medium'
              >
                <Heading
                  margin={{
                    vertical: 'medium'
                  }}
                  level='4'
                  color='#006ee6'
                >
                  Senior Assisted Living located in Bryan, TX 
                </Heading>
                <Text weight='bold' size='small'>
                  Nearby:
                </Text>
                <Text weight='bold' size='small'>Hospitals:</Text><Text size='small'>Scott  White, Physician Centre, St. Joseph’s Hospital</Text>
                <Text weight='bold' size='small'>Pharmacies:</Text><Text size='small'>Walgreens, CVS, Kroger, H-E-B, Walmart</Text>
                <Text weight='bold' size='small'>Dining:</Text><Text size='small'>Cotton Patch Café, Lupe Tortilla, On The Border, CJ’s BBQ, Olive Garden, Fish Daddy’s, Cheddar’s, The Republic</Text>
                <Text weight='bold' size='small'>Shopping:</Text><Text size='small'>Post Oak Mall, Walmart, Kroger, H-E-B, ALDI</Text>
                <Text weight='bold' size='small'>Local destinations:</Text><Text size='small'>Bonfire Memorial, Santa’s Wonderland, Brazos Valley Farmer’s Market</Text>
              </Box>
              <Box>
                <Box
                  fill='horizontal'
                  height='small'
                  pad='small'
                >
                  <Image 
                    fit='cover'
                    src={IMG1}
                  />
                </Box>
              </Box>
            </Box>
        )
        : (
            <Box
              align='center'
              background='#CCCCCC'
              border={{
                color: '#006ee6',
                side: 'bottom',
                size: 'xsmall'
            }}
            >
              <Box
                direction='row-responsive'
                width='1000px'
              >
                <Box
                  basis='1/2'
                  pad='small'
                  height='medium'
                >
                  <Heading
                    margin={{
                      vertical: 'medium'
                    }}
                    level='4'
                    color='#006ee6'
                  >
                    Senior Assisted Living located in Bryan, TX 
                  </Heading>
                  <Text weight='bold' size='small'>
                    Nearby:
                  </Text>
                  <Text weight='bold' size='small'>Hospitals:</Text><Text size='small'>Scott  White, Physician Centre, St. Joseph’s Hospital</Text>
                  <Text weight='bold' size='small'>Pharmacies:</Text><Text size='small'>Walgreens, CVS, Kroger, H-E-B, Walmart</Text>
                  <Text weight='bold' size='small'>Dining:</Text><Text size='small'>Cotton Patch Café, Lupe Tortilla, On The Border, CJ’s BBQ, Olive Garden, Fish Daddy’s, Cheddar’s, The Republic</Text>
                  <Text weight='bold' size='small'>Shopping:</Text><Text size='small'>Post Oak Mall, Walmart, Kroger, H-E-B, ALDI</Text>
                  <Text weight='bold' size='small'>Local destinations:</Text><Text size='small'>Bonfire Memorial, Santa’s Wonderland, Brazos Valley Farmer’s Market</Text>
                </Box>
                <Box
                  basis='1/2'
                  height='medium'
                >
                  <Image 
                    fit='contain'
                    src={IMG1}
                  />
                </Box>
              </Box>
            </Box>
        )}
    </ResponsiveContext.Consumer>
  )
}

export default Community