import React,{useState,useEffect} from "react";
import {Grid,Box,FormControl,InputLabel,MenuItem,Select,Button, Typography,TextField,Table,TableHead,TableRow,TableCell,} from '@mui/material';
import {Replay} from '@mui/icons-material/';
import Product from "./Product/Product";


const Home =()=>{
    const [age, setAge] = useState('');
    const [value, setValue] = useState({
        size:"",
        filter:"",
        searchKey:""
    });
    const [products, setproducts] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  }
  const fetchProducts = async ()=>{
    // const res =await fetch('https://dummyjson.com/products/');
    const res =await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    setproducts(data);
 }
 useEffect(()=>{
    fetchProducts();
},[])
    return(
        <>
        <Grid>
            <Grid  container sx={{display:"flex"}}>
                <Grid  container sx={{justifyContent:"space-between"}}>
                    <Grid item>
                        <Grid container>
                        <Grid item sm xs={12} sx={{margin:2}}>
                            <Box sx={{minWidth:120,}}>
                                <FormControl  fullWidth>
                                    <InputLabel >Filter</InputLabel>
                                    <Select
                                    // labelId="demo-simple-select-label"
                                    // id="demo-simple-select"
                                    value={age}
                                    label="Hoodies"
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item sm xs={12} sx={{margin:2}}>
                            <Box sx={{minWidth:120 }}>
                                <FormControl fullWidth>
                                    <InputLabel >Size</InputLabel>
                                    <Select
                                    // labelId="demo-simple-select-label"
                                    // id="demo-simple-select"
                                    value={age}
                                    label="Hoodies"
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Button startIcon={<Replay />}>Retry</Button>
                        </Grid>
                    </Grid>
                    {/* 2nd part */}
                    <Grid item>
                        <Grid container spacing={2} sx={{mt:0.5}}>
                            <Grid item>
                                <Typography variant="h5" sx={{mt:1}}>Search:</Typography>
                            </Grid>
                            <Grid item>
                                <TextField id="outlined-search" label="Search field" type="search" />
                            </Grid>
                            <Grid item sx={{mt:1}}>
                                <Button  sx={{bgcolor:"#00a86b",p:1,textTransform:"none"}} variant="contained" label="">Add To Cart</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Nav UI Done */}
                <Grid container sx={{bgcolor:"#A8A8A8",width:"100%",p:1,justifyContent:"space-between",}}>
                    <Grid item sx={{bgcolor:"yellow"}} >
                        <Typography variant="h6" sx={{fontWeight:'bold',}}>Image</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Name</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Rating</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Stock</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Price</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Buy</Typography>
                    </Grid>
                </Grid>
                <Product products={products} size={value.size} filter={value.filter} searchKey={value.searchKey} />
            </Grid>
        </Grid>
        </>
    )
}
export default Home;