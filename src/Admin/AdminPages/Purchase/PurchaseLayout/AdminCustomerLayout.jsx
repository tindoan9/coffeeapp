import React from 'react';
import PropTypes from "prop-types";
import PurchaseLayout from './PurchaseLayout';


// PurchaseHistoryLayout.propTypes = {
//     children: PropTypes.element,
//   };

export default function AdminPurchaseLayout(props) {
    const { children } = props;
    return (
        <>
        <PurchaseLayout/>
        {children}
        </>
    )
}