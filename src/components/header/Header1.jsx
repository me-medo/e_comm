import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, ListItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';



const options = [
  'AR',
  'EN',
];



function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{
      bgcolor: "#2B3445",
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
    }}>
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
        >
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "red",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            Hot
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
              paddingRight: "5px",
            }}
            variant="body2"
          >
            التسوق الآمن والسريع
          </Typography>
          <Box flexGrow={1} />

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#fff",
            }}
            variant="body2"
          >
            متجر الورافي الالكتروني  
          </Typography>

          <Box flexGrow={1} />

          


          <div>
            {theme.palette.mode === "light" ? (
              <IconButton 
              
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
              
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            )}
          </div>




          <List
            component="nav"
            aria-label="Device settings"
              
              sx={{ p: 0, m: 0}}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
            >
              <ListItemText
                sx={{ ".MuiTypography-root": { fontSize: "12px", color: "#fff" } }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "25px", color: "#fff" }} />
            </ListItem>
          </List>
          <Menu
          
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "12px", p: "10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>






          <Stack
            direction={'row'}
            alignItems={'center'}
            
          >
            <a href="#" >
              <Twitter
                sx={{
                  fontSize: "19px",
                  color: "#fff",
                  marginRight: 2,
                }}
              />
            </a>
            <a href="https://www.facebook.com/0Worafi" target="_blank" rel="noopener noreferrer">
              <Facebook
                sx={{
                  fontSize: "19px",
                  color: "#fff",
                  marginRight: 2,
                }}
              />
            </a>
            <a href="https://www.instagram.com/me_medo0" target="_blank" rel="noopener noreferrer">
              <Instagram
                sx={{
                  fontSize: "19px",
                  color: "#fff",
                  marginRight: 2,
                }}
              />
            </a>
          </Stack>


        </Stack>
      </Container>
    </Box>
  )
}

export default Header1

