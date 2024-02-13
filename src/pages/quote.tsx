
import React from 'react';
import QuoteNavbar from "@/components/QuoteNavbar";
import { FormSteps } from "@/components/FormSteps";
import "../app/globals.css"

export default function Quote() {
  return (
    <>
      <QuoteNavbar />
      <div className="flex flex-col min-h-screen justify-center items-center bg-white p-8">
        <header className="container mx-auto flex flex-col items-center justify-center">
          <FormSteps initialStep={1} />
        </header>
      </div>
    </>
  );
}