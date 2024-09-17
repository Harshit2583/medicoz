import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, rememberMe, signIn } from "../Utils/authSlice";
import axios from "axios";
import { checkLogInFormData } from "../Utils/validate";

const useLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isRemember, setisRemember] = useState(true);
  const isRemember = useSelector(store => store.auth.isRemember);

  // const handleSignIn = () => {
  //   dispatch(signIn());
  // };

  const handleRemember = (e) => {
    // setisRemember(e.target.checked);
    dispatch(rememberMe())
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = checkLogInFormData(email, password);

    if (message) {
      setSubmitMessage(message);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
      });
      setIsSubmitting(false);

      if (response.data === "exist") {
        dispatch(login());
      } else if (response.data === "notexist") {
        setSubmitMessage("User not found");
      } else if (response.data === "incorrect password") {
        setSubmitMessage("Wrong Password");
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitMessage("Something Went Wrong!");
      console.error(error);
    }
  };

  return {
    setEmail,
    setPassword,
    submitMessage,
    isSubmitting,
    isRemember,
    handleRemember,
    handleLogin,
  };
};

export default useLogin;
