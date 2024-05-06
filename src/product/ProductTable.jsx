import React from "react";
import { useNavigate } from "react-router-dom";
// table section
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useAuth } from "../pages/AuthContext";

const ProductTable = ({ products }) => {
  const { isDarkMode } = useAuth();

  const navigate = useNavigate();

  const handleRowClick = (productId) => {
    // Navigate to another page displaying the details of the clicked product
    navigate(`/Product/${productId}`); // Assuming '/product/:productId' is the route for displaying product details
  };

  return (
    <div className={`p-4 ${isDarkMode ? "bg-[#313135] text-white" : ""}`}>
      <Table className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}>
        <TableHead style={{ backgroundColor: "blue" }}>
          <TableRow
            className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
          >
            <TableCell style={{ backgroundColor: "black", color: "white" }}>
              Name
            </TableCell>
            <TableCell style={{ backgroundColor: "black", color: "white" }}>
              Status
            </TableCell>
            <TableCell style={{ backgroundColor: "black", color: "white" }}>
              Partner
            </TableCell>
            <TableCell style={{ backgroundColor: "black", color: "white" }}>
              Product Type
            </TableCell>
          </TableRow>
        </TableHead>
        <tbody className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}>
          {products.map((row) => (
            <TableRow
              key={row.id}
              className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
              style={{ cursor: "pointer" }} // Add cursor pointer to indicate clickable rows
              onClick={() => handleRowClick(row.id)} // Call handleRowClick function on row click
            >
              <TableCell
                className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
              >
                {row.name}
              </TableCell>
              <TableCell
                className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
              >
                {row.status}
              </TableCell>
              <TableCell
                className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
              >
                {row.type}
              </TableCell>
              <TableCell
                className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
              >
                {row.id}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
