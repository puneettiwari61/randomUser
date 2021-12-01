import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosRefreshCircle } from "react-icons/io";
import Map from "./map/Map";
import { useSelector } from "react-redux";

const Profile = ({ getNewUser }) => {
  const { user } = useSelector((state) => state.userReducer);

  const location = {
    lat: user?.latitude,
    lng: user?.longitude,
    address: user?.address
  };

  const otherDetails = ["image", "name", "country", "latitude", "longitude"];

  return (
    <div className="profile flex">
      <div className="container">
        <header className="header">
          <div className="heading flex">
            <IoIosRefreshCircle onClick={getNewUser} className="refresh_icon" />
          </div>
        </header>
        <div className="details flex">
          <div className="profile_image">
            <img src={user.image} alt={user.name} />
          </div>
          <div className="basic_details">
            <div>
              <span className="name">{user.name}</span>
              <IoLocationSharp className="location_icon" />
              <span className="location">{user.country}</span>
            </div>
            <div className="details_wrapper">
              {Object.entries(user).map(([property, value], id) => {
                if (otherDetails.includes(property)) {
                  return;
                }
                return (
                  <React.Fragment key={id}>
                    <div className="property"> {property.toUpperCase()}</div>
                    <div className="value"> {value}</div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <Map location={location} zoomLevel={1} />
      </div>
    </div>
  );
};

export default Profile;
