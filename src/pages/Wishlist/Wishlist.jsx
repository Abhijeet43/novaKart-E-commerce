import React, { useEffect } from "react";
import "./Wishlist.css";
import { WishlistCard } from "./components/WishlistCard";
import { useWishlist, useAuth } from "../../context/";
import { wishlistImg } from "../../assets/";
import { Link } from "react-router-dom";
import { getWishlistItemsHandler } from "../../functions/";

const Wishlist = () => {
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const {
    authState: { token },
  } = useAuth();

  useEffect(() => {
    getWishlistItemsHandler(token, wishlistDispatch);
  }, []);

  return (
    <main className="main-section">
      <section className="wishlist-products">
        <h2 className="section-title">
          My Wishlist{" "}
          <span className="wishlist-items">({wishlist.length})</span>
        </h2>
        <div className="card-container">
          {wishlist.length > 0 ? (
            wishlist.map((product) => {
              return <WishlistCard key={product.id} product={product} />;
            })
          ) : (
            <div className="empty-cart-section">
              <img
                className="wishlist-img"
                src={wishlistImg}
                alt="empty-wishlist"
              />
              <Link className="btn btn-primary" to="/products">
                Shop More
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export { Wishlist };
