import axios from "axios";
import { toast } from "react-toastify";

const getAddress = async (addressDispatch, token) => {
  try {
    const response = await axios.get("/api/user/address", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      addressDispatch({ type: "UPDATE", payload: response.data.address });
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};
const addAddress = async (address, addressDispatch, token) => {
  try {
    const response = await axios.post(
      "/api/user/address",
      { address },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      addressDispatch({ type: "ADD", payload: response.data.address });
      toast.info("New Address Added Successfully!!");
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};
const deleteAddress = async (id, addressDispatch, token) => {
  try {
    const response = await axios.delete(`/api/user/address/${id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      addressDispatch({ type: "DELETE", payload: response.data.address });
      toast.error("Address Removed");
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};
const updateAddress = async (address, addressDispatch, token) => {
  try {
    const response = await axios.post(
      `/api/user/address/${address._id}`,
      { address },
      { headers: { authorization: token } }
    );
    if (response.status === 200) {
      addressDispatch({ type: "UPDATE", payload: response.data.address });
      toast.info("Address Updated Successfully!");
    } else {
      throw new Error("Something went wrong! Please try again later");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { getAddress, addAddress, deleteAddress, updateAddress };
