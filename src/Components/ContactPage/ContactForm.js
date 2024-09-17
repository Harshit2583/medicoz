import { useSelector } from "react-redux";
import lang from "../../Utils/languageConstants";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { checkContactFormData } from "../../Utils/validate";
// import LoadingIcon from "../Common/LoadingIcon";

const ContactForm = () => {
  const form = useRef();
  const email = useRef(null);
  const name = useRef(null);
  const query = useRef(null);
  const phone = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const message = checkContactFormData(
      email.current.value,
      phone.current.value,
      name.current.value,
      query.current.value
    );
    if (message) {
      setSubmitMessage(message);
      setIsSubmitting(false)
      return;
    }
    emailjs
      .sendForm("service_g6vnxum", "template_3vtv6n9", form.current, {
        publicKey: "x8_bsCgzcT2SFta-6",
      })
      .then(
        () => {
          setSubmitMessage("Form Submitted Succesfully!");
          setIsSubmitting(false);
        },
        (error) => {
          alert("Could not Submit. Please Try Again!");
        }
      );
  };

  return (
    <div className="z-10 popOut">
      <div className="w-full lg:w-[25rem] xl:w-[35rem] mr-14">
        <form ref={form} className="m-2">
          <label className="font-medium text-white">{lang[langKey].name}</label>
          <input
            ref={name}
            type="text"
            name="from_name"
            className=" w-full xl:w-[31.25rem] p-2 block mt-1 mb-6 shadow-md rounded-md outline-none"
            placeholder={lang[langKey].name}
          ></input>
          <label className="font-medium text-white">{lang[langKey].email}</label>
          <input
            ref={email}
            type="text"
            name="email_id"
            className="w-full xl:w-[31.25rem] p-2 block mt-1 mb-6 shadow-md rounded-md outline-none"
            placeholder={lang[langKey].email}
          ></input>
          <label className="font-medium text-white">{lang[langKey].phonenumber}</label>{" "}
          <input
            ref={phone}
            type="text"
            name="contact_number"
            className="w-full xl:w-[31.25rem] p-2 block mt-1 mb-6 shadow-md rounded-md outline-none"
            placeholder={lang[langKey].phonenumber}
          ></input>
          <label className="font-large text-white">{lang[langKey].message}</label>
          <textarea
            ref={query}
            className="w-full xl:w-[31.25rem] p-2 block mt-1 mb-1 h-52 shadow-md rounded-md outline-none"
            name="message"
            placeholder={
              lang[langKey].message + " (should be atleast 15 letters)"
            }
          ></textarea>
          {submitMessage && (
            <div className="text-red-500 font-medium text-sm tracking-wide">
              <span className="font-semibold ">&#9432;&nbsp; </span>
              {submitMessage}
            </div>
          )}
          <div className="flex items-center mt-5">
            <button
              className="learn-more submit-button w-36"
              onClick={sendEmail}
            >
              <span className="circle bg-[#f3d64c]" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span
                className={`button-text tracking-wider text-white font-semibold ${
                  langKey === "french" ? "w-36" : ""
                }`}
              >
                {lang[langKey].submit}
              </span>
            </button>
            {/* {isSubmitting && <LoadingIcon content={"Submitting..."}/>
            } */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
