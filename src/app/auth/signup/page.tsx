"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SocialLogIn from "../../_components/authentication/SocialLogIn";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const handleSignIn: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);

      if (res.ok) {
        reset();
        alert("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center h-screen flex justify-center items-center">
      <div className="max-w-sm p-6 shadow-md rounded-md hover:shadow-lg">
        <h2 className="text-3xl font-semibold pb-6">Create an account</h2>
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-3">
          <Input type="text" placeholder="Name *" {...register("name")} />
          <Input
            type="email"
            placeholder="Email address *"
            {...register("email")}
          />
          <Input
            type="string"
            placeholder="Phone number"
            {...register("phone")}
          />
          <Input
            type="password"
            placeholder="Password *"
            {...register("password")}
          />
          <Button type="submit" className="w-full bg-green-600">
            Sign in
          </Button>
        </form>
        <div className="my-4">
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="login" className="text-green-500 hover:text-green-600">
              Login
            </Link>
          </p>
        </div>
        <Separator className="my-4" />
        <SocialLogIn />
      </div>
    </div>
  );
};

export default SignUp;
