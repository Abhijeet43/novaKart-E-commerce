import React, { useEffect, useState } from "react";
import { ProductDetailsCard } from "./components/ProductDetailsCard/ProductDetailsCard";
import { RelatedProducts } from "./components/RelatedProducts/RelatedProducts";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { useData, useLoader } from "../../context/";
import { getCategoryId, getCategories } from "../../functions/";

const ProductDetails = () => {
  const { dataDispatch } = useData();

  const { setLoader } = useLoader();

  let categoryId = null;

  const navigate = useNavigate();

  const { productId } = useParams();

  const [product, setProduct] = useState("");
  const [categories, setCategories] = useState("");

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/products/${productId}`);
      setLoader(true);
      if (response.status === 200) {
        if (!response.data.product) {
          navigate("*");
        }
        setProduct(response.data.product);
      }
    } catch (error) {
      toast.error("ERROR: ", error);
    } finally {
      setLoader(false);
    }
  };

  if (categories && product) {
    categoryId = getCategoryId(categories, product.categoryName);
  }

  useEffect(() => {
    fetchProduct();
    getCategories(dataDispatch, setLoader, setCategories);
  }, [productId]);

  return (
    <main className="main-section">
      {categoryId !== null ? (
        <>
          <ProductDetailsCard product={product} categoryId={categoryId} />
          <RelatedProducts
            category={product.categoryName}
            id={product.id}
            categoryId={categoryId}
          />
        </>
      ) : null}
    </main>
  );
};

export { ProductDetails };
