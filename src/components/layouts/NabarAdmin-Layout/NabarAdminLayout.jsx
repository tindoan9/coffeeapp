import React from 'react';
import PropTypes from "prop-types";
import NavBarAdmin from './components/NabarAdmin';

NavBarAdminLayout.propTypes = {
    children: PropTypes.element,
  };

export default function NavBarAdminLayout(props) {
    const { children } = props;
    return (
        <>
            <NavBarAdmin/>
            {children}
        </>
    )
}