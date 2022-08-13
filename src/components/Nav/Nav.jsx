import { Anchor, Box, Header, Heading, ResponsiveContext, Button  } from 'grommet'
import { Contact, Home, MapLocation, Overview } from 'grommet-icons'

function Nav({open}) {
  return (
    <ResponsiveContext.Consumer>
        {(size) => size === 'small' 
            ? (
                <Header 
                    background='#006ee6'
                    pad={{
                        vertical: 'small',
                        horizontal: 'medium'
                    }}
                    border={{
                        color: '#006ee6',
                        side: 'bottom',
                        size: 'medium'
                    }}
                    style={{
                        zIndex: 2,
                        display: 'block',
                        width: '100%',
                        position: 'fixed',
                    }}
                >
                    <Box
                        direction='row'
                        justify='between'
                        pad='small'
                    >
                        <Button icon={<Home color='white'/>} href='#home' />
                        <Button icon={<MapLocation color='white'/>}  href='#about' style={{
                            transition: 'all 400ms ease'
                        }}/>
                        <Button icon={<Overview color='white'/>}  href='#amenities' style={{
                            transition: 'all 400ms ease'
                        }}/>
                        <Button icon={<Contact color='white'/>}  style={{
                            transition: 'all 400ms ease'
                        }} onClick={() => open()} href='#contact'/>
                    </Box>
                </Header>
            )
            : (
                <Box
                     background="#006ee6"
                    align='center'
                    justify='center'
                    border={{
                        color: '#006ee6',
                        side: 'bottom',
                        size: 'medium'
                    }}
                >
                    <Header 
                        pad={{ vertical: 'small'}}
                        sticky="scrollup"
                        width="1000px"
                    >
                        <Heading
                            margin='none'
                            size='xsmall'
                            level='3'
                            color='white'
                        >
                            James and Tina's Private Care Services
                        </Heading>
                        <Box
                            direction='row'
                            align='center'
                            pad='xsmall'
                            gap='small'
                        >
                            <Anchor 
                                color="white" 
                                size="small"
                                label='About'
                                href='#about'
                                onClick={() => {}}
                            />
                            <Anchor 
                                color="white" 
                                size="small"
                                label='Amenities'
                                href='#amenities'
                                onClick={() => {}}
                            />
                            <Anchor 
                                color="white" 
                                size="small"
                                label='Contact'
                                href='#contact'
                                onClick={() => open()}
                            />
                        </Box>
                    </Header>
                </Box>
            )}
    </ResponsiveContext.Consumer>
  )
}

export default Nav