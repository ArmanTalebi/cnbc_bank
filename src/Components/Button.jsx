import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient rounded-lg font-poppins font-medium text-[18] text-primary ${styles}`}
    >
      Get Started!
    </button>
  );
};

export default Button;
