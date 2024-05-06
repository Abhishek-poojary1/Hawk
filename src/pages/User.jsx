import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { UserPlus } from "lucide-react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

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
    Name: "smartbuildauto",
    Email: "platform@smartbuildauto.com",
    Role: "ENTERPRISE SUPER USER",
    UserGroup: "N/A",
    Phone: "8961439099",
  },
  {
    id: 2,
    Name: "Sairam",
    Email: "sairam.k@smartbuildauto.com",
    Role: "ENTERPRISE ADMIN",
    UserGroup: "sub-group",
    Phone: "7519376320",
  },
  {
    id: 3,
    Name: "Lini",
    Email: "lini@smartbuildauto.com",
    Role: "ENTERPRISE ADMIN",
    UserGroup: "sub-group",
    Phone: "8564263522",
  },
];

const User = () => {
  const { updateUserdata } = useAuth();
  const navigate = useNavigate();
  const handlecellclick = (param) => {
    updateUserdata(param.row);
    navigate("/User/userdetails");
  };
  return (
    <div className="flex justify-center select-none top-10 relative">
      <Paper variant="elevation" className="w-max">
        <div className="flex align-middle">
          <div className="mx-3.5 mr-96 font-bold self-center">User</div>
          <div className="flex align-middle justify-between gap-2">
            <input
              type="text"
              className="border-l-rose-300 ml-3.5 outline-none text-center"
              placeholder="search"
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <div className="flex ml-12">
              <Button
                variant="contained"
                size="small"
                className="h-7 self-center  "
                style={{ marginRight: "20px" }}
                startIcon={<UserPlus size={15} />}
              >
                Add user{" "}
              </Button>
            </div>
          </div>
        </div>
        <div style={{ height: 400 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            onCellClick={handlecellclick}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{
              "& .MuiDataGrid-columnHeaderMenuIcon": {
                color: "#ffffff", // Change the color to white
              },
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "#000000",
                color: "#ffffff", // Change the background color and text color as desired
              },
            }}
          />
        </div>
      </Paper>
    </div>
  );
};

export default User;