import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Aaccordion = ({ name, datas }) => {
  return (
    <div className="mt-6 w-full max-w-screen-lg mx-auto px-4 sm:px-8 lg:px-16">
      <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold mb-4">
        {name}
      </h1>

      {datas.map((data, index) => (
        <div key={index}>
          <hr className="my-2 border-gray-300" />
          <Accordion type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-[18px] sm:text-[20px] lg:text-[24px] font-medium text-left">
                {data.name}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] sm:text-[16px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {data.ans}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Aaccordion;
