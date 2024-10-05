"use client";

import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  const user = useUser();

  return (
    <section className="mb-12 bg-black text-white">
      <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Unleash the Power of AI
            <span className="block text-gray-400">
              Innovate with Intelligence
            </span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-300">
            Experience cutting-edge AI solutions that transform the way you
            work.
            <br className="hidden md:inline lg:hidden" />
            Automate, analyze, and accelerate with the future of technology at
            your fingertips.
          </p>
          <Link
            href={user ? `/chat` : "/auth/login"}
            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
          >
            <Button className="px-6 py-3 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700">
              Explore AI
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
          <Image
            src="https://bipartisan-policy-center.imgix.net/wp-content/uploads/2024/04/shutterstock_2102809798-scaled.jpg?auto=compress%2Cformat&q=90&ixlib=imgixjs-3.4.2"
            alt="AI-powered technology"
            className="object-cover h-full rounded-lg shadow-lg"
            height={600}
            width={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
