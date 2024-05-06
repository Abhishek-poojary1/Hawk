import React, { Component } from "react";
import Chart from "react-apexcharts";
import { useState } from "react";
import "./DashMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPersonCircleCheck } from '@fortawesome/free-solid-svg-icons';
// import { faPersonCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { faUsers } from '@fortawesome/free-solid-svg-icons';
// import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
// import Topnavbar from './Topnavbar';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import PublishMassge from "../graph/PublishMassge";
import DeliverdMassge from "../graph/DeliverdMassge";
import DropedMassge from "../graph/DropedMassge";

import { useAuth } from "../pages/AuthContext";

// table section
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from '@mui/material/Paper';
//import Paper from '@mui/material/esm/Paper';
//import { Paper } from '@mui/material';
const { default: Paper } = await import("@mui/material/Paper");

//import sbwhiteredlogo from './img/smartbuildlogo.png'
// const [ searchArea , setSearchArea ] = useState('');

const DashMain = () => {
  const { isDarkMode } = useAuth();

  // State to manage the selected filter
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Handler function to handle filter change
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    // You can perform additional actions based on the selected filter if needed
  };

  const rows = [
    { name: "FW_4022D8282B88", calories: 319 },
    { name: "FW_4022D8282B8C", calories: 237 },
    { name: "FW_48E72907EA20", calories: 262 },
    { name: "FW_4022D8282B68", calories: 305 },
    { name: "FW_48E72908EB3", calories: 356 },
  ];

  return (
    <div>
      <div className="main-content">
        <div className="product-status2">
          <div
            className={`product-card2 ${
              isDarkMode ? "text-white bg-[#313135]" : "shadow-xl	"
            }`}
          >
            <div>
              <div className="prd-crd-lbl2">Online Devices</div>
              <div className="prd-crd-dt2">15</div>
              <div>45.65 %</div>
            </div>
            <div className="actv-logo2">
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
            className={`product-card2 ${
              isDarkMode ? "text-white bg-[#313135]" : "shadow-xl	"
            }`}
          >
            <div>
              <div className="prd-crd-lbl2">Offline Devices</div>
              <div className="prd-crd-dt2">6</div>
              <div>54 %</div>
            </div>
            <div className="dactv-logo2-2">
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
            className={`product-card2 ${
              isDarkMode ? "text-white bg-[#313135]" : "shadow-xl	"
            }`}
          >
            <div>
              <div className="prd-crd-lbl2">Total Device</div>
              <div className="prd-crd-dt2">11</div>
              <div>&nbsp;</div>
            </div>
            <div className="micro-logo2">
              <i class="fa-solid fa-microchip"></i>
            </div>
          </div>

          <div
            className={`product-card2 ${
              isDarkMode ? "text-white bg-[#313135]" : "shadow-xl	"
            }`}
          >
            <div>
              <div className="prd-crd-lbl2">Total Products</div>
              <div className="prd-crd-dt2">13</div>
              <div>&nbsp;</div>
            </div>
            <div className="tot-logo2">
              <i class="fa-solid fa-boxes-stacked"></i>
            </div>
          </div>
        </div>

        <div
          className="msgFilter"
          style={{
            display: "flex",
            paddingLeft: 20,
            paddingRight: 50,
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          {/* Label on the left */}
          <label
            style={{ fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.25 }}
          >
            Total Messages: 64150
          </label>

          {/* Dropdown select for filter on the right */}
          <select
            className={`rounded-sm	text-sm	 ${
              isDarkMode ? "bg-[#313135] text-white" : ""
            }`}
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option className="filtr" value="14">
              Last 14 Day's
            </option>
            <option className="filtr" value="7">
              Last 7 Day's
            </option>
            <option className="filtr" value="1">
              Last 24 Hours
            </option>
          </select>
        </div>

        <section className="xyz" style={{ paddingTop: 30 }}>
          {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' style={{ display: 'flex'}}> */}
          <div
            className={`msg-card ${
              isDarkMode ? "bg-[#313135] text-white" : ""
            }`}
            style={{ opacity: 1, transform: "none" }}
          >
            <div
              className="px-4 py-3 flex gap-2 justify-between item-center"
              style={{ display: "flex", alignItems: "center", height: "20px" }}
            >
              <div className="flex items-center">
                <div className="gCard1"></div>
                <h4>&nbsp;Publish Message</h4>
              </div>
              <span
                className="content-heading dark:text-white right:0"
                style={{ paddingLeft: "50px" }}
              >
                32601
              </span>
            </div>

            <div
              className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
              style={{
                borderRadius: "0 0 10px 10px",
                marginTop: 10,
              }}
            >
              <PublishMassge />
            </div>
          </div>

          <div
            className={`msg-card ${
              isDarkMode ? "bg-[#313135] text-white" : ""
            }`}
            style={{ opacity: 1, transform: "none" }}
          >
            <div
              className="px-4 py-3 flex gap-2 justify-between item-center"
              style={{ display: "flex", alignItems: "center", height: "20px" }}
            >
              <div className="flex items-center">
                <div className="gCard2"></div>
                <h4>&nbsp;Delivered Message</h4>
              </div>
              <span
                className="content-heading dark:text-white right:0"
                style={{ paddingLeft: "50px" }}
              >
                {" "}
                3267
              </span>
            </div>

            <div
              className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
              style={{
                borderRadius: "0 0 10px 10px",
                marginTop: 10,
              }}
            >
              <DeliverdMassge />
            </div>
          </div>

          <div
            className={`msg-card ${
              isDarkMode ? "bg-[#313135] text-white" : ""
            }`}
            style={{ opacity: 1, transform: "none" }}
          >
            <div
              className="px-4 py-3 flex gap-2 justify-between item-center"
              style={{ display: "flex", alignItems: "center", height: "20px" }}
            >
              <div className="flex items-center">
                <div className="gCard3"></div>
                <h4>&nbsp;Dropped Messages</h4>
              </div>
              <span
                className="content-heading dark:text-white right:0"
                style={{ paddingLeft: "50px" }}
              >
                25015
              </span>
            </div>

            <div
              className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
              style={{
                borderRadius: "0 0 10px 10px",
                marginTop: 10,
              }}
            >
              <DropedMassge />
            </div>
          </div>

          {/* </div> */}
        </section>

        <div
          className="msgFilter"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 20,
            alignItems: "center",
            paddingTop: 30,
          }}
        >
          {/* Label on the left */}
          <label
            style={{ fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.25 }}
          >
            Recent Updates
          </label>
        </div>

        <div className="tableContainer">
          <div
            className={`tableCard shadow-2xl select-none ${
              isDarkMode ? "bg-[#313135] text-white" : ""
            } transition-box-shadow`}
          >
            <div
              className="msgFilter"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              {/* Label on the left */}
              <label>Most Active Devices</label>

              {/* Dropdown select for filter on the right */}
              <select
                className={`filtr text-sm ${
                  isDarkMode ? "bg-[#313135] text-white" : " "
                }`}
                value={selectedFilter}
                onChange={handleFilterChange}
              >
                <option value="14">Last 14 Day's</option>
                <option value="7">Last 7 Day's</option>
                <option value="1">Last 24 Hours</option>
              </select>
            </div>
            <div
              component={Paper}
              className={`tableContainer ${
                isDarkMode ? "bg-[#313135] text-white" : ""
              }`}
            >
              <Table>
                <TableHead style={{ backgroundColor: "blue" }}>
                  <TableRow>
                    <TableCell
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Number
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody
                  className={`tableContainer ${
                    isDarkMode ? "bg-[#313135] text-white" : ""
                  }`}
                >
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      className={`tableContainer ${
                        isDarkMode ? "bg-[#313135] text-white" : ""
                      }`}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className={`tableContainer ${
                          isDarkMode ? "bg-[#313135] text-white" : ""
                        }`}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="right"
                        className={`tableContainer ${
                          isDarkMode ? "bg-[#313135] text-white" : ""
                        }`}
                      >
                        {row.calories}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div
            className={`tableCard ${
              isDarkMode ? "bg-[#313135] text-white" : ""
            }`}
          >
            <div
              className="msgFilter"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              {/* Label on the left */}
              <label>Recent Updates</label>
            </div>
            <TableContainer
              component={Paper}
              className={` ${isDarkMode ? "bg-[#313135] text-white" : ""}`}
            >
              <Table
                className={`tableContainer ${
                  isDarkMode ? "bg-[#313135] text-white" : ""
                }`}
              >
                <TableHead style={{ backgroundColor: "blue" }}>
                  <TableRow>
                    <TableCell
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Device Name
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Priority
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Created At
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody
                  className={`tableContainer ${
                    isDarkMode ? "bg-[#313135] text-white" : ""
                  }`}
                >
                  <TableRow>
                    <TableCell
                      className={`tableContainer ${
                        isDarkMode ? "bg-[#313135] text-white" : ""
                      }`}
                      colSpan={3}
                    >
                      <h5>No incident</h5>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashMain;
