import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


{products.map((product)=>{
  // console.log(product.image);
  <Grid container>
  <Box
  component="img"
  sx={{
    height: 100,
    // width: 350,
    maxHeight: { xs: 233, md: 167 },
    maxWidth: { xs: 350, md: 250 },
  }}
  alt="The house from the offer."
  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
/>
<Typography>{product.id}</Typography>
</Grid>
})
}

// <TableContainer component={Paper} sx={{bgcolor:"#DCDCDC"}}>
          //     <Table sx={{ minWidth: 650 ,justifyContent:"space-between"}}>
          //       <TableBody>
          //         {products.map((product) => (
          //           <TableRow
          //             // key={row.name}
          //             // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          //             // sx={{}}
          //           >
          //             <TableCell>
          //             <Box
          //               component="img"
          //               sx={{
          //                 bgcolor:"red",
          //                 height: 100,
          //                 // width: 350,
          //                 // maxHeight: { xs: 233, md: 167 },
          //                 // maxWidth: { xs: 350, md: 250 },
          //               }}
          //               alt="The house from the offer."
          //               src={product.image}
          //             />
          //             </TableCell>
          //             <TableCell sx={{maxWidth:40}} >
          //               {product.title}
          //             </TableCell>
          //             <TableCell>color</TableCell>
          //             <TableCell>{product.rating.count && <SentimentSatisfiedAltRounded/>}Success</TableCell>
          //             <TableCell>{product.price}</TableCell>
          //             <TableCell>Buy</TableCell>
          //           </TableRow>
          //         ))}
          //       </TableBody>
          //     </Table>
          // </TableContainer>