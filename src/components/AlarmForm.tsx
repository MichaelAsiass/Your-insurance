import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface AlarmOptionsProps {
  onSubmit: (selectedOptions: string[]) => void;
}

const AlarmOptions: React.FC<AlarmOptionsProps> = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const router = useRouter();

  const options = [
    { name: 'Fire Alarm', image: '/path/to/fire-alarm.jpg' },
    { name: 'Burglar Alarm', image: '/path/to/burglar-alarm.jpg' },
    { name: 'Smart Water Valve', image: '/path/to/smart-water-valve.jpg' },
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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AlarmOptions;