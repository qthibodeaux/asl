import { Box, Heading, Paragraph } from 'grommet'

function BannerOne() {
  return (
    <Box
        align='center'
        justify='center'
        background={{
            color: '#CCCCCC',
            opacity:'medium'
          }}
        id='about'
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
            pad='medium'
        >
            <Heading
                size='medium'
                level='2'
                margin={{
                    vertical:'none'
                }}
                color='#006ee6'
            >
                There's a lot to love at our facility
            </Heading>
            <Box
                pad='small'
            >
                <Paragraph
                    margin={{
                        vertical: 'xsmall'
                    }}

                >
                    Our communities offer the comforts of home, without the work. Our care solutions are designed around you and the life you want here.
                </Paragraph>
            </Box>
        </Box>
        <Box>
    
  </Box>
    </Box>
  )
}

export default BannerOne