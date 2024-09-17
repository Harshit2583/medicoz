import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="h-screen body-bg p-40">
      <div className="h-full blue-gradient rounded-3xl shadow-2xl">
        <div className="h-full   font-medium flex items-center justify-center flex-col">
          <h1 className="text-lg sm:text-2xl md:text-5xl mb-5">OOPS! Something went wrong.</h1>
          <h3 className="text-center text-2xl">
            {err.status} : {err.statusText}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Error;
