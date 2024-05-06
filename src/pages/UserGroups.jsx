import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { UserPlus } from "lucide-react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const columns = [
  { field: "id", headerName: "No", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
  { field: "Email", headerName: "Email", width: 200 },
  {
    field: "Role",
    headerName: "Role",
    width: 150,
  },
  {
    field: "UserGroup",
    headerName: "User Group",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "Phone",
    headerName: "Phone Number",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    Name: "Snow",
    Email: "Jon@gmail.com",
    Role: "Admin",
    UserGroup: "N/A",
    Phone: "8961439072",
  },
  {
    id: 2,
    Name: "Lannister",
    Email: "Cersei@gmail.com",
    Role: "SD",
    UserGroup: "N/A",
    Phone: "7519376480",
  },
  {
    id: 3,
    Name: "Lannister",
    Email: "Jaime@gmail.com",
    Role: "DA",
    UserGroup: "N/A",
    Phone: "656567285",
  },
  {
    id: 4,
    Name: "Stark",
    Email: "Arya@gmail.com",
    Role: "HR",
    UserGroup: "N/A",
    Phone: "8907654321",
  },
  {
    id: 5,
    Name: "Targaryen",
    Email: "Daenerys@gmail.com",
    Role: "Head",
    UserGroup: "N/A",
    Phone: "9087654321",
  },
];

const UserGroup = () => {
  return (
    <div className="flex justify-center select-none top-10 relative">
      <Paper variant="elevation" className="w-max">
        <div className="flex align-middle">
          <div className="mx-3.5 mr-96 font-bold self-center">User Group</div>
          <div className="flex align-middle justify-between">
            <input
              type="text"
              className="border-l-rose-300 ml-3.5 outline-none text-center"
              placeholder="search"
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Button
              variant="contained"
              size="small"
              className="h-7 self-center"
              style={{ marginRight: "20px" }}
              startIcon={<UserPlus size={15} />}
            >
              Add User Group{" "}
            </Button>
          </div>
        </div>
        <div style={{ height: 400 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "#000000",
                color: "#ffffff", // Change the background color as desired
              },
            }}
          />
        </div>
      </Paper>
    </div>
  );
};

export default UserGroup;
