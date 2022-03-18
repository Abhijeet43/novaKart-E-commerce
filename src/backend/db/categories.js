import { v4 as uuid } from "uuid";
import {
  categoryOne,
  categoryTwo,
  categoryThree,
  productNine,
} from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Tracks",
    description:
      "Tracks provides the comfort of moving around also helping in uping one's style quotitent",
    imageSrc: categoryOne,
    isFeatured: false,
  },
  {
    _id: uuid(),
    categoryName: "Sneakers",
    description:
      "Stylish and Comfortable Sneakers allows the comfort of moving anywhere around also adding to one's styles",
    imageSrc: categoryTwo,
    isFeatured: true,
  },
  {
    _id: uuid(),
    categoryName: "T-Shirts",
    description:
      "T-Shirts gives a funky appeal to individual's style quotitent",
    imageSrc: categoryThree,
    isFeatured: true,
  },
  {
    _id: uuid(),
    categoryName: "Watches",
    description:
      "Watches come in handy while helping in keeping track of time.",
    imageSrc: productNine,
    isFeatured: true,
  },
];
