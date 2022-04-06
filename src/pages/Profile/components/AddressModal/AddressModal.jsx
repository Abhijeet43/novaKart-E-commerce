import React, { useState } from "react";
import "./AddressModal.css";
import { useAddress, useAuth } from "../../../../context/";
import { addAddress } from "../../../../functions/address";

const AddressModal = ({ modalOpen, setModalOpen }) => {
  const { addressDispatch } = useAddress();

  const {
    authState: { token },
  } = useAuth();

  const initialAddressState = {
    name: "",
    building: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
  };

  const [address, setAddress] = useState(initialAddressState);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAddress((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addAddress(address, addressDispatch, token);
      setAddress(initialAddressState);
      setModalOpen();
    } catch (error) {}
  };

  return (
    <>
      <div className={`address-modal ${modalOpen ? "active" : ""}`}>
        <form action="" onSubmit={submitHandler} className="address-form">
          <h1 className="address-form-title">Address Form</h1>
          <span className="close-modal" onClick={setModalOpen}>
            &times;
          </span>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={address.name}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="building">Building and No.</label>
            <input
              type="text"
              name="building"
              id="building"
              value={address.building}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="area">Area</label>
            <input
              type="text"
              name="area"
              id="area"
              value={address.area}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={address.city}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              id="state"
              value={address.state}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="number"
              name="pincode"
              id="pincode"
              value={address.pincode}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile No.</label>
            <input
              type="number"
              name="mobile"
              id="mobile"
              value={address.mobile}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="address-btn btn-primary">
              Save Address
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export { AddressModal };
