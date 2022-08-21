import React from 'react';
import PropTypes from "prop-types";
import PurchaseHistoryHeader from './components/PurchaseHistoryHeader/PurchaseHistoryHeader';
import NavBar from '../NavbarUser-Layout/components/NavBar/NavBar';
import FooterCbn from '../../../pages/HomePage/Footer/Footer';

PurchaseHistoryLayout.propTypes = {
    children: PropTypes.element,
  };

export default function PurchaseHistoryLayout(props) {
    const { children } = props;
    return (
        <>
        <NavBar/>
        <PurchaseHistoryHeader/>
        {children}
        <FooterCbn/>
        </>
    )
}