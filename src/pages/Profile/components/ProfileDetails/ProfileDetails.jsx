import React from "react";
import "./ProfileDetails.css";
import { useAuth } from "../../../../context/";

const ProfileDetails = () => {
  const {
    authState: { user },
  } = useAuth();
  return (
    <div className="profile-details">
      <p className="details-item">
        UserName : <strong>{user.firstName}</strong>
      </p>
      <p className="details-item">
        Email : <strong>{user.email}</strong>
      </p>
    </div>
  );
};

export { ProfileDetails };
