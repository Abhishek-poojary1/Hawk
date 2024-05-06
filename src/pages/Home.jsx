import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import User from "./User";
import { useLocation } from "react-router-dom";
import UserGroup from "./UserGroups";
import DashMain from "../Dashboard/DashMain";
import Product from "../product/Product";
import ProductDetailPage from "../product/ProductDetailPage";
import OTA from "../ota/OTA";
import OTADetails from "../ota/Detailspage";
import Avatar from "@mui/material/Avatar";
import Things from "../things/Things";
import Thingsdetails from "../things/Thingsdetails";
import UserDetails from "./UserDetails";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useAuth } from "../pages/AuthContext";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Home = (props) => {
  const location = useLocation();
  const { isDarkMode, handleThemeChange } = useAuth();

  const bodyClassName = isDarkMode ? "dark-mode" : "light-mode";

  // Render different components based on the pathname
  const renderContent = () => {
    const { pathname } = location;

    switch (pathname) {
      case "/Dashboard":
        return <DashMain />;
      case "/Product":
        return <Product />;
      case "/Users":
        return <User />;
      case "/UserGroups":
        return <UserGroup />;
      case "/OTA":
        return <OTA />;
      case "/Things":
        return <Things />;
      case "/things/thingsdetails":
        return <Thingsdetails />;
      case "/OTA/details":
        return <OTADetails />;
      case "/User/userdetails":
        return <UserDetails />;
      default:
        // Check if the path matches the pattern '/product/:id'
        if (pathname.startsWith("/Product/")) {
          // Extract the product ID from the pathname
          const productId = pathname.split("/")[2];
          // Render a component for displaying product details using the product ID
          return <ProductDetailPage productId={productId} />;
        }
        // Return null for unknown paths
        return null;
    }
  };
  const navbarStyle = isDarkMode
    ? { backgroundColor: "#303064" }
    : { backgroundColor: "#7A7069" };

  return (
    <div className={`w-full ${bodyClassName}`}>
      <div
        className="h-12 bg-[#7A7069]	shadow-lg flex  justify-between"
        style={navbarStyle}
      >
        <div style={{ margin: "0 auto" }}>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <TextField
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Box>
        </div>
        <div className="flex mr-8 justify-end items-center ">
          <FormControlLabel
            control={
              <MaterialUISwitch
                sx={{ m: 1 }}
                checked={isDarkMode}
                onChange={handleThemeChange}
              />
            }
          />
          <Avatar sx={{ bgcolor: "#243151" }}>S</Avatar>
          <span className="mr-1 ml-1 text-white">Smartbuildauto</span>
        </div>
      </div>
      <div className="flex-1 w-full h-[calc(100vh-48px)] overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
