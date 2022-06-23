import React, { useState } from "react";
import "./EditAddressModal.css";
import { useAddress, useAuth } from "../../../../context";
import { updateAddress } from "../../../../functions/address";
import { toast } from "react-toastify";
const EditAddressModal = ({ updateModal, setUpdateModal, address }) => {
  const { addressDispatch } = useAddress();

  const {
    authState: { token },
  } = useAuth();

  const [editedAddress, setEditedAddress] = useState(address);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEditedAddress({
      ...editedAddress,
      [name]: value,
    });
  };

  const checkMobile = () => {
    if (editedAddress.mobile.length === 10) {
      return true;
    } else {
      toast.warning("Mobile No. must be of 10 digits");
      return false;
    }
  };

  const checkPincode = () => {
    if (
      editedAddress.pincode.length >= 4 &&
      editedAddress.pincode.length <= 6
    ) {
      return true;
    } else {
      toast.warning("Pincode must be between 4-6 chars");
    }
  };

  const checkInputs = () => {
    if (
      editedAddress.name &&
      editedAddress.building &&
      editedAddress.area &&
      editedAddress.city &&
      editedAddress.state
    ) {
      return true;
    } else {
      toast.warning("Inputs cannot be empty");
      return false;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (checkInputs() && checkPincode() && checkMobile()) {
      try {
        await updateAddress(editedAddress, addressDispatch, token);
        setUpdateModal();
      } catch (error) {}
    }
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
