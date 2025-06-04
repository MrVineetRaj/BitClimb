import { loginSchema } from "../lib/zod.schema";
import { AlertCircle, Eye, EyeClosed, LayoutDashboard } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuthStore } from "../store/useAuthStore";
import { Link, useNavigate } from "react-router";
import CodeBackground from "../components/shared/auth-image-pattern";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isSigninUp, login } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.password).then((res) => {
      if (res) navigate("/home");
    });
  };

  return (
    <div className="h-screen grid lg:grid-cols-2 w-full">
      <CodeBackground
        title={"Welcome abroad !"}
        subtitle={"Climb to the top bit by bit at BitClimb"}
      />{" "}
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <LayoutDashboard className="size-10 text-primary" />
        <h1 className="text-xl font-bold">
          Signup to <span className="text-primary">BitClimb</span>
        </h1>
        <form
          className="flex gap-1 flex-col justify-center items-center w-full max-w-84"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="fieldset   w-full">
            <legend className="fieldset-legend">
              Email ? <span className="text-red-500">*</span>
            </legend>
            <input
              type="email"
              className="input w-full"
              placeholder="Type here"
              required
              {...register("email")}
            />{" "}
            {errors.email?.message && (
              <p className="text-error flex items-center gap-2">
                <AlertCircle className="size-4" />
                {errors.email?.message}
              </p>
            )}
          </fieldset>

          <fieldset className="fieldset   w-full">
            <legend className="fieldset-legend">
              Password ? <span className="text-red-500">*</span>
            </legend>
            <span className="flex items-center gap-2">
              <input
                type={showPassword ? "text" : "password"}
                className="input w-full"
                placeholder="Type here"
                required
                {...register("password")}
              />
              {!showPassword && (
                <EyeClosed
                  onClick={() => {
                    setShowPassword(true);
                  }}
                />
              )}
              {showPassword && (
                <Eye
                  onClick={() => {
                    setShowPassword(false);
                  }}
                />
              )}
            </span>
            {errors.password?.message && (
              <p className="text-error flex items-center gap-2">
                <AlertCircle className="size-4" />
                {errors.password?.message}
              </p>
            )}
          </fieldset>

          <button className="btn btn-primary w-full" type="submit">
            Login
          </button>
        </form>
        <span className="text-sm text-gray-400 ">
          New user?
          <Link to={"/signup"} className="text-primary font-semibold ml-1">
            signup Here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
