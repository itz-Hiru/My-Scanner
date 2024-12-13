import React, { useState } from "react";
import QRCode from "react-qr-code";
import 'animate.css'; // Import animate.css for animations

const QRGenerator = () => {
  const [text, setText] = useState("");

  function generateQr(e) {
    setText(e.target.value);
  }

  return (
    <div className="generator-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center animate__animated animate__fadeIn">
        {/* QR Code */}
        <QRCode value={text} className="qr-generator mb-3" /> <br />

        {/* Label and Input */}
        <label className="h5 mb-2">Enter URL</label> <br />
        
        <input
          type="text"
          className="form-control w-75 mx-auto mt-3"
          placeholder="Enter URL to generate code"
          value={text}
          onChange={generateQr}
        />
      </div>
    </div>
  );
};

export default QRGenerator;
