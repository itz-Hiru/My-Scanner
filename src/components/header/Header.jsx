import React, { useState } from "react";
import QRReader from "../../pages/qrReader/QRReader";
import QRGenerator from "../../pages/qrGenerator/QRGenerator";

const Header = () => {
  const [page, setPage] = useState("qrGen");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
              <li className="nav-item">
                <a
                  className={`nav-link ${page === "qrGen" ? "active" : ""} cursor-pointer`}
                  onClick={() => setPage("qrGen")}
                >
                  QR Generator
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${page === "qrReader" ? "active" : ""} cursor-pointer`}
                  onClick={() => setPage("qrReader")}
                >
                  QR Reader
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>

      <div className="mt-5 pt-5">
        {page === "qrReader" && <QRReader />}
        {page === "qrGen" && <QRGenerator />}
      </div>
    </>
  );
};

export default Header;
