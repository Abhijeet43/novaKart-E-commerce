import React, { useState } from "react";
import "./EditAddressModal.css";
import { useAddress, useAuth } from "../../../../context";
import { updateAddress } from "../../../../functions/address";

const EditAddressModal = ({ updateModal, setUpdateModal, address }) => {
  const { addressDispatch } = useAddress();

  const {
    authState: { token },
  } = useAuth();

  const [editedAddress, setEditedAddress] = useState(address);

  const initialAddressState = {
    name: "",
    building: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEditedAddress({
      ...editedAddress,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateAddress(editedAddress, addressDispatch, token);
      setUpdateModal();
    } catch (error) {}
  };

  return (
    <>
      <div className={`address-modal ${updateModal ? "active" : ""}`}>
        <form action="" onSubmit={submitHandler} className="address-form">
          <h1 className="address-form-title">Update Form</h1>
          <span className="close-modal" onClick={setUpdateModal}>
            &times;
          </span>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={address.name}
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
              defaultValue={address.building}
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
              defaultValue={address.area}
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
              defaultValue={address.city}
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
              defaultValue={address.state}
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
              defaultValue={address.pincode}
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
              defaultValue={address.mobile}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="address-btn btn-primary">
              Update Address
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export { EditAddressModal };
