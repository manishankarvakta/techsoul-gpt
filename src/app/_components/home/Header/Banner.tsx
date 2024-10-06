"use client";

import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import Link from "next/link";
import aiImage from "@/assets/artificial_intelligence.svg";

export default function Banner() {
  const user = useUser();

  return (
    <section className="h-screen flex items-center">
      <div className="container px-6  mx-auto lg:px-0">
        <div className="flex flex-col items-center lg:flex-row">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 lg:max-w-xl">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Unleash the Power of AI
                <span className="block text-gray-500">
                  Innovate with Intelligence
                </span>
              </h1>
              <p className="mt-6 mb-8 text-lg text-black/70 sm:mb-12">
                Experience cutting-edge AI solutions that transform the way you
                work. Automate, analyze, and accelerate with the future of
                technology at your fingertips.
              </p>
              <Link
                href={user ? "/chat" : "/auth/login"}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-4 lg:justify-start"
              >
                <Button className="px-6 py-3 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700">
                  Explore AI
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image
              src={aiImage}
              alt="Artificial Intelligence Illustration"
              width={500}
              height={500}
              className="w-full h-full"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
