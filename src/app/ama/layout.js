import React, { Children } from "react";
import NavBar from "../../components/UI/NavBar";

const layout = ({ children}) => {
    return <><NavBar />{children }</>;
};

export default layout;
