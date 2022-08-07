import { Anchor, Box, Header, Heading, ResponsiveContext, Button  } from 'grommet'
import { Contact, Home, MapLocation, Overview } from 'grommet-icons'

function Nav() {
  return (
    <ResponsiveContext.Consumer>
        {(size) => size === 'small' 
            ? (
                <Header 
                    background='#999999'
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
                        }}/>
                    </Box>
                </Header>
            )
            : (
                <Box
                     background="#999999"
                    align='center'
                    justify='center'
                    border={{
                        color: '#006ee6',
                        side: 'bottom',
                        size: 'medium'
                    }}
                >
                    <Header 
                        pad={{ vertical: 'medium'}}
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
                            {
                                items.map(({ref, label, scroll}, key) => {
                                    return (
                                            <Anchor 
                                            color="white" 
                                            size="small"
                                            key={key} 
                                            label={label}
                                            onClick={() => {}}
                                            />
                                    )
                                })
                            }
                        </Box>
                    </Header>
                </Box>
            )}
    </ResponsiveContext.Consumer>
  )
}

const items = [
    {
        ref: 'about',
        label: "About",
    },
    {
        ref: 'amenities',
        label: "Amenities",
    },
    {
        ref: '#',
        label: "Contact",
    }
]

export default Nav