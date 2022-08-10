import React from 'react';
import { NavLink } from 'react-router-dom';
import CoffeeBlue from '../../../../assets/coffee-blue.jpg';


function NavBarAdmin() {
    return(
        <div className='navbar-admin'>           
            <img src={CoffeeBlue} alt="Logo" />  
            <div className="navbar-a btn">
                <NavLink to='/admin/products'>Products</NavLink>
                <NavLink to='/admin/purchase'>Purchase</NavLink>
                <NavLink to='/admin/turnover'>Turnover</NavLink>
            </div>
        </div>
    )
}
export default NavBarAdmin;