import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography } from "@material-tailwind/react";
import YesNoResponseForm from './YesNoResponseForm ';

interface ValuableItemsProps {
    onSubmit: (hasValuableItems: boolean) => void;
}

const ValuableItems: React.FC<ValuableItemsProps> = ({ onSubmit }) => {
  const [hasValuableItems, setHasValuableItems] = useState<boolean | null>(null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (hasValuableItems !== null) {
      onSubmit(hasValuableItems);
      router.push('/next-page');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography placeholder={""}>Do you own any valuable jewelry, cameras, bikes or fine art? 💍 💍 💍</Typography>
      <YesNoResponseForm value= {true} onChange={setHasValuableItems} />
      <Button placeholder={""} color="gray" ripple={true} type="submit">
        Next
      </Button>
    </form>
  );
};

export default ValuableItems;