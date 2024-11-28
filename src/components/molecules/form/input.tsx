import { useFormikContext } from "formik";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  label,
  className,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { values, setFieldValue } = useFormikContext();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          type={type === "password" && isPasswordVisible ? "text" : type}
          name={name}
          placeholder={placeholder}
          required
          value={values[name]}
          onChange={(e) => setFieldValue(name, e.target.value)}
          id={name}
          className={`w-full rounded-md border border-gray-300 p-2.5 ${
            className ? className : ""
          }`}
        />
        {type === "password" && (
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <FaEyeSlash className="text-gray-600" size={20} />
            ) : (
              <FaEye className="text-gray-600" size={20} />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
