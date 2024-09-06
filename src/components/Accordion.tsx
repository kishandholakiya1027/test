import React, { useState } from "react";
import closeImage from "../../public/images/do_not_disturb_on.png";
import openImage from "../../public/images/add_circle.png";
import Image from "next/image";


function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="lg:grid grid-cols-3 text-white gap-4 ">
      {/* Key Components */}
      <div className={`col-span-1  bg-black/50 py-4 backdrop-blur-sm`}>
        <button
          className="w-full text-left text-2xl px-4 font-bold flex justify-between gap-10 items-center"
          onClick={() => toggleAccordion(0)}
        >
          Key Components
          <span>{activeIndex === 0 ? <Image src={closeImage} alt={'donotdisturb'}   /> : <Image src={openImage} alt={'add cirsle'} /> }</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeIndex === 0 ? "max-h-96" : "max-h-0 hidden"
          }`}
        >
            <div className="flex flex-wrap gap-16 mb-4 mt-10 px-4 " >
                <div className="flex flex-col gap-5 " >
                    <p>Kalp Compiler</p>
                    <p>Kalp Conjurer</p>
                    <p>Kalp Insight</p>
                </div>
                <div className="flex flex-col gap-5 ">
                    <p>Kalp Wallet</p>
                    <p>Kalp Explorer</p>
                </div>
            </div>
         
        </div>
      </div>

      {/* Benefits */}
      <div className="col-span-1   bg-black/50 py-4 backdrop-blur-sm">
        <button
          className="w-full text-left font-bold text-2xl px-4 flex justify-between items-center"
          onClick={() => toggleAccordion(1)}
        >
          Benefits
          <span>{activeIndex === 1 ? <Image src={closeImage} alt={'donotdisturb'}   /> : <Image src={openImage} alt={'add cirsle'} /> }</span>

        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeIndex === 1 ? "max-h-96" : "max-h-0 "
          }`}
        >
             <div className="flex flex-wrap gap-20 mb-4 mt-10 px-4 " >
                <div className="flex flex-col gap-5 " >
                    <p>Regulatory Compliance</p>
                    <p>Scalability</p>
                    <p>Interoperability</p>
                </div>
                <div className="flex flex-col gap-5 ">
                    <p>Security</p>
                    <p>Inclusivity</p>
                </div>
            </div>
        </div>
      </div>

      {/* Technology */}
      <div className=" col-span-1 bg-black/60 backdrop-blur-sm py-4">
        <button
          className="w-full text-left font-bold text-2xl px-4 flex justify-between items-center"
          onClick={() => toggleAccordion(2)}
        >
          Technology
          <span>{activeIndex === 2 ? <Image src={closeImage} alt={'donotdisturb'}   /> : <Image src={openImage} alt={'add cirsle'} /> }</span>

        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeIndex === 2 ? "max-h-96" : "max-h-0"
          }`}
        >
         <div className="flex flex-wrap gap-20 mb-4 mt-10 px-4 " >
                <div className="flex flex-col gap-5 " >
                    <p>Modular Architecture</p>
                    <p>Smart Contract Capabilities</p>
                    <p>Cross-Chain Interoperability</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
