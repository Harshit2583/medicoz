import { useSelector } from "react-redux";
import Gradients from "../Common/Gradients";
import MainContainer from "./MainContainer";
import LoginShimmer from "../ShimmerPage/LoginShimmer";

const Shopping = () => {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  if(isLoggedIn === false) {
    return <LoginShimmer />;
  }
  
  return (
    <div className="body-bg h-full pt-40 pb-20 overflow-hidden">
        <MainContainer />
        <Gradients />
    </div>
  );
};

export default Shopping;