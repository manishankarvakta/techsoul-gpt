import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="mb-12">
      <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Ac mattis
            <span className="text-primary">senectus</span>erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <Link
            href="/chat"
            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
          >
            <Button>Try Now</Button>
          </Link>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src="https://bipartisan-policy-center.imgix.net/wp-content/uploads/2024/04/shutterstock_2102809798-scaled.jpg?auto=compress%2Cformat&q=90&ixlib=imgixjs-3.4.2"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-[300px] xl:h-112 2xl:h-128"
            height={300}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
