import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography } from "@material-tailwind/react";

interface PortableElectronicsProps {
  onSubmit: (hasPortableElectronics: boolean) => void;
}

const PortableElectronics: React.FC<PortableElectronicsProps> = ({ onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const router = useRouter();

  const handleNextClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      const hasPortableElectronics = response === 'Yes';
      onSubmit(hasPortableElectronics);
      router.push('/next-page');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <Typography variant="h1" color="blue-gray" className="mb-4 lg:text-5xl !leading-tight text-3xl text-center">
        How about portable Electronics?
      </Typography>
      <div className="flex flex-col items-center justify-center mb-4 w-1/2">
        <label className="inline-flex items-center mb-4 rounded-md cursor-pointer bg-gray-200 border border-gray-300 w-full sm:flex-row-reverse sm:justify-end sm:px-10 sm:py-15">
          <input type="radio" name="response" value="Yes" checked={response === 'Yes'} onChange={() => setResponse('Yes')} />
          Yes
        </label>
        <label className="inline-flex items-center bg-gray-200 rounded-md cursor-pointer border border-gray-300 w-full sm:flex-row-reverse sm:justify-end sm:px-10 sm:py-15">
          <input type="radio" name="response" value="No" checked={response === 'No'} onChange={() => setResponse('No')} />
          No
        </label>
      </div>
      <Button className='px-8' color="gray" ripple={true} size='lg' onClick={handleNextClick}>
        Next {isLoading && <div className="loader" />}
      </Button>
    </>
  );
};

export default PortableElectronics;