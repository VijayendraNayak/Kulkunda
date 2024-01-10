"use client";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, Toaster } from "react-hot-toast";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/navigation";
import OtpInput from "otp-input-react"; // Import OtpInput directly
import { useDispatch, useSelector } from 'react-redux';
import { setPhoneNumber } from '../../Redux/Features/counter/phoneslice';
import Loader from "../../Components/Loader";

// Main component
const App = () => {
  const router = useRouter();
  const dispatch=useDispatch();
  // State variables
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOTP] = useState("");
  const [suc, setSuc] = useState(false);


  const sendOTP = async () => {
    try {
      const formatPhoneNumber = `+${phone}`;
      const recaptha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(
        auth,
        formatPhoneNumber,
        recaptha
      );
      setLoading(false)
      setUser(confirmation);
      setShowOTP(true); // Set showOTP to true once OTP is sent
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  };

  const verifyOTP = async () => {
    try {
      setLoading(true)
      await user.confirm(otp);
      setSuc(true);
      console.log("here");
      dispatch(setPhoneNumber(phone))
      // Send phone number as a prop to the 'Pages/register' page
      router.replace("/Pages/register");
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  };
  // JSX structure
  return (
    <section className="bg-orange-400 flex items-center justify-center h-screen">
      <div>
        {loading&&<Loader/>}
        <Toaster toastOptions={{ duration: 4000 }} />
        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
          <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
            Welcome to <br />
            <span className="font-bold">KULKUNDA BASAWESHWARA</span>
          </h1>
          {showOTP ? (
            <>
              <div className="bg-white text-orange-400 w-fit mx-auto p-4 rounded-full">
                <BsFillShieldLockFill size={30} />
              </div>
              <label
                htmlFor="otp"
                className="font-bold text-xl text-white text-center"
              >
                Enter your OTP
              </label>
              <OtpInput
                value={otp}
                onChange={setOTP}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="opt-container "
              />
              <button
                onClick={verifyOTP}
                className="bg-orange-500 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded hover:scale-105"
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Verify OTP</span>
              </button>
            </>
          ) : (
            <>
              <div className="bg-white text-orange-400 w-fit mx-auto p-4 rounded-full">
                <BsTelephoneFill size={30} />
              </div>
              <label
                htmlFor=""
                className="font-bold text-xl text-white text-center"
              >
                Verify your phone number
              </label>
              <PhoneInput country={"in"} value={phone} onChange={setPhone} />
              <button
                onClick={sendOTP}
                className="bg-orange-500 w-full flex gap-1 items-center justify-center py-2.5 hover:scale-105 text-white rounded-lg"
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Send code via SMS</span>
              </button>
              {/* Captcha button below */}
              <div id="recaptcha"></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default App;