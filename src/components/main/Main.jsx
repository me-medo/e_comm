import { Box, Container, Dialog, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material"
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";

const products = [
    {
        id: 1,
        name: "جاكيت",
        price: 55.99,
        description: "من افضل الجواكت الشتوية ألتي من الممكن ارتدائها وبسعر مناسب جداً",
        mainImage: "./images/product/1/final.png",
        images: ["./images/product/1/final.png", "./images/product/1/images.jpg"],
        category: "men"
    },
    {
        id: 2,
        name: "نظارة",
        price: 37.99,
        description: "نظارة شمسية من احدث الموديلات الموجودة في السوق وبجودة عالية",
        mainImage: "public/images/product/2/final.jpg",
        images: ["public/images/product/2/final.jpg", "public/images/product/2/1.jpg"],
        category: "accessories"
    },
    {
        id: 3,
        name: "حقيبة",
        price: 99.99,
        description: "حقيبة نسائية بتصميم حديث وجذاب",
        mainImage: "public/images/product/3/final.jpg",
        images: ["public/images/product/3/final.jpg", "public/images/product/3/images.jpg"],
        category: "women"
    },
    {
        id: 4,
        name: "ساعة",
        price: 145.99,
        description: "ساعة حديثة وبتصميم رائع",
        mainImage: "public/images/product/4/final.jpg",
        images: ["public/images/product/4/final.jpg", "public/images/product/4/images.jpg"],
        category: "accessories"
    },
    {
        id: 5,
        name: "اسوارة",
        price: 15.99,
        description: "اسوارة نسائية عالية الجودة",
        mainImage: "public/images/product/6/1.jpg",
        images: ["public/images/product/6/1.jpg", "public/images/product/6/2.jpg"],
        category: "accessories"
    },
    {
        id: 6,
        name: "جاكيت",
        price: 30.99,
        description: "من افضل الجواكت الشتوية ألتي من الممكن ارتدائها وبسعر مناسب جداً",
        mainImage: "./images/product/5/100.jpg",
        images: ["./images/product/5/100.jpg", "./images/product/5/images.jpg"],
        category: "men"
    }
];

function Main() {
    const [alignment, setAlignment] = useState('left');
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClickOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const theme = useTheme();

    const filteredProducts = products.filter(product => {
        if (alignment === 'left') return true; // All products
        if (alignment === 'center') return product.category === 'men';
        if (alignment === 'right') return product.category === 'women';
        return true;
    });

    return (
        <Container sx={{ py: 9 }}>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                gap={3}
            >
                <Box>
                    <Typography variant="h6">اختر المنتج</Typography>
                    <Typography fontWeight={300} variant="body1">
                        احصل على احسن العروض والمنتجات لدينا باقل وافضل الاسعار المتاحة
                    </Typography>
                </Box>

                <ToggleButtonGroup
                    color="error"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton
                        sx={{ color: theme.palette.text.primary }}
                        className="myButton"
                        value="left"
                        aria-label="left aligned"
                    >
                        جميع المنتجات
                    </ToggleButton>
                    <ToggleButton
                        sx={{
                            mx: "10px !important",
                            color: theme.palette.text.primary
                        }}
                        className="myButton"
                        value="center"
                        aria-label="centered"
                    >
                        فئة الرجال
                    </ToggleButton>
                    <ToggleButton
                        sx={{ color: theme.palette.text.primary }}
                        className="myButton"
                        value="right"
                        aria-label="right aligned"
                    >
                        فئة النساء
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack
                direction={"row"}
                flexWrap={"wrap"}
                gap={2}
                justifyContent={"center"}
            >
                {filteredProducts.map((product) => (
                    <Card 
                        key={product.id}
                        sx={{
                            width: {
                                xs: "calc(50% - 8px)",  // تعديل عرض الكارد للشاشات الصغيرة
                                sm: "300px",
                                md: "calc(25% - 16px)",
                            },
                            minWidth: {
                                xs: "140px",  // تصغير الحد الأدنى للعرض
                                sm: 300,
                                md: 220,
                            },
                            mt: { xs: 2, sm: 6 },  // تقليل الهامش العلوي
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Box sx={{ overflow: "hidden" }}>
                            <CardMedia
                                component="img"
                                alt={product.name}
                                image={product.mainImage}
                                sx={{
                                    height: { xs: 120, sm: 180 },  // تصغير ارتفاع الصورة
                                    transition: "0.3s",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>
                        <CardContent sx={{ p: { xs: 1, sm: 2 } }}>  
                            <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Typography 
                                    gutterBottom 
                                    variant="h6" 
                                    component="div"
                                    sx={{ 
                                        fontSize: { xs: '0.8rem', sm: '1rem' },
                                        mb: { xs: 0.5, sm: 1 }
                                    }}
                                >
                                    {product.name}
                                </Typography>

                                <Typography 
                                    variant="subtitle1" 
                                    component="p"
                                    sx={{ 
                                        color: "error.main",
                                        fontWeight: "bold",
                                        fontSize: { xs: '0.75rem', sm: '0.9rem' }
                                    }}
                                >
                                    ${product.price}
                                </Typography>
                            </Stack>

                            <Typography 
                                variant="body2" 
                                color="text.secondary"
                                sx={{
                                    mt: { xs: 0.5, sm: 1 },
                                    height: { xs: 40, sm: 60 },
                                    fontSize: { xs: '0.7rem', sm: '0.875rem' }
                                }}
                            >
                                {product.description}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{ px: { xs: 1, sm: 2 }, pb: { xs: 1, sm: 2 } }}>
                            <Button
                                onClick={() => handleClickOpen(product)}
                                variant="contained"
                                color="primary"
                                sx={{ 
                                    textTransform: "capitalize",
                                    fontSize: { xs: "0.7rem", sm: "0.8rem" },
                                    py: { xs: 0.3, sm: 0.5 },
                                    px: { xs: 0.5, sm: 1 },
                                    minHeight: { xs: "24px", sm: "32px" },
                                    bgcolor: "primary.main",
                                    "&:hover": {
                                        bgcolor: "primary.dark"
                                    }
                                }}
                            >
                                <AddShoppingCartOutlinedIcon sx={{ 
                                    ml: 1, 
                                    fontSize: { xs: "0.8rem", sm: "1rem" } 
                                }} />
                                اضف الى السلة
                            </Button>

                            <Rating 
                                size="small"
                                sx={{
                                    fontSize: { xs: '0.7rem', sm: '1rem' }
                                }}
                            />
                        </CardActions>
                    </Card>
                ))}
            </Stack>

            <Dialog
                sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <IconButton
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 10,
                        ":hover": {
                            rotate: "180deg",
                            color: "red",
                            transition: "0.7s"
                        }
                    }}
                    onClick={handleClose}
                >
                    <Close />
                </IconButton>

                <ProductDetails product={selectedProduct} />
            </Dialog>
        </Container>
    );
}

export default Main