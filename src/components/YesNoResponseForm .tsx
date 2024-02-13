
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@material-tailwind/react";
import Radiobutton from "@/components/Radiobutton";

interface FormProps {
    onSubmit: (data: any) => void;
    isLoading: boolean;
}

const YesNoResponseForm : React.FC<FormProps> = ({ onSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center mb-4 w-1/2">
      <Radiobutton register={register} value="Yes" />
      <Radiobutton register={register} value="No" />
      <Button placeholder  = "" type="submit" color="gray" ripple={true}>
        Next {isLoading && <div className="loader" />}
      </Button>
    </form>
  );
};

export default YesNoResponseForm ;