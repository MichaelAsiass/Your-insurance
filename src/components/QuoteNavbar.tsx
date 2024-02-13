
import React from "react";
import { Navbar as MTNavbar, Typography } from "@material-tailwind/react";
import Image from 'next/image'; 
import logo from '../assets/img.jpg';
export function QuoteNavbar() {
  return (
    <MTNavbar placeholder = "" shadow={false} fullWidth className="border-0 sticky top-0 z-50 relative">
      <div className="mx-auto flex items-center justify-between pb-2 border-b-2 border-gray-200 w-full">
        <div className="flex-grow">
          <Typography placeholder = "" color="blue-gray" className="text-lg font-bold">
            Simple Insurance
          </Typography>
        </div>
        <div className="flex-grow"></div>
      </div>
      <div className="rounded-full h-20 w-20 absolute left-1/2 top-3/5 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <Image 
          src={logo} 
          alt="Logo" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
    </MTNavbar>
  );
}

export default QuoteNavbar;