import { Eye, EyeClosed } from "lucide-react";
import React, { forwardRef } from "react";

const FormField = forwardRef(
  (
    {
      type = "text",
      label,
      error = "",
      required = true,
      disabled = false,
      containerStyles = "",
      onChange,
      onBlur,
      name,
      ...rest
    },
    ref
  ) => {
    const [showingPassword, setShowingPassword] = React.useState(false);

    return (
      <>
        {type === "password" ? (
          <span
            className={`flex items-center relative gap-2 w-full ${containerStyles}`}
          >
            <input
              ref={ref}
              name={name || label?.toLowerCase().replace(/\s+/g, "_")}
              type={
                type === "password" && !showingPassword ? "password" : "text"
              }
              onChange={onChange}
              onBlur={onBlur}
              className={`peer w-full px-4 py-2 outline-none
            rounded-md border 
            bg-transparent 
            text-gray-100 
            focus:border-primary focus:ring-0 focus:outline-none
            valid:border-primary
            transition-all duration-200
              ${error ? "border-red-500" : ""}`}
              required={required}
              disabled={disabled}
              {...rest}
            />
            <label
              className="absolute font-semibold top-2 left-4 peer-focus:-top-4 peer-focus:left-0 peer-focus:text-sm peer-focus:text-primary text-gray-500 peer-valid:-top-4 peer-valid:text-sm peer-valid:left-0 peer-valid:text-primary transition-all duration-200"
              htmlFor={name || label?.toLowerCase().replace(/\s+/g, "_")}
            >
              {label} {required && "*"}
            </label>
            {showingPassword ? (
              <EyeClosed
                className="cursor-pointer text-gray-500"
                onClick={() => {
                  setShowingPassword(false);
                }}
              />
            ) : (
              <Eye
                className="cursor-pointer text-gray-500"
                onClick={() => setShowingPassword(true)}
              />
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </span>
        ) : (
          <span className={`relative w-full ${containerStyles}`}>
            <input
              ref={ref}
              name={name || label?.toLowerCase().replace(/\s+/g, "_")}
              type={type}
              onChange={onChange}
              onBlur={onBlur}
              className={`peer w-full px-4 py-2 outline-none
            rounded-md border 
            bg-transparent 
            text-gray-100 
            focus:border-primary focus:ring-0 focus:outline-none
            valid:border-primary
            transition-all duration-200
              ${error ? "border-red-500" : ""}`}
              required={required}
              disabled={disabled}
              {...rest}
            />
            <label
              className="absolute font-semibold top-2 left-4 peer-focus:-top-4 peer-focus:left-0 peer-focus:text-sm peer-focus:text-primary text-gray-500 peer-valid:-top-4 peer-valid:text-sm peer-valid:left-0 peer-valid:text-primary transition-all duration-200"
              htmlFor={name || label?.toLowerCase().replace(/\s+/g, "_")}
            >
              {label} {required && "*"}
            </label>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </span>
        )}
      </>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;
