"use client";

import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you offer international shipping?",
      answer: "Yes, Adia provides secure, insured international shipping to most countries. All pieces are shipped via our trusted luxury couriers. Shipping times and fees vary depending on the destination."
    },
    {
      question: "How can I track my custom order?",
      answer: "Once a custom commission begins, you will be assigned a dedicated concierge. They will provide you with regular updates, including sketches and progress photos of your piece being crafted in our atelier."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns on ready-to-wear pieces within 14 days of delivery, provided they are unworn, in pristine condition, and returned with their original packaging and certificates. Custom and engraved items are final sale."
    },
    {
      question: "Do you provide certificates of authenticity?",
      answer: "Absolutely. Every piece of Adia jewelry is accompanied by a certificate of authenticity. For diamonds and certain precious stones, an independent grading report (such as GIA) is also provided."
    },
    {
      question: "Can I upgrade a diamond purchased from Adia?",
      answer: "Yes, we offer a lifetime diamond upgrade program for solitaire engagement rings. You may exchange your original diamond for a new one of at least 1.5x the original value."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      <h2 className="font-[family-name:var(--font-cormorant)] text-4xl lg:text-5xl text-black mb-4 md:mb-8 font-medium md:font-light">
        Frequently Asked Questions
      </h2>
      
      <div className="flex flex-col">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="flex flex-col border-b border-black/10">
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full py-8 text-left focus:outline-none group"
                aria-expanded={isOpen}
              >
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-black">
                  {faq.question}
                </h3>
                <span className={`text-black transition-transform duration-500 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0 pb-0"}`}
              >
                <p className="min-h-0 font-[family-name:var(--font-inter)] text-base font-light text-black/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
