import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import SidebarSuperAd from "./SidebarSuperAd";


const LayoutSuperAd = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
      <SidebarSuperAd />
      <div className="xl:col-span-5">
        <HeaderAdmin />
        <div className="h-[90vh] overflow-y-scroll p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutSuperAd;
