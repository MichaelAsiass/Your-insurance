// src/components/FormStep2.tsx
import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { BuildingOfficeIcon, CheckIcon } from "@heroicons/react/24/solid";

interface FormStep2Props {
  onSelection: (data: any) => void;
}

const FormStep2: React.FC<FormStep2Props> = ({ onSelection }) => {
const [isLoading, setIsLoading] = useState(false);
const [selectedOption, setSelectedOption] = useState("");

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
      <Typography placeholder= "Which insurance would you like?"
        variant="h1"
        color="blue-gray"
        className="mb-4 lg:text-5xl !leading-tight text-3xl text-center"
      >
        Which insurance would you like?
      </Typography>
      <div className="flex flex-col items-center justify-center mb-4 w-1/2">
        <div
          className={`inline-flex items-center bg-gray-200 px-8 py-4 rounded-md cursor-pointer border border-gray-300 w-full sm:flex-row-reverse sm:justify-end sm:px-16 sm:py-8 ${
            selectedOption === "Option 2" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleOptionClick("Option 2")}
        >
          <BuildingOfficeIcon className="h-8 w-8 text-blue-gray-500" />
          <span className="ml-2 text-lg">Renters</span>
          {selectedOption === "Option 2" && (
            <CheckIcon className="h-8 w-8 text-blue-500 ml-auto" />
          )}
        </div>
      </div>
      <div className="p-4">
        <Button placeholder = "" color="gray" ripple= {true} onClick={handleNextClick}>
          Next {isLoading && <div className="loader" />}
        </Button>
      </div>
    </>
  );
};

export default FormStep2;