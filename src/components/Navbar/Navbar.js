import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";

const Navbar = () => {
  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Logo</strong>
      </MDBNavbarBrand>
    </MDBNavbar>
  );
};

export default Navbar;
