import React, { useState } from "react";
import './Things.css'

import Paper from "@mui/material/Paper";
import { CloudDownload } from "lucide-react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth } from "../pages/AuthContext";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "id", headerName: "No", width: 70 },
  { field: "ThingsName", headerName: "ThingsName", width: 130 },
  { field: "ProductName", headerName: "ProductName", width: 200 },
  {
    field: "Name",
    headerName: "Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 150,
  },
  {
    field: "Admin",
    headerName: "Admin",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "User",
    headerName: "User",
    sortable: false,
    width: 160,
  },
];

const onlineRows = [
  {
    id: 1,
    ThingsName: "FW_4022D8282B70",
    ProductName: "6CH2F-SBA-SwitchBoard",
    Name: "4+2",
    Admin: "sambandi2001@gmail.com",
    User: "sambandi2001@gmail.com",
    date: "21-12-22 10:30 am",
  },
  {
    id: 2,
    ThingsName: "FW_4022D8282B70",
    ProductName: "6CH2F-SBA-SwitchBoard",
    Name: "4+2 hyd test1",
    Admin: "infosuvana@gmail.com",
    User: "infosuvana@gmail.com",
    date: "21-12-22 10:30 am",
  },
  {
    id: 3,
    ThingsName: "FW_4022D8282B70",
    ProductName: "6CH2F-SBA-SwitchBoard",
    Name: "8+2 test Hyd",
    Admin: "xoboxot602@watrf.com",
    User: "xoboxot602@watrf.com",
    date: "21-12-22 10:30 am",
  },
  {
    id: 4,
    ThingsName: "FW_4022D8282B70",
    ProductName: "6CH2F-SBA-SwitchBoard",
    Name: "prv-10ch2f-b80",
    Admin: "sambandi2001@gmail.com",
    User: "sambandi2001@gmail.com",
    date: "21-12-22 10:30 am",
  },
];

const offlineRows = [
  {
    id: 1,
    ThingsName: "EC_29JD02KOD",
    ProductName: "7KD-3JD-29JD",
    Name: "12",
    Admin: "ABCCC@gmail.com",
    User: " QEQAVADS@gmail.com",
    date: "21-12-22 10:30 am",
  },
  {
    id: 2,
    ThingsName: "EC_29JD02KOD",
    ProductName: "7KD-3JD-29JD",
    Name: "12",
    Admin: "ABCCC@gmail.com",
    User: " QEQAVADS@gmail.com",
    date: "21-12-22 10:30 am",
  },
  {
    id: 3,
    ThingsName: "EC_29JD02KOD",
    ProductName: "7KD-3JD-29JD",
    Name: "12",
    Admin: "ABCCC@gmail.com",
    User: " QEQAVADS@gmail.com",
    date: "21-12-22 10:30 am",
  },
  {
    id: 4,
    ThingsName: "EC_29JD02KOD",
    ProductName: "7KD-3JD-29JD",
    Name: "12",
    Admin: "ABCCC@gmail.com",
    User: " QEQAVADS@gmail.com",
    date: "21-12-22 10:30 am",
  },
];

const totalRows = [
  {
    id: 1,
    ThingsName: "EC_29JD02KOD",
    ProductName: "7KD-3JD-29JD",
    Name: "12",
    Admin: "ABCCC@gmail.com",
    User: " QEQAVADS@gmail.com",
    date: "21-12-22 10:30 am",
  },
];

const Things = () => {
  const com = 24;
  const fail = 512;
  const total = com + fail;
  const per = ((com / total) * 100).toFixed(2);
  const perce = ((fail / total) * 100).toFixed(2);
  const { setselectedthing } = useAuth();
  const [selectedData, setSelectedData] = useState({
    type: "Online",
    data: onlineRows,
  });
  const [selectedDiv, setSelectedDiv] = useState("Online");

  const handleDeviceClick = (data, divType) => {
    setSelectedData(data);
    setSelectedDiv(divType);
  };
  const navigate = useNavigate();
  const handlecellclick = (params) => {
    setselectedthing(params.row);
    navigate("/things/thingsdetails");
  };

  return (
    <div className="no-scrollbar mt-3">
      <div className="flex justify-between items-center px-8 gap-8 duration-75 select-none mx-auto my-6">
        <div
          className={`flex justify-between items-center flex-grow h-24 bg-white w-72 rounded-lg ${selectedDiv === "Online"
            ? "shadow-2xl shadow-blue-500"
            : "shadow-lg"
            } px-7 py-7 text-black overflow-hidden `}
          onClick={() =>
            handleDeviceClick({ type: "Online", data: onlineRows }, "Online")
          }
        >
          <div className="flex flex-col font-semibold gap-2 z-10">
            <p className="text-lg">Online devices</p>
            <p>{com}</p>
            <p>{per}</p>
          </div>
          <div className='thingsActv-logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>

            </svg>
          </div>
        </div>
        <div
          className={`flex justify-between items-center flex-grow h-24 bg-white w-72 rounded-lg ${selectedDiv === "Offline"
            ? "shadow-2xl shadow-blue-500"
            : "shadow-lg"
            } px-7 py-7 overflow-hidden`}
          onClick={() =>
            handleDeviceClick({ type: "Offline", data: offlineRows }, "Offline")
          }
        >
          <div className="flex flex-col font-semibold gap-2">
            <p className="text-lg">Offline devices</p>
            <p>{fail}</p>
            <p>{perce}</p>
          </div>
          <div className="thingsDactv-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor"

              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          </div>
        </div>
        <div
          className={`flex justify-between items-center flex-grow h-24 bg-white w-72 rounded-lg ${selectedDiv === "Total" ? "shadow-2xl shadow-blue-500" : "shadow-lg"
            } px-7 py-7 overflow-hidden`}
          onClick={() =>
            handleDeviceClick({ type: "Total", data: totalRows }, "Total")
          }
        >
          <div className="flex flex-col font-semibold gap-2">
            <p className="text-lg">Total Devices</p>
            <p>{total}</p>
          </div>
          <div className="thingsMicro-logo">
            <i class="fa-solid fa-microchip"></i>
          </div>
        </div>
      </div>
      <div className="flex align-middle justify-center top-10 relative -mb-11 w-full ">
        <Paper variant="elevation" className="w-max max-w-[1200px]">
          <div className="flex align-middle">
            <div className="mx-3.5 mr-96 font-bold self-center align-middle flex">
              <CloudDownload />
              <p className="mx-5">OTA Release</p>
            </div>
            <div className="flex align-middle justify-between g-y-2">
              <input
                type="text"
                className="border-l-rose-300 ml-3.5 outline-none text-center"
                placeholder="search"
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          <div style={{ height: 400 }}>
            {selectedData ? (
              <DataGrid
                rows={selectedData.data}
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
                    color: "#ffffff",
                  },
                  "& .MuiDataGrid-columnHeader": {
                    backgroundColor: "#000000",
                    width: "100%",
                    color: "#ffffff",
                  },
                }}
              />
            ) : (
              <div>Click on a device card to display the details</div>
            )}
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Things;