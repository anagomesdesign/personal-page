'use client';

import { Button, Container, Typography, useTheme } from "@mui/material";

export default function Index() {
    const theme = useTheme();


    return (
        
        <Container style={{
            backgroundColor: theme.palette.background.default
        }}>
            
            <Typography 
                variant="h4">

                    Hello, I'm Ana! 
            </Typography>

            <Typography
                variant="overline">
                    
                    About me
            </Typography>
            
            <Typography

                variant="body1">
                    I'm a Senior Product Designer based in Canada with over 15 years of experience with design and tech. My goal is collaborating to  create functional, ethical and inclusive designs that align with business goals.

Currently, I’m the Lead Product Designer at Spud, a grocery delivery platform based in British Columbia, Canada. My journey has also included amazing collaborations with teams at SkipTheDishes, Ubisoft, and Shopify.

When I’m not designing, you’ll find me gaming, enjoying a good coffee, exploring the outdoors, or petting my cat, Mocha.
            
            </Typography>

            <Button 
                
                variant="outlined">
                    
                    Discover My Work
            
            </Button> 

        </Container>
    )
}