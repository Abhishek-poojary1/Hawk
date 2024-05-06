import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { UserPlus, CloudDownload } from "lucide-react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import cloud from "./img/cloud.png";
import { useNavigate } from "react-router-dom"; // Import the useHistory hook
import { useAuth } from "../pages/AuthContext";

const columns = [
  { field: "id", headerName: "No", width: 70 },
  { field: "JOBID", headerName: "JOB ID", width: 130 },
  { field: "TargetType", headerName: "Target Type", width: 200 },
  {
    field: "TargetName",
    headerName: "Target Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 150,
  },
  {
    field: "Version",
    headerName: "Version",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "Timestamp",
    headerName: "Time stamp",
    sortable: true,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    JOBID: "6CH2F-SBA-SwitchBoard-1-0-8",
    TargetType: "Software",
    TargetName: "FW_4022D8282B70",
    Version: "1.0.1",
    Timestamp: "Tue Feb 27 2024 11:16:24",
  },
  {
    id: 2,
    JOBID: "4C2FF-1-0-1",
    TargetType: "Production",
    TargetName: "6CH1F-SBA-SwitchBoard",
    Version: "1.0.2",
    Timestamp: "Fri Feb 23 2024 13:02:02",
  },
  {
    id: 3,
    JOBID: "6CH1F-SBA-SwitchBoard-1-0-1",
    TargetType: "Deployment",
    TargetName: "FW_4022D8282B88",
    Version: "1.2.1",
    Timestamp: "Tue Jan 23 2024 17:19:55",
  },
  {
    id: 4,
    JOBID: "	6CH2F-SBA-SwitchBoard-1-0-6",
    TargetType: "Production",
    TargetName: "FW_4022D8282B80",
    Version: "1.3.5",
    Timestamp: "Tue Jan 23 2024 02:32:12",
  },
  {
    id: 5,
    JOBID: "10CH2F-SBA-SwitchBoard-1-0-2",
    TargetType: "Deployment",
    TargetName: "FW_4022D8282B74",
    Version: "1.3.4",
    Timestamp: "Wed Jan 17 2024 15:04:55",
  },
];

const OTA = () => {
  const com = 24;
  const fail = 512;
  const total = com + fail;
  const per = ((com / total) * 100).toFixed(2);
  const perce = ((fail / total) * 100).toFixed(2);
  const navigate = useNavigate();
  const { setSelectedCell, isDarkMode } = useAuth();

  const handleCellClick = (params) => {
    setSelectedCell(params.row);
    navigate("/OTA/details");
  };
  return (
    <div className="h-[calc(100vh-48px)] overflow-y-auto no-scrollbar mt-3">
      <div className="product-status">
        <div
          className={`product-card  ${
            isDarkMode ? "bg-[#313135] text-white" : ""
          }`}
        >
          <div>
            <div className="prd-crd-lbl">Completed OTA Jobs</div>
            <div className="prd-crd-dt">23</div>
            <div>3.1 %</div>
          </div>
          <div className="actv-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
          </div>
        </div>

        <div
          className={`product-card  ${
            isDarkMode ? "bg-[#313135] text-white" : ""
          }`}
        >
          <div>
            <div className="prd-crd-lbl">Failed OTA Jobs</div>
            <div className="prd-crd-dt">756</div>
            <div>97 %</div>
          </div>
          <div className="dactv-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          </div>
        </div>

        <div
          className={`product-card  ${
            isDarkMode ? "bg-[#313135] text-white" : ""
          }`}
        >
          <div>
            <div className="prd-crd-lbl">Total OTA Jobs</div>
            <div className="prd-crd-dt">779</div>
            <div>&nbsp;</div>
          </div>
          <div className="prd-logo">
            <i class="fa-solid fa-boxes-stacked"></i>
          </div>
        </div>
      </div>

      <div className="flex align-middle justify-center top-10 relative -mb-11  w-full ">
        <Paper
          variant="elevation"
          className={`-max max-w-[1200px]   ${
            isDarkMode ? "bg-[#313135] text-white" : ""
          }`}
        >
          <div
            className={`flex align-middle   ${
              isDarkMode ? "bg-[#313135] text-white" : ""
            }`}
          >
            <div className="mx-3.5 mr-96 font-bold self-center align-middle flex">
              <CloudDownload />
              <p className="mx-5">OTA Release</p>
            </div>
            <div
              className={`flex align-middle justify-between g-y-2   ${
                isDarkMode ? "bg-[#313135] text-white" : ""
              }`}
            >
              <input
                type="text"
                className={`border-l-rose-300 ml-3.5 outline-none text-center   ${
                  isDarkMode ? "bg-[#313135] text-white" : ""
                }`}
                placeholder="search"
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          <div style={{ height: 400 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              className={`  ${isDarkMode ? "bg-[#313135] text-white" : ""}`}
              onCellClick={handleCellClick} // Add this event handler
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
                  width: "100%",
                  color: "#ffffff", // Change the background color and text color as desired
                },
              }}
              cellClassNameRules={{
                targetNameCell: () => ({
                  backgroundColor: "#000000", // Set background color to yellow
                }),
              }}
            />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default OTA;
