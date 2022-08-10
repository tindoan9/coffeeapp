import React from "react";
import { useLocation } from "react-router-dom";


import AdminProductLayout from "./ProductLayout/AdminProductLayout";
import AddProducts from "./ProductPage/AddProducts";
import AllProducts from "./ProductPage/AllProducts";
import Other from "./ProductPage/Other";
import Coffee from "./ProductPage/Coffee";

function Products() {
  const location = useLocation();


  const renderRouterProducts = () => {
    switch (location.pathname) {
      case "/admin/products/all":
        return <AllProducts/>;
      case "/admin/products/coffee":
        return <Coffee/>;
      case "/admin/products/other":
        return <Other/>;
      case "/admin/products/add-product":
        return  <AddProducts/>
      default:
        return <AllProducts/>;
    }
  };

  return (
    <>
   
  <AdminProductLayout>{renderRouterProducts()}</AdminProductLayout>
    </>)
}

export default Products;
