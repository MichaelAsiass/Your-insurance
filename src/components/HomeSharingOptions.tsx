import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography } from "@material-tailwind/react";


interface HomeSharingOptionsProps {
  onSubmit: (selectedOptions: string[]) => void;
}

const HomeSharingOptions: React.FC<HomeSharingOptionsProps> = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const router = useRouter();

  const options = [
    { name: 'Roommates', image: '/path/to/roommates.jpg' },
    { name: 'Partner', image: '/path/to/partner.jpg' },
    { name: 'Kids', image: '/path/to/kids.jpg' },
    { name: 'Dogs', image: '/path/to/dogs.jpg' },
    { name: 'Cats', image: '/path/to/cats.jpg' },
  ];

  const handleOptionChange = (option: string) => {
    setSelectedOptions(prevOptions =>
      prevOptions.includes(option)
        ? prevOptions.filter(o => o !== option)
        : [...prevOptions, option]
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(selectedOptions);
    router.push('/next-page');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography placeholder = "true">Do you share your home with any of the following?</Typography>
      {options.map(option => (
        <div key={option.name}>
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.name)}
              onChange={() => handleOptionChange(option.name)}
            />
            {option.name}
            <img src={option.image} alt={option.name} />
          </label>
        </div>
      ))}
      <Button placeholder = "" color="gray" ripple={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default HomeSharingOptions;