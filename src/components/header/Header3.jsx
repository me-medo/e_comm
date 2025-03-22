import { Box, Container,  Drawer, IconButton,  ListItemIcon, ListItemText, Stack, Typography, useMediaQuery } from "@mui/material"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrow from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { useTheme } from "@mui/material";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
} from "@mui/icons-material"




function Header3() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme()
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <Container sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mt: 5,
    }}>

      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}

          sx={{
            width: 222,
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography sx={{
            padding: "0",
            textTransform: "capitalize",
            mx: 1,
          }}>
            الفئات
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrow />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            ".MuiPaper-root": {
              width: 222
              // @ts-ignore
              , bgcolor: theme.palette.myColor.main,
            }
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>دراجات</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>الكترونيات</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>كتب</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>العاب</ListItemText>
          </MenuItem>



        </Menu>
      </Box>
      {useMediaQuery('(min-width:1000px)') && (
        <Stack gap={4} direction={"row"} alignItems="center">

          
          <Button
            sx={{
              p: 0,
              m: 0,
              bgcolor: "transparent",
              color: theme.palette.text.primary
            }}
            variant="text"
          >
            الرئيسية
          </Button>
          <Button
            sx={{
              p: 0,
              m: 0,
              bgcolor: "transparent",
              color: theme.palette.text.primary
            }}
            variant="text"
          >
            المنتجات
          </Button>          <Button
            sx={{
              p: 0,
              m: 0,
              bgcolor: "transparent",
              color: theme.palette.text.primary
            }}
            variant="text"
          >
            عن المطورين
          </Button>
          <Button
            sx={{
              p: 0,
              m: 0,
              bgcolor: "transparent",
              color: theme.palette.text.primary
            }}
            variant="text"
          >
             حسابي
          </Button>        
          </Stack>

      )}


      {useMediaQuery('(max-width:1000px)') && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>)}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": { height: "100%" } }}
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton 
            sx={{ 
              position: "absolute", 
              top: 0, 
              right: 10, 
              ":hover": { 
                rotate: "180deg", 
                color: "red", 
                transition: "0.7s" 
              } 
            }} 
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          <Stack spacing={2} alignItems="center">
            {[
              { text: "الرئيسية", icon: "🏠" },
              { text: "المنتجات", icon: "🛍️" },
              { text: "عن المطورين", icon: "👨‍💻" },
              { text: "تواصل معنا", icon: "📞" },
              { text: "حسابي", icon: "👤" }
            ].map((item) => (
              <Button
                key={item.text}
                variant="contained"
                sx={{
                  width: "80%",
                  py: 1.5,
                  backgroundColor: "white",
                  color: "primary.main",
                  fontSize: "1.1rem",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  border: "1px solid",
                  borderColor: "primary.main",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    backgroundColor: "primary.main",
                    color: "white",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                  }
                }}
              >
                <span style={{ marginLeft: 8 }}>{item.icon}</span>
                {item.text}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>

    </Container>
  )
}

export default Header3