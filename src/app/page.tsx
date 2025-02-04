'use client';

import { Button, ButtonGroup, Container, Link, SvgIcon, Typography, useTheme } from "@mui/material";
import Divider from '@mui/material/Divider';
import { OpenInNew } from "@mui/icons-material";
import LogoAna from "@/images/ana-gomes-logo";

export default function Index() {
    const theme = useTheme();


    return (
        <Container 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: theme.spacing(2),
                gap: theme.spacing(2), // Add spacing between elements
            }}>

                {/* Header */}

                <Container

                    style={{
                        position: 'fixed',
                        top: 0,
                        padding: theme.spacing(3),
                    }}
                
                    >
                        <ButtonGroup

                            variant="text"
                            size="small"
                            color="inherit"
                        >
                  
                            <Button 
                                href="https://www.linkedin.com/in/anacsgomes/"
                                target="_blank"
                                >
                                    Linkedin
                            </Button> 

                            <Button
                                target="_blank"
                                href="https://github.com/anagomesdesign"
                                >
                                    Github 
                            </Button>

                            <Button
                                target="_blank"
                                href="https://anagomes.squarespace.com/portfolio"
                                >
                                    Portfolio 
                            </Button>

                        </ButtonGroup>
                </Container>

                <Container>

                    <Container
                        style={{
                           
                            display: 'flex',
                            justifyContent: 'center',
                            padding: theme.spacing(2),
                        }}
                    >

                        <LogoAna width={64} height={64}/>

                   </Container>
            
                    <Typography 
                        variant="h4"
                        align="center">

                            Hello, I'm Ana! 
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        align="center">
                            Senior Product Designer
                    </Typography>

                    <Divider 
                        style={{
                            width: '100%',
                            backgroundColor: theme.palette.divider,
                            margin: theme.spacing(2),
                    }}/>

                </Container>


                <Typography
                    variant="h6"
                    align="center"
                >
                    About me
                </Typography>
                
                <Typography
                    variant="body1"
                    align="center"
                >
                    I'm a Senior Product Designer based in Canada with over 15 years of experience with design and tech. My goal is collaborating to create functional, ethical and inclusive designs that align with business goals.

                    Currently, I’m the Lead Product Designer at

                        &nbsp;
                        <Link href="https://www.spud.ca/" color="inherit" target="_blank">
                            {'Spud'}
                        </Link>
                    
                    , a grocery delivery platform based in British Columbia, Canada. My journey has also included amazing collaborations with teams at

                        &nbsp;
                        <Link href="https://www.skipthedishes.com/" color="inherit" target="_blank">
                            {'SkipTheDishes'}
                        </Link>
                    
                    , 

                        &nbsp;
                        <Link href="https://www.shopify.com/" color="inherit" target="_blank">
                            {'Shopify'}
                        </Link>
                    
                    , and 

                        &nbsp;
                        <Link href="https://www.shopify.com/ca" color="inherit" target="_blank">
                            {'Shopify'}
                        </Link>
                    
                    .

                    When I’m not designing, you’ll find me gaming, enjoying a good coffee, exploring the outdoors, or petting my cat, Mocha.
                </Typography>

                <Button 
                    variant="contained"
                    color="inherit"
                    size="medium"
                    endIcon={<OpenInNew/>}
                    href="https://anagomes.squarespace.com/portfolio"
                >
                        Go to Portfolio
                </Button>

                {/* Footer */}

                <Container
                
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        padding: theme.spacing(2),
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 'inherit',
                    }}>
                        
                        <Typography
                            variant="body2"
                            align="center"
                        >
                            © 2025 Made by Ana Gomes. Be kind, I'm still learning.
                        </Typography>                    
                </Container> 

        </Container>
    )
}