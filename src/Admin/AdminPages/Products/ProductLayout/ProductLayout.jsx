import React, { useState } from 'react';

import { Link, useLocation } from "react-router-dom";
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
  all:{ title: 'All', url: '/admin/products/all' },
  coffee:{ title: 'Coffee', url: '/admin/products/coffee' },
  fruit_tea: { title: 'Fruit-Tea', url: '/admin/products/fruit-tea' },
  cake: { title: 'Cake', url: '/admin/products/cake' },
  add_product: { title: 'Add-Product', url: '/admin/products/add-product' },

}
   



export default function ProductLayout() {
  
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