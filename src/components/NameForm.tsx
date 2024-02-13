// src/components/FormStep3.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography } from "@material-tailwind/react";

interface FormProps {
  onSubmit: (data: any) => void;
}

const FormStep3: React.FC<FormProps> = ({ onSubmit }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNextClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      onSubmit({ firstName, lastName });
    }, 2000); 
  };

  return (
    <>
      <Typography placeholder = ''
        variant="h1"
        color="blue-gray"
        className="mb-4 lg:text-5xl !leading-tight text-3xl text-center"
      >
        I’ll get you an awesome 
        price in minutes. Ready to go?
      </Typography>
      <div className="flex flex-col items-center justify-center mb-4 w-1/2">
        <label className="inline-flex items-center mb-4  rounded-md cursor-pointer bg-gray-200 border border-gray-300 w-full sm:flex-row-reverse sm:justify-end sm:px-10 sm:py-15">
          <input type="text" className="px-4 py-2 form-input text-grey-500 w-full" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
        </label>
        <label className="inline-flex items-center bg-gray-200  rounded-md cursor-pointer border border-gray-300 w-full sm:flex-row-reverse sm:justify-end sm:px-10 sm:py-15">
          <input type="text" className="px-4 py-2 form-input text-grey-500 w-full" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
        </label>
      </div>
      <Button placeholder = '' className='px-8' color="gray" ripple= {true} size='lg' onClick={handleNextClick}>
        Next {isLoading && <div className="loader" />}
      </Button>
    </>
  );
};

export default FormStep3;