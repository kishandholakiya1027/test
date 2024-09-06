import Image from "next/image";
import ecoImg from "../../public/images/eco.jpg";
import cecoImg from "../../public/images/ceco.jpg";
import dynamic from 'next/dynamic'


import { useState } from "react";
import Accordion from "./Accordion";

const EcoSystem: React.FC = () => {
  const [src, setSrc] = useState<any>(ecoImg);

    return (
        <div className="my-20 w-full">
            <div className="lg:flex flex-col gap-3 justify-center px-16 text-center item-center" >
                <p className="text-3xl font-bold" >KALP Ecosystem</p>
                <p>The Kalp ecosystem is a pioneering decentralized and interoperable digital public infrastructure, designed to be the catalyst for a secure, inclusive, and equitable digital future. Our ecosystem is built on a foundation of regulatory compliance, scalability, and innovation.</p>
            </div>
            <div className="mt-6 relative w-full" 
              onMouseOver={() => setSrc(cecoImg)}
              onMouseOut={() => setSrc(ecoImg)}
             > 
            <Image
                    src={src}
                    alt="Overlay"
                />
                <div className="absolute bottom-0 w-full" >
                <Accordion/>
               </div>
            </div>
          
        </div>
    );
};

export default EcoSystem;
