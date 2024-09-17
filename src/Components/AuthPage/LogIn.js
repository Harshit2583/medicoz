import LoadingIcon from "../Common/LoadingIcon";
import useLogin from "../../Hooks/useLogin";
import Logo from "../Common/Logo";
import Header from "./Header";
import { Link } from "react-router-dom";

const LogIn = () => {
  const {
    setEmail,
    setPassword,
    submitMessage,
    isSubmitting,
    isRemember,
    handleRemember,
    handleSignIn,
    handleLogin,
  } = useLogin();

  return (
    <div className="font-poppins">
      {/* <Header /> */}
      <div className="body-bg h-screen flex items-center justify-center pt-20">
        <div className="bg-white p-16 px-10 flex flex-col items-center rounded-lg w-[90%] sm:w-[45%] md:w-[35%] lg:w-[30%] xl:w-[22%] shadow-lg">
          <h1 className="text-3xl font-medium mb-10 mt-2">Login</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="block py-1 border-b-2 border-black mb-6 outline-none font-medium w-full"
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="block py-1 border-b-2 border-black outline-none font-medium w-full"
          ></input>
          <div className="mt-1 w-full">
            {submitMessage && (
              <div className="text-red-500 font-medium text-sm tracking-wide ">
                <span className="font-semibold">&#9432; </span>
                {submitMessage}
              </div>
            )}
          </div>

          <div className="mb-10 mt-1 py-1 outline-none font-medium w-full flex items-center text-xs tracking-wide">
            <input
              type="checkbox"
              className="mr-1 custom-checkbox"
              checked={isRemember}
              onChange={handleRemember}
            ></input>
            Remember Me
          </div>
          <button className="Btn-Container mb-10" onClick={handleLogin}>
            <span className="text">
              Login {isSubmitting && <LoadingIcon content={""} />}
            </span>

            <span className="icon-Container">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="nones"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
              </svg>
            </span>
          </button>

          <div className="text-center text-xs font-medium mb-4">
            <p className="mb-1">Forgot Password</p>
            <span className="">
              Don't have an account?
              <Link to={"/signup"}>
              <span
                
                className="text-blue-500 cursor-pointer"
              >
                {" "}
                Sign Up{" "}
              </span></Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
