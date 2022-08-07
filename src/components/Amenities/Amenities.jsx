import { Box, Heading, Text } from 'grommet'
import { AiFillCheckCircle } from 'react-icons/ai'

function Amenities() {
  return (
    <Box
        align='center'
        id='amenities'
        border={{
            color: '#006ee6',
            side: 'bottom',
            size: 'xsmall'
        }}
    >
        <Box
            align='center'
            width='1000px'
            pad='small'
            gap='small'
            
        >
            <Heading
                margin='none'
                color='#006ee6'
            >
                Amenities
            </Heading>
            <Box direction='row-responsive'>
                <Box
                    pad='small'
                    gap='small'
                >
                    <Box direction='row' gap='small'>
                        <AiFillCheckCircle color='#006ee6' style={{ marginTop: '3px' }}/>
                        <Text>Three hot meals a day plus a snack</Text>
                    </Box>
                    <Box direction='row' gap='small'>
                        <AiFillCheckCircle color='#006ee6' style={{ marginTop: '3px' }}/>
                        <Text>Church and Bible study</Text>
                    </Box>
                    <Box direction='row' gap='small'>
                        <AiFillCheckCircle color='#006ee6' style={{ marginTop: '3px' }}/>
                        <Text>Celebrate birthdays and holidays</Text>
                    </Box>
                </Box>
                <Box
                    pad='small'
                    gap='small'
                >
                    <Box direction='row' gap='small'>
                        <AiFillCheckCircle color='#006ee6' style={{ marginTop: '3px' }}/>
                        <Text>Part Time RN</Text>
                    </Box>
                    <Box direction='row' gap='small'>
                        <AiFillCheckCircle color='#006ee6' style={{ marginTop: '3px' }}/>
                        <Text>All workers are Certified CNA</Text>
                    </Box>
                    <Box direction='row' gap='small'>
                        <AiFillCheckCircle color='#006ee6' style={{ marginTop: '3px' }}/>
                        <Text>Games and Activities</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Amenities