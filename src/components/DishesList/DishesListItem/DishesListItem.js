import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBIcon } from "mdbreact";

const DishesListItem = ({ title, price, image, onClick }) => {
  return (
    <MDBCard border="secondary" className="m-3" style={{ width: "18rem" }}>
      <MDBCardHeader>{title}</MDBCardHeader>
      <MDBCardBody className="text-secondary">
        <div className="d-flex">
          <img src={image} alt={title} style={{ width: 100, height: 100 }} />
          <div className="ml-2 p-1 text-center">
            <p style={{ color: "#000" }}>
              <strong>Price:</strong> <span>{price} KGS</span>
            </p>
            <MDBBtn color="secondary" size="sm" onClick={onClick}>
              Add <MDBIcon icon="cart-plus" className="ml-1" size="lg" />
            </MDBBtn>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default DishesListItem;
