import React from 'react';
import PropTypes from "prop-types";
import TurnoverLayout from "./TurnoverLayout"

AdminTurnoverLayout.propTypes = {
    children: PropTypes.element,
}
export default function AdminTurnoverLayout(props) {
    const {children} = props
    return ( 
        <>
            <TurnoverLayout/>
            {children}
        </>
     );
}