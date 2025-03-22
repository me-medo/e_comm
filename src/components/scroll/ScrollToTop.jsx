import { KeyboardArrowUpOutlined } from "@mui/icons-material"
import { Fab, Zoom, useScrollTrigger } from "@mui/material"

function ScrollToTop() {
    return (
        <Zoom in={useScrollTrigger({threshold: 300})}>
            <Fab 
            
            sx={{
                position: "fixed",
                bottom: 33,
                right: 33,
            }}
                onClick={() => { 
                    window.scrollTo(0,0)
                 }}
                variant="extended"
                size="small"
                color="primary"
                aria-label="add">
                <KeyboardArrowUpOutlined />
            </Fab>
        </Zoom>
    )
}

export default ScrollToTop