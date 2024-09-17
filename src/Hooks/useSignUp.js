import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { signOut } from "../Utils/authSlice";
import { checkSignUpFormData } from "../Utils/validate";

const useSignUp = () => {
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = checkSignUpFormData(
      email.current.value,
      password.current.value,
      name.current.value
    );

    if (message) {
      setSubmitMessage(message);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      });

      if (response.data === "exist") {
        setSubmitMessage("Email Already Exists!");
      } else if (response.data === "Sign Up Successfull") {
        setSubmitMessage(
          "Sign Up Successful. Redirecting You to Login Page..."
        );
        setTimeout(() => {
          dispatch(signOut());
        }, 3000);
      }
      setIsSubmitting(false);
    } catch (error) {
      setSubmitMessage("Something Went Wrong!");
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return {
    email,
    name,
    password,
    submitMessage,
    isSubmitting,
    handleSignIn,
  };
};

export default useSignUp;
