import React from "react";
import "../index.css";

const Header = ({ handleShowForm }) => {
  return (
    <div className="header_container">
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Todo App</h1>

      <button onClick={handleShowForm} className="btn">
        New Task
      </button>
    </div>
  );
};

export default Header;
