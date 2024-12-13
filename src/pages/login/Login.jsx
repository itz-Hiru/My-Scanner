import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const navigate = useNavigate();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const sendOtp = () => {
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const otpCode = Math.floor(10000 + Math.random() * 90000).toString();

    const emailTemplate = {
      from_name: "Link to QR",
      to_email: email,
      message: otpCode,
    };

    if (emailPattern.test(email)) {
      emailjs
        .send(serviceID, templateID, emailTemplate, publicKey)
        .then(() => {
          setGeneratedOtp(otpCode);
          swal("OTP Sent", "Check your email for OTP", "success", {
            buttons: "Done",
            timer: 7000,
          });
        })
        .catch((error) => {
          swal("Oops", "Failed to send OTP. Please try again", "error", {
            buttons: "Close",
            timer: 7000,
          });
          console.error(error);
        });
    } else {
      swal("Oops", "Please enter a valid email", "warning", {
        buttons: "Close",
        timer: 7000,
      });
    }
  };

  const verifyOtp = async () => {
    if (!email || !otp) {
      swal("Oops", "Email or OTP is empty", "warning", {
        buttons: "Close",
        timer: 7000,
      });
    } else if (otp === generatedOtp) {
      try {
        await addDoc(collection(db, "users"), { email });
        swal(
          "Login successful",
          "Login to the web page is successful",
          "success",
          { buttons: "Done", timer: 7000 }
        );
        navigate("/header");
      } catch (error) {
        swal("Oops", "Server connection error", "error", {
          buttons: "Close",
          timer: 7000,
        });
        console.error(error);
      }
    } else {
      swal("Oops", "Invalid OTP. Please try again", "warning", {
        buttons: "Close",
        timer: 7000,
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="row w-100 justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="text-center mb-4 text-primary">Welcome to QR to Link</h1>
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary w-100 mb-4 btn-lg"
                  onClick={sendOtp}
                >
                  Send OTP
                </button>

                <div className="mb-4">
                  <label htmlFor="otp" className="form-label">
                    OTP Code
                  </label>
                  <input
                    type="text"
                    id="otp"
                    className="form-control form-control-lg"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-success w-100 btn-lg"
                  onClick={verifyOtp}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
