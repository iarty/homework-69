import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  clearState,
  postOrder,
  removeFromCart
} from "../../store/actions/orderAction";
import { MDBBtn } from "mdbreact";
import ModalForm from "../ModalForm/ModalForm";

const Orders = props => {
  const [modal, setModal] = useState(false);
  let totalPrice = 0;
  props.cart.forEach(el => {
    totalPrice += el.price * el.amount;
  });
  const delivery = props.cart.length && 150;
  return (
    <div className="col-4">
      <ModalForm
        show={modal}
        modalHandler={setModal}
        order={props.cart}
        post={props.postOrder}
        loading={props.loading}
        clear={props.clearState}
      />
      <fieldset className="border p-3 rounded border-secondary">
        <legend style={{ width: "22%" }}>Orders</legend>
        {props.cart.map((el, index) => (
          <p key={index}>
            <strong
              style={{ cursor: "pointer" }}
              onClick={() => props.removeFromCart(el.title)}
            >
              {el.title} x{el.amount}
            </strong>
            <span className="float-right">{el.price * el.amount} KGS</span>
          </p>
        ))}
        <hr />
        <p>
          <strong>Доставка:</strong>{" "}
          <span className="float-right">{delivery} KGS</span>
        </p>
        <p>
          <strong>Итого:</strong>{" "}
          <span className="float-right">{totalPrice + delivery} KGS</span>
        </p>
        {props.cart.length ? (
          <MDBBtn
            className="float-right"
            color="secondary"
            size="sm"
            onClick={() => setModal(true)}
          >
            Place order
          </MDBBtn>
        ) : null}
      </fieldset>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.order.cart,
  loading: state.order.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeFromCart, postOrder, clearState }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
