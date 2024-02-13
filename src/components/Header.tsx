// Header.tsx
import React from 'react';
import { Typography } from "@material-tailwind/react";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => (
  <Typography placeholder = ""
    variant="h1"
    color="blue-gray"
    className="mb-4 lg:text-5xl !leading-tight text-3xl text-center"
  >
    {text}
  </Typography>
);

export default Header;