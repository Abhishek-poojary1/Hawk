import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAuth } from "../pages/AuthContext";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { isDarkMode } = useAuth();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%" }}
      className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
    >
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className={`${isDarkMode ? "bg-[#313135] text-white" : ""}`}
        >
          <Tab
            className={`${isDarkMode ? " text-white" : ""}`}
            label="Product Details"
            {...a11yProps(0)}
          />
          <Tab
            className={`${isDarkMode ? " text-white" : ""}`}
            label="Aditional Details"
            {...a11yProps(1)}
          />
          <Tab
            className={`${isDarkMode ? " text-white" : ""}`}
            label="Topics"
            {...a11yProps(2)}
          />
          <Tab
            className={`${isDarkMode ? " text-white" : ""}`}
            label="Product Setting"
            {...a11yProps(3)}
          />
          <Tab
            className={`${isDarkMode ? " text-white" : ""}`}
            label="Monitor Templets"
            {...a11yProps(4)}
          />
          <Tab
            className={`${isDarkMode ? " text-white" : ""}`}
            label="How To Connect"
            {...a11yProps(5)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Product Details
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Aditional Details
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Topics
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Product Setting
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Monitor Templets
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        How To Connect
      </CustomTabPanel>
    </Box>
  );
}
