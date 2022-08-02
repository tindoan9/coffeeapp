import React from 'react';
import PropTypes from "prop-types";

import ProductLayout from './ProductLayout';

// PurchaseHistoryLayout.propTypes = {
//     children: PropTypes.element,
//   };

export default function AdminProductLayout(props) {
    const { children } = props;
    return (
        <>
        <ProductLayout/>
        {children}
        </>
    )
}