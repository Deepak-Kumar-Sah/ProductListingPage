import React from 'react';
import {TableCell,TableHead,Table,TableRow,TableContainer,Paper,TableBody,CardMedia,Box,Grid, Typography,Container, TextField,Button,Checkbox} from '@mui/material';
import {SentimentSatisfiedAltRounded,ShoppingCart} from '@mui/icons-material';





// {"id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category":"men's clothing",
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating":{"rate":3.9,"count":120}}

// dummyjson
// {"id":1,
// "title":"iPhone 9",
// "description":"An apple mobile which is nothing like apple",
// "price":549,
// "discountPercentage":12.96,
// "rating":4.69,
// "stock":94,
// "brand":"Apple",
// "category":"smartphones",
// "thumbnail":"https://dummyjson.com/image/i/products/1/thumbnail.jpg",
// "images":["https://dummyjson.com/image/i/products/1/1.jpg",
// "https://dummyjson.com/image/i/products/1/2.jpg",
// "https://dummyjson.com/image/i/products/1/3.jpg",
// "https://dummyjson.com/image/i/products/1/4.jpg",
// "https://dummyjson.com/image/i/products/1/thumbnail.jpg"]}
const Product =({products,size,filter,searchKey})=>{
    console.log(products)
    return(
      <TableContainer component={Paper} sx={{bgcolor:"#DCDCDC",}}>
              <Table sx={{ minWidth: 650 ,}}>
                <TableBody>
                  {products.map((product) => (
                    <TableRow
                      // key={row.name}
                      // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      sx={{}}
                    >
                      <TableCell sx={{bgcolor:"yellow"}} >
                        <Box
                          component="img"
                          sx={{
                            height: 100,
                            width: 100,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                          }}
                          alt="The house from the offer."
                          src={product.image}
                        />
                      </TableCell>
                      <TableCell sx={{bgcolor:"green",maxWidth:150}} >
                        {product.title}
                      </TableCell>
                      <TableCell sx={{bgcolor:"red",alignContent:"center"}}>{product.rating.rate}</TableCell>
                      <TableCell sx={{bgcolor:"blue"}}>
                          <Grid container>
                            <Grid item>
                              {product.rating.count && <SentimentSatisfiedAltRounded sx={{color:"green"}}/>}
                            </Grid>
                            <Grid item>
                              <Typography sx={{color:"green"}}>Success</Typography>
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell sx={{bgcolor:"pink"}}>{product.price}</TableCell>
                      <Grid container sx={{justifyContent:"flex-end"}}>
                        <TableCell sx={{bgcolor:"teal"}}>
                          <Grid container sx={{display:"flex"}} spacing={2}>
                            <Grid item sx={{minWidth:100,maxWidth:50}}>
                              <TextField sx={{}}></TextField>
                            </Grid>
                            <Grid item>
                              <Button sx={{background:"black"}} startIcon={<ShoppingCart sx={{color:"white"}}/>}></Button>
                            </Grid>
                            <Checkbox/>
                          </Grid>
                        </TableCell>
                      </Grid>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </TableContainer>
    )
}
export default Product;