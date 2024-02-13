"use client";

import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center h-full">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Simplify, Quote, Insure
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            In just one minute, we simplify insurance – quick quotes, swift
            policies, and a hassle-free process
          </Typography>
          <div className="grid">
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                Get Insured
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;