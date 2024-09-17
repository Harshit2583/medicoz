import React, { useState } from "react";
import LoadingIcon from "../Common/LoadingIcon";
import { Link } from "react-router-dom";

const LoginSimmer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className="body-bg pt-40 pb-20 px-20 h-screen">
      <div className="flex gap-5 items-center justify-center h-full  bg-white rounded-2xl">
        <p className="text-center text-4xl font-medium ">
          You need to login first
        </p>
        <Link to={"/login"}>
        <button class="gotologin-button">
          <svg class="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button></Link>
      </div>
      <button className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'>
        Go to Login
      </button>
    </div>
  );
};

export default LoginSimmer;
