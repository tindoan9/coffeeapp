import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Purchase from "./AdminPages/Purchase/Purchase";
import Edit from "./AdminPages/Edit/Edit";
// import AProduct from "./AdminPages/Products/ProductPage/AProduct";
import Products from "./AdminPages/Products/Products";
import NavBarAdmin from "./NavBarAdmin/NavBarAdmin";
import Turnover from "./AdminPages/Turnover";





function Admin() {
    return(
        <div className="admin-router">

            <BrowserRouter>
                <NavBarAdmin/>
                <Routes>
                    {/* <Route path="/" element ={<Navigate to="/admin/products"/>}/>
                    <Route path="/admin/products" element ={<AProduct/>}/> */}
                    <Route path="/" element ={<Navigate to="/admin/products"/>}/>
                    <Route path="/admin/products" element ={<Navigate to="/admin/products/all"/>}/>
                        <Route path="/admin/products/all" element = {<Products/>}></Route>
                        <Route path="/admin/products/coffee" element = {<Products/>}></Route>
                        <Route path="/admin/products/fruit-tea" element = {<Products/>}></Route>
                        <Route path="/admin/products/cake" element = {<Products/>}></Route>
                        <Route path="/admin/products/add-product" element = {<Products/>}></Route>
                    <Route path="/admin/purchase" element = {<Navigate to="/admin/purchase/confirm"/>}></Route>
                        <Route path="/admin/purchase/confirm" element = {<Purchase/>}></Route>                    
                        <Route path="/admin/purchase/delivering" element = {<Purchase/>}></Route>
                        <Route path="/admin/purchase/delivered" element = {<Purchase/>}></Route>
                        <Route path="/admin/purchase/cancel" element = {<Purchase/>}></Route>
                    <Route path="/admin/turnover" element = {<Turnover/>}></Route>
                    <Route path="/admin/edit/:id" element = {<Edit/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Admin;