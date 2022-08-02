
import React from "react";
import { useLocation } from "react-router-dom";


import AdminProductLayout from "./ProductLayout/AdminProductLayout";
import AddProducts from "./ProductPage/AddProducts";
import AllProducts from "./ProductPage/AllProducts";
import Cake from "./ProductPage/Cake";
import Coffee from "./ProductPage/Coffee";
import FruitTea from "./ProductPage/FruitTea";

function Products() {
  const location = useLocation();


  const renderRouterProducts = () => {
    switch (location.pathname) {
      case "/admin/products/all":
        return <AllProducts/>;
      case "/admin/products/coffee":
        return <Coffee/>;
      case "/admin/products/fruit-tea":
        return <FruitTea/>;
      case "/admin/products/cake":
        return <Cake/>;
      case "/admin/products/add-product":
        return  <AddProducts/>
      default:
        return <AllProducts/>;
    }
  };

  return <AdminProductLayout>{renderRouterProducts()}</AdminProductLayout>;
}

export default Products;
