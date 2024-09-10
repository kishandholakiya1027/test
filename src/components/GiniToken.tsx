import Image from 'next/image';
import giniImage from '../../public/images/gini.png'; // Place your image in the public directory
import giniColoured from '../../public/images/giniColoured.jpg'; // Place your image in the public directory
import giniToken from '../../public/images/giniToken.jpg'; // Place your image in the public directory
import { useEffect, useState } from 'react';

export default function GiniToken() {
  const [src, setSrc] = useState<any>(giniToken);
  const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        setIsDesktop(window.innerWidth > 640);
    }, []);
    return (
        <div>
            <div className="lg:flex items-center justify-center w-full mt-28">
                <div className="flex justify-center items-center lg:w-[40%] ">
                    {/* Left Line */}
                   {isDesktop ?  <div className="relative h-[1px] w-1/2">
                        <div className="absolute inset-0 bg-black"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent from-gray-300 w-10"></div>
                    </div> : null }
                    {/* Center Image */}
                    <div className="bg-black relative lg:h-[65px] bg-[#F4F4F4] lg:w-[250px] h-[55px] w-[150px]">
                        <div className='absolute top-1 right-6'>
                            <Image src={giniImage} alt="Center Image" className=' top-0 lg:h-[55px] lg:w-[185px]  mx-3' />

                        </div>
                    </div>

                    {/* Right Line */}
                    { isDesktop ? <div className="relative h-[1px] w-1/2">
                        <div className="absolute inset-0 bg-black"></div>
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent from-gray-300 w-10 ml-auto"></div>
                    </div> : null }
                </div>

            </div>
            <div className="lg:flex flex-col gap-3 justify-center lg:px-12 text-center item-center lg:mt-10 mt-5" >
                <p className="lg:text-3xl font-bold" >The Kalp ecosystem offers a game-changing solution.</p>
                <p className='mt-2 lg:text-[15px] text-[13px] lg:px-6 '>It seamlessly merges the best of permissionless and permissioned networks, ensuring regulatory compliance without sacrificing decentralization. Governed by the Kalp Foundation and accessed via the <span className='font-bold' >{`"Gini"`}</span> token.</p>
            </div>
            <div className='max-w-[530px] lg:hidden mt-4' 
                  onMouseOver={()=>setSrc(giniColoured)}
                  onMouseOut={()=>setSrc(giniToken) }
                  onTouchStart={()=>setSrc(giniColoured)}
                  onTouchEnd={()=>setSrc(giniToken) }
                >
                <Image src={src} alt="Center Image" 
             loading="lazy" 
                width={530} 
        height={300} 

                className="transition-transform duration-4000 ease-in-out "/>
                </div>
            <div className='flex flex-wrap lg:px-4 gap-4 justify-between lg:mt-10'>
        <div className='max-w-[650px] lg:mt-12 mt-4'>
            <p className='lg:text-[23px] text-md font-semibold' >Our Digital Catalyst</p>
            <p className='mt-2 lg:text-[14px] text-[12px] '>At the heart of the KALP Foundation&apos;s mission lies our digital currency, Gini. Designed to empower individuals and communities, Gini serves as a tool for inclusivity, transparency, and equitable reward within our ecosystem. Gini is a utility fuel to access the services of the Kalp DPI.</p>
            <p className='mt-2 lg:text-[14px] text-[12px] mt-6'>Gini embodies the values and principles upheld by the KALP Foundation, a non-profit organization dedicated to responsible innovation and societal progress. As a token governed by the Foundation, Gini represents our commitment to democratizing access to digital assets and fostering a community-driven economy.</p>
           <div>
           <p className='text-sm font-semibold mt-6' >Key Features:</p>
           <ul className="list-disc text-start mt-2 lg:text-[14px] text-[12px] pl-6 space-y-1">
                        <li className="mt-6">
                        Democratic Governance
                        </li>   
                        <li className="mt-6">
                        Equitable Reward 
                        </li>
                        <li className="mt-6">
                        Innovative Utility
                        </li>
                        </ul>
           </div>
         
        </div>
               {isDesktop ? 
                  <div className='max-w-[530px]' 
                  onMouseOver={()=>setSrc(giniColoured)}
                  onMouseOut={()=>setSrc(giniToken) }
                  onTouchStart={()=>setSrc(giniColoured)}
                  onTouchEnd={()=>setSrc(giniToken) }
                >
                <Image src={src} alt="Center Image" 
             loading="lazy" 
                width={530} 
        height={300} 

                className="transition-transform duration-4000 ease-in-out "/>
                </div>
                : null} 
            

            </div>
        </div>
    );
}
