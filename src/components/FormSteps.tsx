// src/components/FormSteps.tsx
import React, { useState } from "react";
import FormStep1 from "@/components/AccountCheckForm";
import FormStep2 from "@/components/InsuranceSelectionForm";
import FormStep3 from "@/components/NameForm";
import FormStep4 from "@/components/AddressGreetingForm";

interface FormStepsProps {
  initialStep?: number;
}

export const FormSteps: React.FC<FormStepsProps> = ({ initialStep = 1 }) => {
  const [formData, setFormData] = useState<any>({});
  const [step, setStep] = useState<number>(initialStep);

  const onSubmit = (data: any) => {
    setFormData((prevData: object) => ({ ...prevData, ...data }));
    setStep(step + 1);
  };

  return (
    <>
      {step === 1 && <FormStep1 onSubmit={onSubmit} />}
      {step === 2 && <FormStep2 onSubmit={onSubmit} />}
      {step === 3 && <FormStep3 onSubmit={onSubmit} />}
      {step === 4 && <FormStep4 onSubmit={onSubmit} />}
    </>
  );
};
