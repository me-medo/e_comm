import { Box, Button, Container, Typography } from "@mui/material"
import CopyrightIcon from '@mui/icons-material/Copyright';



function Footer() {

    const handleClick = () => { window.open('https://www.linkedin.com/in/medoo', '_blank'); };
  return (
    <Container>
        <Box
        sx={{
            
            mx: 0.5,
            bgcolor: "#2B3445",
            py: 1.3,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
        }}
        >
            <Typography
            justifyContent={"center"}
            display={"flex"}
            alignItems={"center"}
            color={"HighlightText"}
            variant="h6"
            sx={{fontSize: 18}}
            >
                برمجة وتطوير  
                <Button
                    sx={{
                        
                        fontSize: "18px",
                        textTransform: "capitalize",
                        color: "#ff7790"
                    }}
                    variant="text"
                    color="primary"
                    onClick={handleClick}
                >
                    Medo Worafi
                </Button>
                <CopyrightIcon  />
                  2024
            </Typography>
        </Box>
        </Container>
  )
}

export default Footer