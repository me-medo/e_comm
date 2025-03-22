import { AddShoppingCartOutlined } from "@mui/icons-material"
import { Box, Button, Stack, Typography } from "@mui/material"
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function ProductDetails({ product = null }) {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (product) {
            setSelectedImage(product.mainImage);
        }
    }, [product]);

    if (!product) return null;

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            gap={2.6}
            flexDirection={{xs: "column", sm: "row"}}
        >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}> 
                <Box
                    component="img"
                    src={selectedImage} 
                    alt={product.name}
                    sx={{
                        width: 300,
                        height: "auto",
                        borderRadius: 1
                    }}
                />
            </Box>

            <Box sx={{ textAlign: {xs: "center", sm: "right"} }}>
                <Typography variant="h5">{product.name}</Typography>
                <Typography my={0.4} fontSize={"22px"} color="crimson" variant="h6">
                    ${product.price}
                </Typography>
                <Typography variant="body1">
                    {product.description}
                </Typography>

                <Stack
                    direction={"row"}
                    gap={1}
                    my={2}
                    justifyContent={{xs: "center", sm: "right"}}
                >
                    {product.images.map((item) => (
                        <Box
                            key={item}
                            onClick={() => handleImageClick(item)}
                            sx={{
                                cursor: "pointer",
                                border: `2px solid ${selectedImage === item ? '#f50057' : '#eee'}`,
                                borderRadius: 1,
                                overflow: "hidden"
                            }}
                        >
                            <img
                                src={item}
                                alt=""
                                style={{ 
                                    height: 100,
                                    width: 90,
                                    objectFit: "cover",
                                    opacity: selectedImage === item ? 1 : 0.7
                                }}
                            />
                        </Box>
                    ))}
                </Stack>

                <Button
                    variant="contained"
                    sx={{
                        textTransform: "capitalize",
                        mb: {xs: 1, sm: 0},
                        mt: 2
                    }}
                >
                    <AddShoppingCartOutlined sx={{ ml: 1 }} fontSize="small" />
                    اشتري الان
                </Button>
            </Box>
        </Box>
    );
}

ProductDetails.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        mainImage: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string),
        category: PropTypes.string
    })
};

export default ProductDetails