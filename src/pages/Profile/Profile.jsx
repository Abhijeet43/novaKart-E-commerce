import React from "react";
import "./Profile.css";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <main className="profile-section">
      <div className="tabs">
        <NavLink to="/profile/profileDetails" className="tab-btn">
          Profile
        </NavLink>
        <NavLink to="/profile/address" className="tab-btn">
          My Addresses
        </NavLink>
        <NavLink to="/profile/settings" className="tab-btn">
          Settings
        </NavLink>
        <NavLink to="/profile/orders" className="tab-btn">
          Orders
        </NavLink>
      </div>
      <div className="output-container">
        <Outlet />
      </div>
    </main>
  );
};

export { Profile };
