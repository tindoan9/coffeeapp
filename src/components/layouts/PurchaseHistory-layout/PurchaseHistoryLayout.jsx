import React from 'react';
import PropTypes from "prop-types";
import PurchaseHistoryHeader from './components/PurchaseHistoryHeader/PurchaseHistoryHeader';

// PurchaseHistoryLayout.propTypes = {
//     children: PropTypes.element,
//   };

export default function PurchaseHistoryLayout(props) {
    const { children } = props;
    return (
        <>
        <PurchaseHistoryHeader/>
        {children}
        </>
    )
}