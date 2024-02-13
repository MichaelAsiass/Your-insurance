
import React from 'react';

interface RadioButtonProps {
  register: any;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ register, value }) => (
  <label className="inline-flex items-center mb-4 px-4 py-2 rounded-md cursor-pointer bg-gray-200 border-6 border-gray-300 w-full sm:flex-row-reverse sm:justify-end sm:px-10 sm:py-15">
    <input type="radio" {...register("account")} className="form-radio text-blue-500 w-full" value={value} />
    <span className="ml-2">{value}</span>
  </label>
);

export default RadioButton;