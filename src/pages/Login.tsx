import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Authservice } from "../Services/Auth";
import { MdArrowBack } from "react-icons/md";
import { errorToast } from "../utils/ToastUtils";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthStore } from "../zustand/AuthStore";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [phoneNumber, setPhoneNumber] = useState<number>("");
  const [otp, SetOtp] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleSendOTP = async () => {
    setError("");
    setIsloading(true);
    try {
      await Authservice.sendOtp(Number(phoneNumber));
      setStep(2);
    } catch (err: any) {
      setError(err.response?.data?.message || "خطا در ارسال کد");
      errorToast();
    } finally {
      setIsloading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setError("");
    setIsloading(true);
    try {
      await Authservice.verifyOTP(Number(phoneNumber), otp);
      navigate("/", { replace: true });
    } catch (err: any) {
      setError(err.response?.data?.message || "خطا در تایید کد");
    } finally {
      setIsloading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-tl from-blue-400 to-pink-400">
      <div className="w-full h-full md:w-1/2 md:h-1/2 bg-white/10 backdrop-blur-md border border-white/30 rounded-none md:rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden relative">
        
        {/* ستون فرم */}
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center gap-6 px-6 md:px-8 flex-1 md:flex-none relative">
          {step === 2 && (
            <div className="absolute top-4 left-4 text-white cursor-pointer z-10 bg-white/5 backdrop-blur-xl rounded-full hover:bg-white/15 transition-all">
              <MdArrowBack size={27} onClick={() => setStep(1)} />
            </div>
          )}

          {step === 2 ? (
            <>
              <input
                type="number"
                placeholder="کد تایید"
                className="w-full md:w-5/6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e) => SetOtp(e.target.value)}
              />
              {error && <p className="text-red-300 text-sm -mt-4">{error}</p>}
              <button
                onClick={handleVerifyOTP}
                disabled={isLoading}
                className="w-full md:w-5/6 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg py-2 text-white font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                تایید کد
              </button>
            </>
          ) : (
            <>
              <input
                type="number"
                placeholder="شماره تلفن"
                className="w-full md:w-5/6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {error && <p className="text-red-300 text-sm -mt-4">{error}</p>}
              <button
                onClick={handleSendOTP}
                disabled={isLoading}
                className="w-full md:w-5/6 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg py-2 text-white font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                ورود
              </button>
            </>
          )}
        </div>

        {/* ستون اطلاعات (آیکن + متن) */}
        <div className="w-full md:w-1/3 flex flex-row md:flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/30 bg-white/5 backdrop-blur-sm px-4 py-4 md:py-0">
          <div className="flex-shrink-0 md:h-1/3 flex items-center justify-center">
            <FaUserCircle className="text-4xl md:text-7xl text-white/80 drop-shadow-lg" />
          </div>
          <div className="ml-4 md:ml-0 md:h-2/3 flex flex-col items-center justify-center text-center gap-1 md:gap-2">
            <p className="font-bold text-xl md:text-2xl text-white drop-shadow-md">
              خوش آمدید
            </p>
            <p className="text-white/70 text-xs md:text-sm">
              دسترسی ندارید؟
              <br className="hidden md:block" />
              با پشتیبانی تماس بگیرید
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;