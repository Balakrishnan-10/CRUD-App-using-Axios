import React from "react";
import { Link } from "react-router-dom";
import { SiAxios } from "react-icons/si";


const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-primary mb-5"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/#">
            <SiAxios />
            CRUD With Axios
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link to="/create">Create</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
