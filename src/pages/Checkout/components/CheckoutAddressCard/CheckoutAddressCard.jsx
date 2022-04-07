import React from "react";
import "./CheckoutAddressCard.css";

const CheckoutAddressCard = ({ address, setSelectedAddress }) => {
  return (
    <div className="address-wrapper">
      <input
        type="radio"
        id={address._id}
        onChange={() => setSelectedAddress(address)}
      />
      <label htmlFor={address._id} className="address-text">
        <h3>{address.name}</h3>
        <p>
          {address.building}, {address.area}, {address.city}
        </p>
        <p>
          {address.state}, India - {address.pincode}
        </p>
        <p>{address.mobile}</p>
      </label>
    </div>
  );
};

export { CheckoutAddressCard };
