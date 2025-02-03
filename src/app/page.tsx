'use client';

import { Button, Container, SvgIcon, Typography, useTheme } from "@mui/material";
import Divider from '@mui/material/Divider';
import { OpenInNew } from "@mui/icons-material";
import Logo from "src/images/ana-gomes-logo.svg"
import LogoAna from "@/images/ana-gomes-logo";

export default function Index() {
    const theme = useTheme();


    return (
        <Container 
            style={{
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: theme.spacing(2),
            gap: theme.spacing(2), // Add spacing between elements
            }}>

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

                {/* PLACEHOLDER: Include logo svg */}
            
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

                    Currently, I’m the Lead Product Designer at Spud, a grocery delivery platform based in British Columbia, Canada. My journey has also included amazing collaborations with teams at SkipTheDishes, Ubisoft, and Shopify.

                    When I’m not designing, you’ll find me gaming, enjoying a good coffee, exploring the outdoors, or petting my cat, Mocha.
                </Typography>

                <Button 
                variant="outlined"
                color="inherit"
                size="medium"
                endIcon={<OpenInNew/>}
                >
                Go to Portfolio
                </Button> 

        </Container>
    )
}