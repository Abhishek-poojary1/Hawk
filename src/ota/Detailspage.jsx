import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";
import Divider from "@mui/material/Divider";
import { Key, Airplay, History, Cpu, Handshake, Calendar } from "lucide-react";

import { CloudDownload } from "lucide-react";
const DetailsPage = () => {
  const location = useLocation();
  const { selectedCellData } = useAuth();

  // Check if the location state is available
  if (selectedCellData === null) {
    return <div>Loading...</div>;
  }

  // Extract the row data from the location state

  return (
    <div className="flex flex-col items-center">
      <div className="h-1/42 w-4/5 shadow-2xl	 my-4 flex flex-col  select-none rounded p-10">
        <div className="flex gap-4 font-medium mb-1.5	 text-xl ">
          {" "}
          <CloudDownload />
          {selectedCellData.JOBID}{" "}
        </div>
        <Divider variant="middle" />
        <div className="text-lg mt-4 ">OTA release details</div>
        <div className="row-container">
          <div className="row">
            <div className="col gap-1 align-middle items-center">
              <Key size={16} />
              <span className="label">ID:</span>
              <span className="value">{selectedCellData.JOBID}</span>
            </div>

            <div className="col gap-1 align-middle items-center">
              <Airplay size={16} />
              <span className="label">Target Type:</span>
              <span className="value">{selectedCellData.TargetType}</span>
            </div>
            <div className="col gap-1 align-middle items-center">
              <Cpu size={16} />
              <span className="label">Target Name:</span>
              <span className="value">{selectedCellData.TargetName}</span>
            </div>
          </div>
          <div className="row">
            <div className="col gap-1 align-middle  justify-center items-center">
              <Handshake size={16} />
              <span className="label">Partner</span>
              <span className="value">SmartBuild</span>
            </div>
            <div className="col gap-1 align-middle items-center">
              <History size={16} />
              <span className="label">Version:</span>
              <span className="value">{selectedCellData.Version}</span>
            </div>
            <div className="col gap-1 align-middle items-center">
              <Calendar size={16} />
              <span className="label">Created:</span>
              <span className="value">{selectedCellData.Timestamp}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/42 w-4/5 shadow-2xl	 my-4 mt-7 flex flex-col  select-none rounded p-10 ">
        <span className="font-bold">OTA JOBS</span>
      </div>
    </div>
  );
};

export default DetailsPage;
