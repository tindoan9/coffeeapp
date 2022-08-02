import React, { useState } from 'react';

import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import {
 
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
const orderRouter = {
  confirm:{ title: 'Chờ xác nhận', url: '/admin/purchase/confirm' },
  delivering: { title: 'Đang giao', url: '/admin/purchase/delivering' },
  delivered: { title: 'Đã nhận', url: '/admin/purchase/delivered' },
  cancel: { title: 'Đã hủy', url: '/admin/purchase/cancel' },

}
   

// const orderRouter = {
//   confirm: { title: 'Chờ xác nhận', url: '/admin/purchase/confirm' },
//   delivering: { title: 'Đang giao', url: '/admin/purchase/delivering' },
//   delivered: { title: 'Đã nhận', url: '/admin/purchase/delivered' },
//   cancel: { title: 'Đã hủy', url: '/admin/purchase/cancel' },

// }

export default function PurchaseLayout() {
  
  const [menuCollapse, setMenuCollapse] = useState(false);
  const location = useLocation();

  
  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (

    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
              <div className="logotext">
                {/* small and big change using menucollapse state */}
                {!menuCollapse &&<p>Manager</p>}
                <div className="closemenu" onClick={menuIconClick}>
                  {/* changing menu collapse icon on click */}
                  {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
                </div>
              </div>
            </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              {Object.entries(orderRouter).map(([key, value]) => {
                return (
                  <MenuItem
                    active={location.pathname === value.url}
                    key={key}
                    
                  >
                    <Link className='purchase-nav' to={value.url}>{value.title}</Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </SidebarContent>
          
        </ProSidebar>
      </div>
    </>
  );
  
}