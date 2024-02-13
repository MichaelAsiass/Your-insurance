import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { Button } from "@material-tailwind/react";
import { useRouter } from 'next/router';

interface AddressFormProps {
  userName: string;
  onSubmit: (address: string, aptNumber: string) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ userName, onSubmit }) => {
  const [address, setAddress] = useState('');
  const [aptNumber, setAptNumber] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(address, aptNumber);
    router.push('/alarms');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Great to meet you {userName}! What's your home address?</p>
      <div className="input-group">
        <FiMapPin className="input-group-prepend" />
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street Address, City, State" />
      </div>
      <div className="input-group">
        <input type="text" value={aptNumber} onChange={(e) => setAptNumber(e.target.value)} placeholder="APT/UNIT #" />
      </div>
      <Button placeholder = "" color="gray" ripple={true} type="submit">
        Next
      </Button>
    </form>
  );
}

export default AddressForm;