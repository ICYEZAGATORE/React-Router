import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: "#eee",
        display: "flex",
        gap: "10px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users/1">User 1</Link>
      <Link to="/users/2">User 2</Link>
      <Link to="/users/3">User 3</Link>
    </nav>
  );
}
