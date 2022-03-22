import React from "react";
import "./Wishlist.css";
import { WishlistCard } from "./components/WishlistCard";
import { useWishlist } from "../../context/";

const Wishlist = () => {
  const {
    wishlistState: { wishlist },
  } = useWishlist();
  return (
    <main className="main-section">
      <section className="wishlist-products">
        <h2 className="section-title">
          My Wishlist{" "}
          <span className="wishlist-items">({wishlist.length})</span>
        </h2>
        <div className="card-container">
          {/* <p>Wishlist is currently empty.</p> */}
          {wishlist.map((product) => {
            return <WishlistCard key={product.id} product={product} />;
          })}
        </div>
      </section>
    </main>
  );
};

export { Wishlist };
