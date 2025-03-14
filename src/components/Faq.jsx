import { useState } from "react";
import { Icon } from "@iconify/react";
import { heading } from "../assets/styles/Style";

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  const firstColumn = faqs.filter((_, i) => i % 2 === 0);
  const secondColumn = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <div className="container font-manrope py-12 mx-auto px-4 lg:px-0 space-y-10">
      <h1 className={heading}>
        Frequently Asked <span className="text-[#5057E5]">Questions</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-6">

        <div className="flex-1 space-y-6">
          {firstColumn.map((faq, index) => (
            <div key={index} className="rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
              <button
                className={`w-full rounded-lg text-left px-5 py-4 font-medium transition-colors ${
                  openIndex === index * 2 ? "bg-secondary text-white" : "bg-white"
                }`}
                onClick={() => handleToggle(index * 2)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg">{faq.question}</span>
                  <Icon
                    icon="mdi:chevron-right"
                    className={`transition-transform duration-300 ${
                      openIndex === index * 2
                        ? "rotate-90 text-white"
                        : "rotate-0 text-gray-500"
                    }`}
                    width="24"
                    height="24"
                  />
                </div>
              </button>
              {openIndex === index * 2 && (
                <div
                  className="px-5 py-4 text-gray-700 border-t border-gray-200 animate-slide-in"
                  style={{ animation: "slide-in 0.3s ease-in-out" }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

     
        <div className="flex-1 space-y-6">
          {secondColumn.map((faq, index) => (
            <div key={index} className="rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
              <button
                className={`w-full rounded-lg text-left px-5 py-4 font-medium transition-colors ${
                  openIndex === index * 2 + 1 ? "bg-secondary text-white" : "bg-white"
                }`}
                onClick={() => handleToggle(index * 2 + 1)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg">{faq.question}</span>
                  <Icon
                    icon="mdi:chevron-right"
                    className={`transition-transform duration-300 ${
                      openIndex === index * 2 + 1
                        ? "rotate-90 text-white"
                        : "rotate-0 text-gray-500"
                    }`}
                    width="24"
                    height="24"
                  />
                </div>
              </button>
              {openIndex === index * 2 + 1 && (
                <div
                  className="px-5 py-4 text-gray-700 border-t border-gray-200 animate-slide-in"
                  style={{ animation: "slide-in 0.3s ease-in-out" }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes slide-in {
            0% {
              opacity: 0;
              transform: translateY(-5px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
