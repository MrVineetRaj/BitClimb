import { signUpSchema } from "../lib/zod.schema";
import {
  AlertCircle,
  Eye,
  EyeClosed,
  LayoutDashboard,
  Lock,
  Mail,
  User,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuthStore } from "../store/useAuthStore";
import { Link, useNavigate } from "react-router";
import CodeBackground from "../components/shared/auth-image-pattern";
import { useState } from "react";
import toast from "react-hot-toast";

const SignupPage = () => {
  const { isSigninUp, signup } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    // console.log(data);
    const res = await signup(data.name, data.email, data.password);
    if (res) {
      navigate("/home");
      console.log("Signup successful");
    } else {
      toast.error("Signup failed", {
        duration: 3000,
      });
    }
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
          <fieldset className="fieldset  w-full">
            <legend className="fieldset-legend">
              Full Name? <span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Type here"
              required
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="text-error flex items-center gap-2">
                <AlertCircle className="size-4" />
                {errors.name?.message}
              </p>
            )}
          </fieldset>
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
          <fieldset className="fieldset  w-full">
            <legend className="fieldset-legend">
              Confirm Password ? <span className="text-red-500">*</span>
            </legend>
            <span className="flex items-center gap-2">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="input w-full"
                placeholder="Type here"
                required
                {...register("confirmPassword")}
              />

              {!showConfirmPassword && (
                <EyeClosed
                  onClick={() => {
                    setShowConfirmPassword(true);
                  }}
                />
              )}
              {showConfirmPassword && (
                <Eye
                  onClick={() => {
                    setShowConfirmPassword(false);
                  }}
                />
              )}
            </span>{" "}
            {errors.confirmPassword?.message && (
              <p className="text-error flex items-center gap-2">
                <AlertCircle className="size-4" />
                {errors.confirmPassword?.message}
              </p>
            )}
          </fieldset>

          <button
            className="btn btn-primary w-full"
            type="submit"
            disabled={!isSubmitting && isSigninUp}
          >
            Signup
          </button>
          {/* <Button
            className={"w-full text-white font-semibold "}
            disabled={isSubmitting || isSigninUp}
            type="submit"
          >
            SignUp
          </Button> */}
        </form>
        <span className="text-sm text-gray-400 ">
          Already have an account?
          <Link to={"/login"} className="text-primary font-semibold ml-1">
            Login Here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignupPage;
