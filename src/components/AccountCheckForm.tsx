// src/components/FormStep1.tsx
import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/solid";

interface FormProps {
  onSubmit: (data: any) => void;
}

const FormStep1: React.FC<FormProps> = ({ onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNextClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      onSubmit({ selectedOption });
    }, 2000);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Typography placeholder={""}
        variant="h1"
        color="blue-gray"
        className="mb-4 lg:text-5xl !leading-tight text-3xl text-center"
      >
        Hey! I’m Michael. Do you already have a Simple account?
      </Typography>
      <div className="flex flex-col items-center justify-center mb-4 w-1/2">
        <div
          className={`inline-flex items-center bg-gray-200 px-4 py-4 rounded-md cursor-pointer border border-gray-300 w-full sm:flex-row-reverse sm:justify-end sm:px-16 sm:py-8 ${
            selectedOption === "Yes" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleOptionClick("Yes")}
        >
          <span className="ml-2 text-lg">Yes</span>
          {selectedOption === "Yes" && (
            <CheckIcon className="h-8 w-8 text-blue-500 ml-auto" />
          )}
        </div>
        <div
          className={`inline-flex items-center bg-gray-200 px-4 py-4 rounded-md cursor-pointer border border-gray-300 w-full sm:flex-row-reverse sm:justify-end sm:px-16 sm:py-8 ${
            selectedOption === "No" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleOptionClick("No")}
        >
          <span className="ml-2 text-lg">No</span>
          {selectedOption === "No" && (
            <CheckIcon className="h-8 w-8 text-blue-500 ml-auto" />
          )}
        </div>
      </div>
      <div className="p-4">
        <Button placeholder = "" color="gray" ripple={true} onClick={handleNextClick}>
          Next {isLoading && <div className="loader" />}
        </Button>
      </div>
    </>
  );
};

export default FormStep1;