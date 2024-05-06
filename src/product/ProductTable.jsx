import React from 'react'
import { useNavigate } from 'react-router-dom';
// table section
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const ProductTable = ({ products }) => {
    const navigate = useNavigate();

    const handleRowClick = (productId) => {
      // Navigate to another page displaying the details of the clicked product
      navigate(`/Product/${productId}`); // Assuming '/product/:productId' is the route for displaying product details
    };

  return (
    <div >
    <Table>
        <TableHead style={{backgroundColor:'blue'}}>
                      <TableRow>
                      <TableCell style={{ backgroundColor: 'black', color: 'white' }}>Name</TableCell>
                      <TableCell style={{ backgroundColor: 'black', color: 'white' }}>Status</TableCell>
                      <TableCell style={{ backgroundColor: 'black', color: 'white' }}>Partner</TableCell>
                      <TableCell style={{ backgroundColor: 'black', color: 'white' }}>Product Type</TableCell>
                      </TableRow>
        </TableHead>
      <tbody>
      {products.map((row) => (
                         <TableRow
                         key={row.id}
                         style={{ backgroundColor: '#f1f1f1', cursor: 'pointer' }} // Add cursor pointer to indicate clickable rows
                         onClick={() => handleRowClick(row.id)} // Call handleRowClick function on row click
                       >
                          <TableCell >{row.name}</TableCell>
                          <TableCell>{row.status}</TableCell>
                          <TableCell >{row.type}</TableCell>
                          <TableCell >{row.id}</TableCell>
                        </TableRow>
                      ))}
      </tbody>
    </Table>
  </div>
  )
}

export default ProductTable
