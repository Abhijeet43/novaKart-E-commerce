import React from "react";
import "./DeliveryAddress.css";

const DeliveryAddress = ({ address }) => {
  return (
    <div className="delivery-address">
      {address === "" ? (
        "No Address Selected!!... I am Lost"
      ) : (
        <>
          <h3 className="selected-address-title">
            Your Products will be delivered here!
          </h3>
          <h4>{address.name}</h4>
          <p>
            {address.building}, {address.area}, {address.city}
          </p>
          <p>
            {address.state}, India - {address.pincode}
          </p>
          <p>Mobile - {address.mobile}</p>
        </>
      )}
    </div>
  );
};

export { DeliveryAddress };
