import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function ProtectedRoute(props) {
 
  return <>{props.children}</>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
