import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: "white" }}>
            NewsMonkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: "white" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "white" }}>
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "white" }}>
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "white" }}>
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "white" }}>
                  Politics
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
