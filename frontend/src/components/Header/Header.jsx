import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2 className="header-title">Order Your Favorite Food Here</h2>
        <p className="header-description">
          Enjoy a wide selection of dishes delivered to your door.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
