import React, { useState } from "react";
import Sidebar, { SidebarItem } from "./Dash";
import {
  LifeBuoy,
  Receipt,
  UserCircle,
  LayoutDashboard,
  ShoppingBasket,
  Settings,
  Cpu,
  Backpack,
  CloudDownload,
  Monitor,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Home from "./Home";
const Dashboard = () => {
  const [monitorsub, setmonitorsub] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  let homeProp = currentPath;

  return (
    <>
      <div className="flex w-full no-underline  overflow-y-auto no-scrollbar">
        <Sidebar className="no-underline">
          <Link to="/Dashboard">
            <SidebarItem
              icon={<LayoutDashboard size={20} color="white" />}
              text="Dashboard"
              alert
            />
          </Link>
          <Link to="/Product">
            <SidebarItem
              icon={<ShoppingBasket size={20} color="white" />}
              text="Product"
              active
            />{" "}
          </Link>
          <Link to="/Things">
            <SidebarItem
              icon={<Cpu size={20} color="white" />}
              text="Things"
              active
            />{" "}
          </Link>
          <Link to="/Inventory">
            <SidebarItem
              icon={<Backpack size={20} color="white" />}
              text="Inventory"
              active
            />{" "}
          </Link>
          <Link to="/Users">
            <SidebarItem
              icon={<UserCircle size={20} color="white" />}
              text="Users"
              active
            />{" "}
          </Link>
          <div onClick={() => setmonitorsub(!monitorsub)}>
            <SidebarItem
              icon={<Monitor size={20} color="white" />}
              text="Montior"
              withSubMenu
              isOpen={monitorsub}
            />{" "}
          </div>
          {monitorsub && (
            <div className="submenu">
              <Link to="/Dash">
                <SidebarItem text="DashBoard" />
              </Link>
              <Link to="/Logs">
                <SidebarItem text="Logs" />
              </Link>
            </div>
          )}
          <Link to="/OTA">
            {" "}
            <SidebarItem
              icon={<CloudDownload size={20} color="white" />}
              text="OTA Realeses"
              alert
            />{" "}
          </Link>{" "}
          <Link to="/Billings">
            {" "}
            <SidebarItem
              icon={<Receipt size={20} color="white" />}
              text="Device management"
            />{" "}
          </Link>
          <hr className="my-3" />
          <Link to="/Settings">
            <SidebarItem
              icon={<Settings size={20} color="white" />}
              text="Settings"
            />{" "}
          </Link>{" "}
          <Link to="/Help">
            {" "}
            <SidebarItem
              icon={<LifeBuoy size={20} color="white" />}
              text="Help"
            />{" "}
          </Link>
        </Sidebar>
        <Home message={homeProp} />
      </div>
    </>
  );
};

export default Dashboard;
