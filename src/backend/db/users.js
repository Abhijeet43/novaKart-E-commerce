import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: bcyrpt.hashSync("adarshbalika", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    password: bcyrpt.hashSync("johndoe123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    password: bcyrpt.hashSync("janedoe", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "User",
    email: "user@gmail.com",
    password: bcyrpt.hashSync("user123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
