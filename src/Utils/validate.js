export const checkContactFormData = (email, phone, name, message) => {
  // eslint-disable-next-line
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  // eslint-disable-next-line
  const isPhoneValid = /^(?:[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./]*)?([0-9]{10})$/.test(phone);
  const isNameValid = /^[a-z ,.'-]+$/i.test(name);
  const isMessageValid = /^.{15,}/.test(message);

  if (!isNameValid) return "Name Not Valid";
  if (!isEmailValid) return "Email Not Valid";
  if (!isPhoneValid) return "Phone Not Valid";
  if (!isMessageValid) return "Message Not Valid";
  return null;
};

export const checkSignUpFormData = (email, password, name) => {
  // eslint-disable-next-line
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isNameValid = /^[a-z ,.'-]+$/i.test(name);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Name Not Valid";
  if (!isEmailValid) return "Email Not Valid";
  if (!isPasswordValid) return "Password Not Valid";
  return null;
};

export const checkLogInFormData = (email, password) => {
  // eslint-disable-next-line
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email Not Valid";
  if (!isPasswordValid) return "Password Not Valid";
  return null;
};
