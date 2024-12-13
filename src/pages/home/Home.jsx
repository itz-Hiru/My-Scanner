import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/qr-img-1.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row align-items-center w-100">
        {/* Left side text content */}
        <div className="col-md-6 col-12 mb-4 text-center text-md-start">
          <h1 className="display-4 text-primary mb-4">SCAN QR CODE</h1>
          <p className="lead mb-4">
            Effortlessly convert URLs into QR codes and decode QR codes back into links, simplifying sharing and accessing content in one seamless platform.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => {
              navigate("/about");
            }}
          >
            Read more
          </button>
        </div>

        {/* Right side image */}
        <div className="col-md-6 col-12 d-flex justify-content-center">
          <div className="image-container">
            <img src={image} alt="QR Code" className="qr-image img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
