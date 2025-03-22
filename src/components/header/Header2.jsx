import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material"
import { Badge, Container, IconButton, InputBase, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";


const Search = styled('div')(({ theme }) => ({
  flexGrow: 0.4,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.myColor.dark}`,
  backgroundColor: theme.palette.myColor.main,
  transition: 'all 0.3s ease',
  '&:hover': {
    border: `1px solid ${theme.palette.text.primary}`,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transform: 'translateY(-2px)'
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '260px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '330px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary,
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 5, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const options = [
  'جميع الفئات',
  'ملابس اطفال',
  'ملابس رجال',
  'ملابس نساء',
  
];



function Header2() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const theme = useTheme();

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
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Stack 
        alignItems={"center"} 
        sx={{
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
      >
        <ShoppingCartOutlined sx={{ fontSize: '2rem', color: 'primary.main' }} />
        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
          متجر الكتروني
        </Typography>
      </Stack>

      <Search sx={{
          display: "flex",
          borderRadius: "22px",
          justifyContent: "space-between",
        }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          
          <StyledInputBase
            placeholder="البحث ....."
            inputProps={{ 'aria-label': 'search' }}
          />
      
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              bgcolor: theme.palette.myColor.dark,
              borderRadius: "22px 22px 22px 22px",
              p: 0,
              minWidth: 120,
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ListItem
              component="div"
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickListItem}
              sx={{ 
                
                px: 2,
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: theme.palette.action.hover
                }
              }}
            >
              <ListItemText
                sx={{ 
                  width: 90, 
                  textAlign: "center",
                  color: 'text.primary',
                  fontWeight: 500,
                  fontSize: 13,
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: 16, color: 'text.primary' }} />
            </ListItem>
          </List>
        </Search>

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
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
              sx={{ fontSize: 13, minWidth: 130 }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <Stack direction="row" spacing={1}>
          <IconButton 
            aria-label="cart"
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-2px)'
              }
            }}
          >
            <StyledBadge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>

          <IconButton
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-2px)'
              }
            }}
          >
            <Person2OutlinedIcon />
          </IconButton>
        </Stack>
      </Container>
    );
  }

  export default Header2;
