import FormField from "@/components/shared/form-field";
import { signUpSchema } from "@/lib/zod.schema";
import { Lock, Mail, User } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import CodeBackground from "@/components/shared/auth-image-pattern";

const SignupPage = () => {
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
    console.log("Form submitted:", data);
  };

  return (
    <div className="h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center gap-8px">
        <form
          className="flex gap-8 flex-col justify-center items-center p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="flex w-full gap-2 items-center">
            <User className="size-10 text-gray-500" />
            <FormField
              type="text"
              label="Full Name"
              name="name"
              {...register("name")}
              error={errors.name?.message}
              required
              disabled={isSubmitting}
            />
          </span>{" "}
          <span className="flex w-full  gap-2 items-center">
            <Mail className="size-10 text-gray-500" />
            <FormField
              type="email"
              label="Email"
              {...register("email")}
              error={errors.email?.message}
              required
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </span>
          <span className="flex w-full  gap-2 items-center">
            <Lock className="size-10 text-gray-500" />
            <FormField
              type="password"
              label="Confirm Password"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
              required
              disabled={isSubmitting}
            />
          </span>
          <Button className={"w-full text-white font-semibold "}>SignUp</Button>
        </form>
      </div>

      <CodeBackground title={"Welcome abroad !"} />
    </div>
  );
};

export default SignupPage;
