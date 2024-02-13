import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography, Icon } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

interface QuoteFormProps {
  onSubmit: (data: { email: string; birthday: string }) => void;
}

interface FormInputs {
  email: string;
  birthday: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleNextClick = (data: FormInputs) => {
    setIsLoading(true);
    setTimeout(() => {
      onSubmit(data);
      router.push('/next-page');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <Typography variant="h1" color="blue-gray" className="mb-4 lg:text-5xl !leading-tight text-3xl text-center">
        Alright, let's get you a quote.
      </Typography>
      <form onSubmit={handleSubmit(handleNextClick)} className="flex flex-col items-center justify-center mb-4 w-1/2">
        <label className="inline-flex items-center mb-4 rounded-md cursor-pointer bg-gray-200 border border-gray-300 w-full sm:flex-row-reverse sm:justify-end sm:px-10 sm:py-15">
          <input type="email" {...register("email", { required: "Email is required" })} className="px-4 py-2 form-input text-grey-500 w-full" placeholder="Email Address" />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label className="inline-flex items-center bg-gray-200 rounded-md cursor-pointer border border-gray-300 w-full sm:flex-row-reverse sm:justify-end sm:px-10 sm:py-15">
          <Icon name="event" size="2xl" />
          <input type="date" {...register("birthday", { required: "Birthday is required" })} className="px-4 py-2 form-input text-grey-500 w-full" placeholder="Birthday" />
          {errors.birthday && <span>{errors.birthday.message}</span>}
        </label>
        <Button className='px-8' color="gray" ripple={true} size='lg' type="submit">
          Next {isLoading && <div className="loader" />}
        </Button>
      </form>
    </>
  );
};

export default QuoteForm;