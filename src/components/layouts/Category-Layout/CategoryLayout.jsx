import React from 'react';
import PropTypes from "prop-types";
import NavBar from '../NavbarUser-Layout/components/NavBar/NavBar';
import CategoryHeader from './components/CategoryHeader';
import FooterCbn from '../../../pages/HomePage/Footer/Footer';

CategoryLayout.propTypes = {
    children: PropTypes.element,
  };

export default function CategoryLayout(props) {
    const { children } = props;
    return (
        <>
            <NavBar/>
            <CategoryHeader/>
            {children}
            <FooterCbn/>
        </>
    )
}