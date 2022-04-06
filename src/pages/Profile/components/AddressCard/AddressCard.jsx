import React from "react";
import "./AddressCard.css";
import { deleteAddress } from "../../../../functions/";
import { useAuth, useAddress } from "../../../../context/";
import { EditAddressModal } from "../EditAddressModal /EditAddressModal";
import { useToggle } from "../../../../hooks/useToggle";

const AddressCard = ({ address }) => {
  const {
    authState: { token },
  } = useAuth();

  const [updateModal, setUpdateModal] = useToggle(false);

  const { addressDispatch } = useAddress();

  const { name, building, area, city, state, pincode, mobile } = address;

  return (
    <div className="address-card">
      <h4>{name}</h4>
      <p className="address-text">{building}</p>
      <p className="address-text">{area}</p>
      <p className="address-text">{city}</p>
      <p className="address-text">
        {state} India - {pincode}
      </p>
      <p className="address-text">Mobile - {mobile}</p>
      <button className="btn btn-primary" onClick={setUpdateModal}>
        Edit
      </button>
      <button
        onClick={() => deleteAddress(address._id, addressDispatch, token)}
        className="btn btn-danger"
      >
        Delete
      </button>
      <EditAddressModal
        updateModal={updateModal}
        setUpdateModal={setUpdateModal}
        address={address}
      />
    </div>
  );
};

export { AddressCard };
