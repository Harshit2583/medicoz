import ContactContent from "./ContactContent";
import ContactForm from "./ContactForm";
import Gradients from "../Common/Gradients.jsx";

const Contact = () => {
  return (
    <div className="body-bg flex flex-col lg:flex-row justify-between lg:h-screen p-10 pt-40">
      <div className=" absolute w-60 h-60 sm:w-80 sm:h-80 -top-[6.563rem] left-10 lg:left-64 border-30 rounded-full opacity-20 z-40"></div>
      <ContactContent />
      <ContactForm />
      <Gradients />
    </div>
  );
};

export default Contact;
