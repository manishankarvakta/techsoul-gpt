import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="text-center h-screen flex justify-center items-center">
      <div className="max-w-sm p-6 shadow-md rounded-md hover:shadow-lg">
        <h2 className="text-3xl font-semibold pb-6">Create an account</h2>
        <form action="" className="space-y-6">
          <Input placeholder="Email address *" />
          <Button className="w-full bg-green-600">Continue</Button>
        </form>
        <div className="my-6">
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="login" className="text-green-500 hover:text-green-600">
              Login
            </Link>
          </p>
        </div>
        <Separator className="my-6" />
        <div className="space-y-3">
          <Button variant="outline" className="w-full">
            <FcGoogle className="mr-2 h-6 w-6" />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full">
            <FaGithub className="mr-2 h-6 w-6" />
            Continue with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
