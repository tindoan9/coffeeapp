
import React from "react";
import { useLocation } from "react-router-dom";
import AdminPurchaseLayout from "./PurchaseLayout/AdminCustomerLayout";

import { Cancel } from "./PurchasePage/Cancel";

import { Confirm } from "./PurchasePage/Confirm";
import { Delivered } from "./PurchasePage/Delivered";
import { Delivering } from "./PurchasePage/Delivering";

function Purchase() {
  const location = useLocation();


  const renderRouterPurchase = () => {
    switch (location.pathname) {
      case "/admin/purchase/confirm":
        return <Confirm/>;
      case "/admin/purchase/delivering":
        return <Delivering/>;
      case "/admin/purchase/delivered":
        return <Delivered/>;
      case "/admin/purchase/cancel":
        return  <Cancel/>
      default:
        return <Confirm/>;
    }
  };

  return <AdminPurchaseLayout>{renderRouterPurchase()}</AdminPurchaseLayout>;
}

export default Purchase;
