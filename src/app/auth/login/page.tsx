/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import SocialLogIn from "../../_components/authentication/SocialLogIn";
import { signIn } from "next-auth/react";

type Inputs = {
  email: string;
  password: string;
};

const LogIn = () => {
  // const router = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();

  const handleSignIn: SubmitHandler<Inputs> = async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(res);

    if (res?.error) {
      alert(res.error);
    } else {
      alert("Logged in successfully");
      // router.push("/chat");
    }
  };

  return (
    <div className="text-center h-screen flex justify-center items-center">
      <div className="max-w-sm p-6 shadow-md rounded-md hover:shadow-lg">
        <h2 className="text-3xl font-semibold pb-6">Welcome back</h2>
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-3">
          <Input
            type="email"
            placeholder="Email address *"
            {...register("email", { required: true })}
          />
          <Input
            type="password"
            placeholder="Password *"
            {...register("password", { required: true })}
          />
          <Button type="submit" className="w-full bg-green-600">
            Sign in
          </Button>
        </form>
        <div className="my-4">
          <p className="text-sm">
            don't have an account?{" "}
            <Link href="signup" className="text-green-500 hover:text-green-600">
              Sign up
            </Link>
          </p>
        </div>
        <Separator className="my-4" />
        <SocialLogIn />
      </div>
    </div>
  );
};

export default LogIn;
