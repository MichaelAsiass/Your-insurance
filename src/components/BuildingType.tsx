import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography } from "@material-tailwind/react";


interface BuildingTypeProps {
  onSubmit: (selectedOption: string) => void;
}

const BuildingType: React.FC<BuildingTypeProps> = ({ onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const router = useRouter();

  const options = [
    { name: 'Single Family', image: '/path/to/single-family.jpg' },
    { name: 'Multi Family', image: '/path/to/multi-family.jpg' },
    { name: 'TownHouse', image: '/path/to/townhouse.jpg' },
    { name: 'Apartment', image: '/path/to/apartment.jpg' },
  ];

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(selectedOption);
    router.push('/next-page');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography placeholder={''}>What kind of building do you live in?</Typography>
      {options.map(option => (
        <div key={option.name}>
          <label>
            <input
              type="radio"
              name="buildingType"
              checked={selectedOption === option.name}
              onChange={() => handleOptionChange(option.name)}
            />
            {option.name}
            <img src={option.image} alt={option.name} />
          </label>
        </div>
      ))}
      <Button placeholder={''} color="gray" ripple={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default BuildingType;