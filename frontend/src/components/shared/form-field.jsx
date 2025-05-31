import { Eye, EyeClosed } from "lucide-react";
import React, { forwardRef } from "react";

const FormField = forwardRef(
  (
    {
      type = "text",
      label,
      error = "",
      required,
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
            <label
              className="font-semibold text-sm  text-white  transition-all duration-200 absolute left-2 -top-2 peer-focus:-top-2 peer-focus:text-primary peer-focus:text-xs"
              htmlFor={name || label?.toLowerCase().replace(/\s+/g, "_")}
            >
              {label}
            </label>
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
              disabled={disabled}
              {...rest}
            />

            {!showingPassword ? (
              <EyeClosed
                className="cursor-pointer text-gray-500"
                onClick={() => {
                  setShowingPassword(true);
                }}
              />
            ) : (
              <Eye
                className="cursor-pointer text-gray-500"
                onClick={() => setShowingPassword(false)}
              />
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </span>
        ) : type === "textarea" ? (
          <span className={`relative w-full ${containerStyles}`}>
            <label
              className="font-semibold text-sm  text-white  transition-all duration-200  "
              htmlFor={name || label?.toLowerCase().replace(/\s+/g, "_")}
            >
              {label}
            </label>
            <textarea
              ref={ref}
              name={name || label?.toLowerCase().replace(/\s+/g, "_")}
              onChange={onChange}
              onBlur={onBlur}
              className={`peer w-full px-4 py-2 outline-none
            rounded-md border
            bg-transparent
            text-gray-100 
            focus:border-primary focus:ring-0 focus:outline-none
            transition-all duration-200
              ${error ? "border-red-500" : ""}`}
              disabled={disabled}
              {...rest}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
          </span>
        ) : type === "select" ? (
          <span className={`relative w-full ${containerStyles}`}>
            <label
              className="font-semibold text-sm  text-white  transition-all duration-200"
              htmlFor={name || label?.toLowerCase().replace(/\s+/g, "_")}
            >
              {label}
            </label>
            <select
              ref={ref}
              name={name || label?.toLowerCase().replace(/\s+/g, "_")}
              onChange={onChange}
              onBlur={onBlur}
              className={`peer w-full px-4 py-2 outline-none
            rounded-md border 
            bg-transparent 
            text-gray-100 
            focus:border-primary focus:ring-0 focus:outline-none
            
            transition-all duration-200
              ${error ? "border-red-500" : ""}`}
              disabled={disabled}
              {...rest}
            >
              <option value="" className="bg-primary/20" disabled>
                {label}
              </option>
              {rest.options?.map((option) => (
                <option
                  key={option.value}
                  className="bg-primary/20"
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </span>
        ) : (
          <span className={`relative w-full ${containerStyles}`}>
            <label
              className="font-semibold text-sm  text-white  transition-all duration-200 "
              htmlFor={name || label?.toLowerCase().replace(/\s+/g, "_")}
            >
              {label}
            </label>
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
            
            transition-all duration-200
              ${error ? "border-red-500" : ""}`}
              disabled={disabled}
              {...rest}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
          </span>
        )}
      </>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;
