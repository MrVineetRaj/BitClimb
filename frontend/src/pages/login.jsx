import FormField from "@/components/shared/form-field";
import { loginSchema, signUpSchema } from "@/lib/zod.schema";
import { LayoutDashboard, Lock, Mail, User } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import CodeBackground from "@/components/shared/auth-image-pattern";
import { useAuthStore } from "@/store/useAuthStore";
import { Link, useNavigate } from "react-router";

const LoginPage = () => {
  const { login, isLoggingIn } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await login(data.email, data.password);
      if (res) {
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure
    }
  };

  return (
    <div className="h-screen grid lg:grid-cols-2 w-full">
      <div className="flex flex-col justify-center items-center gap-8">
        <LayoutDashboard className="size-10 text-primary" />
        <h1 className="text-xl font-bold">
          Login to <span className="text-primary">BitClimb</span>
        </h1>
        <form
          className="flex gap-8 flex-col justify-center items-center p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="flex w-full  gap-2 items-center">
            <Mail className="size-10 text-gray-500" />
            <FormField
              type="email"
              label="Email"
              {...register("email")}
              error={errors.email?.message}
              required
              disabled={isSubmitting || isLoggingIn}
            />
          </span>
          <span className="flex w-full  gap-2 items-center">
            <Lock className="size-10 text-gray-500" />
            <FormField
              type="password"
              label="Password"
              {...register("password")}
              error={errors.password?.message}
              required
              disabled={isSubmitting || isLoggingIn}
            />
          </span>

          <Button className={"w-full text-white font-semibold "}>Login</Button>
        </form>{" "}
        <span className="text-sm text-gray-400 ">
          New User ?
          <Link to={"/signup"} className="text-primary font-semibold ml-1">
            Signup here
          </Link>
        </span>
      </div>

      <CodeBackground
        title={"Welcome Back  !"}
        subtitle={"Climb to the top bit by bit at BitClimb"}
      />
    </div>
  );
};

export default LoginPage;
