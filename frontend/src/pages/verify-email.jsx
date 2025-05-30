import { useAuthStore } from "@/store/useAuthStore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const VerifyEmailPage = () => {
  const { token } = useParams();
  const { isVerifyingEmail, verifyEmail } = useAuthStore();
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const handleVerification = async () => {
    if (token) {
      const res = await verifyEmail(token);
      
      if (res && res.success) {
        setIsVerified(true);
        navigate("/");
      }
    }
  };
  return (
    <div>
      {isVerifyingEmail ? (
        <div className="flex items-center justify-center h-screen">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">Verify Your Email</h1>
          {isVerified ? (
            <p className="bg-green-500"> Email verified successfully</p>
          ) : (
            <button
              onClick={() => handleVerification()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Verify Email
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default VerifyEmailPage;
