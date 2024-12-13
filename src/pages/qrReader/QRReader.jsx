import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRReader = () => {
  const [scanResult, setScanResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 3,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="container py-5">
      {scanResult ? (
        <div className="text-center">
          <div className="alert alert-success" role="alert">
            <strong>Reading Successful!</strong>
            <p>
              Scanned URL: <a href={scanResult} target="_blank" rel="noopener noreferrer">{scanResult}</a>
            </p>
          </div>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/qrreader");
              }}
            >
              Scan Again
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                navigate("/header");
              }}
            >
              QR Generator
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div id="reader" className="border p-3 rounded"></div>
        </div>
      )}
    </div>
  );
};

export default QRReader;
