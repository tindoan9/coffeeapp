import React, { useState } from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
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
  FiLogOut,
} from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import NavBarAdmin from '../../../../../components/layouts/NabarAdmin-Layout/components/NabarAdmin';
const orderRouter = {
  all:{ title: 'All', url: '/admin/products/all' },
  coffee:{ title: 'Coffee', url: '/admin/products/coffee' },
  cake: { title: 'Other', url: '/admin/products/other' },
  add_product: { title: 'Add-Product', url: '/admin/products/add-product' },

}
   



export default function ProductLayout() {
  const navigate = useNavigate()
  const [menuCollapse, setMenuCollapse] = useState(false);
  const location = useLocation();

  
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (

    <>
    <NavBarAdmin/>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
              <div className="logotext">
                {!menuCollapse &&<p>Manager</p>}
                <div className="closemenu" onClick={menuIconClick}>
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
            <div className='logout-purchase' onClick={() => navigate(`/`)}>
          <FiLogOut />{!menuCollapse?'Logout':''}
          </div>       
          </SidebarContent>
          
        </ProSidebar>
      </div>
    </>
  );
  
}