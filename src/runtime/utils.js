function isValidPhone(phoneNumber) {
  const phoneRegex = /^[0-9]{10}$/;
  return !phoneRegex.test(phoneNumber);
}

function isValidEmail(email) {
  const emailRegx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !emailRegx.test(email);
}

export { isValidPhone, isValidEmail };
