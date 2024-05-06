import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../pages/AuthContext";
import Divider from "@mui/material/Divider";
import {
  Key,
  Airplay,
  Cpu,
  RotateCcw,
  Trash2,
  Package,
  Ticket,
  Share2,
  Edit,
  User,
} from "lucide-react";

import { CloudDownload } from "lucide-react";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Add } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Thingsdetails = () => {
  const location = useLocation();
  const { thingsdata } = useAuth();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // Check if the location state is available
  const [anchorEl, setAnchorEl] = useState(null);

  // Extract the row data from the location state
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (thingsdata === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex flex-col items-center no-scrollbar">
        <div className="h-1/42 w-4/5 shadow-2xl	 my-4 flex flex-col  select-none rounded p-10">
          <div className=" flex items-center gap-4 font-medium mb-1.5	 text-xl ">
            {" "}
            <div className="flex gap-5 mr-auto">
              <CloudDownload />
              {thingsdata.ThingsName}{" "}
            </div>
            <div className=" self-center">
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Options
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <EditIcon />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <RotateCcw size={19} className="mr-3" />
                  Reboot{" "}
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <Trash2 size={19} className="mr-3" />
                  Delete{" "}
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <Package size={19} className="mr-3" />
                  Update History{" "}
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <Ticket size={19} className="mr-3" />
                  Tickets
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                  <ArchiveIcon />
                  Archive
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <MoreHorizIcon />
                  More
                </MenuItem>
              </StyledMenu>
            </div>
          </div>
          <Divider variant="middle" />
          <div className="text-lg mt-4 ">Device Details</div>
          <div className="flex">
            <div className="row-container flex-auto">
              <div className="flex flex-col gap-4">
                <div className="col gap-1 align-middle items-center">
                  <Share2 size={16} />
                  <span className=" text-sm">Connected since:</span>
                  <span className=" text-sm">{thingsdata.date}</span>
                </div>
                <div className="col gap-1 align-middle items-center">
                  <Share2 size={16} />
                  <span className=" text-sm">disconnected since :</span>
                  <span className=" text-sm">{thingsdata.date}</span>
                </div>

                <div className="col gap-1 align-middle items-center">
                  <Airplay size={16} />
                  <span className=" text-sm">disconnnected Reason:</span>
                  <span className=" text-sm">{thingsdata.ProductName}</span>
                </div>
                <div className="col gap-1 align-middle items-center">
                  <Cpu size={16} />
                  <span className=" text-sm">Product Name:</span>
                  <span className=" text-sm">{thingsdata.Name}</span>
                </div>
                <div className="col gap-1 align-middle items-center">
                  <Cpu size={16} />
                  <span className=" text-sm">Version :</span>
                  <span className=" text-sm">{thingsdata.Name}</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-lg mb-3 ">Additional details</div>
              <div className="col gap-1 justify-start  items-center">
                <Add size={16} />
                <span className=" text-sm">Created at:</span>
                <span className=" text-sm">{thingsdata.date}</span>
              </div>
              <div className="col gap-1 justify-start items-center ">
                <Edit size={16} />
                <span className=" text-sm">disconnected since :</span>
                <span className=" text-sm">{thingsdata.date}</span>
              </div>
              <div className="text-lg mt-2 ">Meta data</div>

              <div className="flex gap-1 items-center content-center justify-start">
                <User size={16} />
                <span className=" text-sm">User :</span>
                <span className=" text-sm">{thingsdata.User}</span>
              </div>
              <div className="flex gap-1 items-center content-center justify-start">
                <User size={16} />
                <span className=" text-sm">Owner :</span>
                <span className=" text-sm">{thingsdata.User}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-10 items-center">
        <div className="ml-5 font-semibold text-xl">Device insight</div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Time</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Today</MenuItem>
              <MenuItem value={20}>This week</MenuItem>
              <MenuItem value={30}>Last 1 hour</MenuItem>
              <MenuItem value={40}>Last 24 hour</MenuItem>
              <MenuItem value={50}>Last 7 days</MenuItem>
              <MenuItem value={40}>Last 30 days</MenuItem>
              <MenuItem value={40}>Last 90 days</MenuItem>
              <MenuItem value={40}>Last 1 year</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default Thingsdetails;
