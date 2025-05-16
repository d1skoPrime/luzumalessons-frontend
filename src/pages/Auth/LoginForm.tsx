import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useState } from 'react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  return (
    <div className="relative w-full min-h-screen bg-[url('/darkpt.png')] bg-center bg-[#16131b] overflow-hidden">
      {/* glowing circles */}
      <div className="absolute top-[-120px] right-[-250px] w-120 h-120 bg-teal-500/20 rounded-full blur-3xl animate-pulsingcustom z-50" />
      <div className="absolute bottom-[-120px] left-[-250px] w-120 h-120 bg-teal-500/20 rounded-full blur-3xl animate-pulsingcustom" />

      {/* content */}
      <div className="flex justify-center items-center h-screen w-full relative z-10">
        <div className="bg-[#303137] w-[370px] rounded-xl min-h-[calc(100vh-22rem)]">
          <div className="relative bottom-9 flex items-center justify-center">
            <img
              src="/L.png"
              alt=""
              className="w-20 h-20 rounded-4xl pb-2 pt-2 bg-[#45434A]"
            />
          </div>
          <h1 className="text-white text-xl font-bold px-3 text-center">
            Start creating websites! It is super easy🫰
          </h1>
          <form className="w-full h-full">
            <div className="flex flex-col gap-4 px-4 mt-4">
              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-1 border-gray-600 w-full pl-10 pr-4 py-2 rounded-md bg-[#303137] text-white placeholder-gray-300 outline-none transition-colors ease-in-out duration-500 focus:border-teal-600"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="border-1 border-gray-600 w-full pl-10 pr-10 py-2 rounded-md bg-[#303137] text-white placeholder-gray-300 outline-none transition-colors ease-in-out duration-500 focus:border-teal-600"
                />
                <div
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer transition-colors duration-500 ease-in hover:text-white"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <EyeOff className="w-6 h-6" />
                  ) : (
                    <Eye className="w-6 h-6" />
                  )}
                </div>
              </div>

              <div className="mt-10 flex justify-center items-center">
                <button
                  className="bg-teal-600 px-7 py-3 rounded-xl text-white uppercase transition-colors hover:bg-teal-800 hover:text-gray-400  duration-700 cursor-pointer font-semibold disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-black"
                  disabled
                >
                  Sign In
                </button>
              </div>

              <div className="flex justify-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white duration-500 ease-in-out cursor-pointer"
                >
                  Forgot password?
                </a>
              </div>

              <div className="flex justify-center">
                <span className="text-white">
                  Don't have an account yet?{' '}
                  <a
                    href="/signup"
                    className="text-teal-400 transition-colors hover:text-sky-400 duration-500 ease-linear"
                  >
                    Sign Up
                  </a>
                </span>
              </div>
              <h2 className="text-purple-500 text-2xl block animate-bounce  w-full text-center font-bold">
                In Developing
                <span className="text-red-500 text-2xl animate-pulse w-full h-10 transition-transform duration-500">
                  ...
                </span>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
