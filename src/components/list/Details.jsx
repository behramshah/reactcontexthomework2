import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axios";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Details = () => {

    const [product, setProduct] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axiosInstance.get(id)
        .then(response => setProduct(response.data))
    }, [id])
      
      const card = (
        <>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              About Product
            </Typography>
            <Typography variant="h3" component="div">
               The product:  {product?.name}
            </Typography>
            <Typography variant="h3" component="div">
               The price:  {product?.unitPrice}
            </Typography>
            <Typography variant="h3" component="div">
               Quantity:  {product?.quantityPerUnit}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Supplier {product?.supplier?.companyName} 
            </Typography>
            <Typography variant="body2">
             Country of Origin: {product?.supplier?.address?.country}
            </Typography>
          </CardContent>
        </>
      );

    return(
        <Box sx={{ minWidth: 275, m:"15rem" }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}

export default Details;