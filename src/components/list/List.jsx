import { useState, useEffect, useContext } from "react";
import { axiosInstance } from "../../utils/axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import uuid from 'react-uuid';
import { CartContext } from "../../context/cart.context";


const List = () => {

    const [list, setList] = useState([]);

    

    const { addItemToCart } = useContext(CartContext);

    useEffect(() =>{
        axiosInstance.get()
        .then(response => setList(response.data))
    }, [list])

    const addToCart = (e) => {
        let item = list.find( element => element.id == e.target.value)
        addItemToCart(item)
    }

    

    return(
        <>
        <Box sx={{ bgcolor: '#cfe8fc', p: "5rem"}} align="center">            
            <Typography sx={{color: '#f542ec'}} align="center" variant="h3" gutterBottom>
                Products
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>                        
                        <TableCell sx={{fontSize:"32px"}} align="left">ID</TableCell>
                        <TableCell sx={{fontSize:"32px"}} align="left">Name</TableCell>
                        <TableCell sx={{fontSize:"32px"}} align="left">Unit</TableCell>
                        <TableCell sx={{fontSize:"32px"}} align="left">In stock</TableCell>
                        <TableCell sx={{fontSize:"32px"}} align="left">Details</TableCell>
                        <TableCell sx={{fontSize:"32px"}} align="left">Add to cart</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>                    
                    {
                                    
                        list.map(item => ( 
                            <TableRow key={uuid()}>
                                <>
                                    <TableCell sx={{fontSize:"24px"}}>{item?.id}</TableCell>                            
                                    <TableCell sx={{fontSize:"24px"}}>{item?.name}</TableCell>                            
                                    <TableCell sx={{fontSize:"24px"}}>{item?.quantityPerUnit}</TableCell>                                                      
                                    <TableCell sx={{fontSize:"24px"}}>{item.unitsInStock}</TableCell>
                                    <TableCell>
                                    <Button key={uuid()} href={`List/${item.id}`} value={item.id} variant="text" sx={{fontSize:"24px", color: '#1976d2' }}>Details</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={addToCart} value={item.id} key={uuid()} variant="text" sx={{fontSize:"24px", color: '#1976d2' }}>Add to cart</Button>
                                    </TableCell>                
                                </>                        
                            </TableRow>))                        
                    }
                
                </TableBody>
            </Table>
        </Box>
        </>
    )
}

export default List;