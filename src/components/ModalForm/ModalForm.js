import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader
} from "mdbreact";
import Spinner from "../UI/Spinner/Spinner";

const ModalForm = props => {
  const { show, modalHandler, order, post, loading, clear } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const postData = {
    user: {
      name,
      phone,
      address
    },
    order: order.map(el => ({ title: el.title, amount: el.amount }))
  };

  const sendOrder = async () => {
    await post(postData);
    modalHandler(false);
    clear();
  };

  return (
    <MDBModal isOpen={show} toggle={modalHandler}>
      <MDBModalHeader>Order:</MDBModalHeader>
      <MDBModalBody>
        <form>
          <fieldset className="h6 m-4">
            {order.map((el, index) => (
              <p key={index}>
                <strong>{el.title}</strong> <span>x{el.amount}</span>
              </p>
            ))}
          </fieldset>
          <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
            Your name
          </label>
          <input
            type="text"
            id="defaultFormRegisterNameEx"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <br />
          <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
            Your phone
          </label>
          <input
            type="tel"
            id="defaultFormRegisterEmailEx"
            className="form-control"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
            Your address
          </label>
          <input
            type="text"
            id="defaultFormRegisterConfirmEx"
            className="form-control"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </form>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" type="submit" size="sm" onClick={sendOrder}>
          Place order {loading && <Spinner small />}
        </MDBBtn>
        <MDBBtn color="danger" onClick={() => modalHandler(false)} size="sm">
          Close
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default ModalForm;
