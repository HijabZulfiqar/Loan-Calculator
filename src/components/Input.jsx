import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, placeholder, name, error, ...props }) => {
  return (
    <div className="">
      {label && (
        <label className="block  input-label  text-md font-semibold mb-2">
          {label}
        </label>
      )}
      <input
        className={`shadow appearance-none border rounded-md w-full py-5 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline ${
          error ? "border-red-500 " : "border-gray-300 "
        } no-arrows`}
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        {...props}
      />
      <p className="text-red-500  text-xs italic mt-2 h-6">
        {error ? error : null}
      </p>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Input;
