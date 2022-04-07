import React from "react";
import { useToggle } from "../../../../hooks/useToggle";
import { useAddress } from "../../../../context/";
import { AddressCard } from "../AddressCard/AddressCard";
import { AddressModal } from "../AddressModal/AddressModal";

const Address = () => {
  const [modalOpen, setModalOpen] = useToggle(false);
  const {
    addressState: { address },
  } = useAddress();
  return (
    <>
      <AddressModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {address.map((savedAddress) => {
        return <AddressCard key={savedAddress._id} address={savedAddress} />;
      })}

      <button className="btn btn-primary" onClick={setModalOpen}>
        + Add Address
      </button>
    </>
  );
};

export { Address };
