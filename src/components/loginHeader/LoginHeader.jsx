import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import About from "../../pages/about/About";
import Login from "../../pages/login/Login";

const LoginHeader = () => {
  const [page, setPage] = useState("home");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Link to QR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <li className="nav-item cursor-pointer">
                <a
                  className={`nav-link ${page === "home" ? "active" : ""} cursor-pointer`}
                  onClick={() => setPage("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item cursor-pointer">
                <a
                  className={`nav-link ${page === "about" ? "active" : ""} cursor-pointer`}
                  onClick={() => setPage("about")}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item cursor-pointer">
                <a
                  className={`nav-link ${page === "login" ? "active" : ""} cursor-pointer`}
                  onClick={() => setPage("login")}
                >
                  LogIn
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <div className="mt-5 pt-4">
        {page === "home" && <Home />}
        {page === "login" && <Login />}
        {page === "about" && <About />}
      </div>
    </>
  );
};

export default LoginHeader;
