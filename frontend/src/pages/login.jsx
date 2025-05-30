import FormField from "@/components/shared/form-field";
import { loginSchema, signUpSchema } from "@/lib/zod.schema";
import { Lock, Mail, User } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import CodeBackground from "@/components/shared/auth-image-pattern";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router";

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
      <div className="flex flex-col justify-center items-center gap-8px">
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
        </form>
      </div>

      <CodeBackground title={"Welcome Back  !"} />
    </div>
  );
};

export default LoginPage;
