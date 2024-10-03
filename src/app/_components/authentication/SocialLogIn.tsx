import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogIn = () => {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  const handleGitHubSignIn = () => {
    signIn("github", { callbackUrl: "/" });
  };

  return (
    <div className="space-y-3">
      <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
        <FcGoogle className="mr-2 h-6 w-6" />
        Continue with Google
      </Button>
      <Button onClick={handleGitHubSignIn} variant="outline" className="w-full">
        <FaGithub className="mr-2 h-6 w-6" />
        Continue with GitHub
      </Button>
    </div>
  );
};

export default SocialLogIn;
