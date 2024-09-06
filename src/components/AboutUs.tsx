import Image from "next/image";
import aboutMainImg from "../../public/images/aboutMain.jpg";
import overlayImg from "../../public/images/ABOUT US.png";
import aboutUs1 from "../../public/images/aboutUs1.jpg";
import aboutUs2 from "../../public/images/about.png";
import member1 from "../../public/images/member.jpg";
import member2 from "../../public/images/member2.png";
import cmember1 from "../../public/images/member1.jpg";
import cmember2 from "../../public/images/cmember2.jpg";
import caboutUs1 from "../../public/images/caboutUs1.jpg";
import caboutUs2 from "../../public/images/cabout.jpg";
import governance from "../../public/images/about1.png";
import cgovernance from "../../public/images/cabout1.png";
import dynamic from 'next/dynamic'

import { useEffect, useState } from "react";

const AboutUs: React.FC = () => {
    const [select, setSelect] = useState('OUR STORY');
    const [transitioning, setTransitioning] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        setIsDesktop(window.innerWidth > 640);
    }, []);
    let text = ['OUR STORY', 'FOUNDING MEMBERS', 'OUR VALUES', 'GOVERNANCE FRAMEWORK']

    const handleChange = (data: string) => {
        // Trigger transition when state changes
        setTransitioning(true);
        setTimeout(() => {
          setSelect(data);
          setTransitioning(false); // Reset after transition
        }, 500); // Match duration with CSS transition time
      };
    const [hoveredImage, setHoveredImage] = useState<any>(null);

    // Dummy image sources for hovering
    const hoverImages: any = {
        aboutUs1: caboutUs1,
        member1: cmember1,
        member2: cmember2,
        aboutUs2: caboutUs2,
        governance: cgovernance
    };

    const handleMouseOver = (imageKey: any) => {
        setHoveredImage(hoverImages[imageKey]);
    };

    const handleMouseOut = () => {
        setHoveredImage(null);
    };

    const OurStory=()=>{
        return(
            <div className="lg:w-[62%] ">
            <div className={` transition-opacity transform ${
transitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
} duration-[1500ms] ease-in-out`}>
                <div>
                    <Image
                        src={hoveredImage === hoverImages.aboutUs1 ? hoverImages.aboutUs1 : aboutUs1}
                        alt="Overlay"
                        onMouseOver={() => handleMouseOver('aboutUs1')}
                        onMouseOut={handleMouseOut}
                        className="lg:w-full object-cover lg:h-[100%]  h-[136px]"
                    />
                </div>
                <div className="lg:text-[15px] text-[12px]">
                    <p className="mt-4">
                        Born from a vision of a more equitable digital future, the Kalp Decentra Foundation emerged in 2020 before formally consolidating in the year 2023 as a response to the growing need for secure, compliant, and inclusive blockchain infrastructure. Our founders, led by Tapan Sangal, recognized that the true potential of decentralized technology could only be realized if it was built on a foundation of regulatory compliance and community-driven governance.
                    </p>
                    <p className="mt-6">
                        Motivated by the challenges of fragmented liquidity, regulatory uncertainty, and the need for scalable, interoperable solutions, we set out to create a Digital Public Infrastructure that would democratize access to blockchain technology while maintaining the highest standards of security and compliance.
                    </p>
                </div>
            </div>
        </div>
        )
    }
    const FoundingMembers=()=>{
        return(
            <div className="flex lg:flex-wrap lg:gap-20 lg:ml-[46px] lg:mt-0 mt-4 overflow-x-auto space-x-8 ">
            <div className="transition-transform duration-[1500ms] lg:max-w-[264px]">
                <div>
                    <Image
                        src={hoveredImage === hoverImages.member1 ? hoverImages.member1 : member1}
                        alt="Overlay"
                        onMouseOver={() => handleMouseOver('member1')}
                        onMouseOut={handleMouseOut}
                    />
                </div>
                <div className="mt-4">
                    <p className="lg:text-[20px] text-[15px]  font-semibold">Tapan Sangal</p>
                    <p className="lg:text-md text-sm" >Founder and Permanent Director</p>
                    <p className="mt-6 lg:text-[14px] text-sm">
                        Lorem ipsum dolor sit amet consectetur. Elementum risus lorem proin dignissim neque. Et euismod sem risus sollicitudin a placerat libero viverra. Ut pharetra sit in libero tortor tellus. Mi a diam fringilla mauris.
                    </p>
                </div>
            </div>

            <div className="transition-transform duration-[1500ms] max-w-[264px]">
                <div>
                    <Image
                        src={hoveredImage === hoverImages.member2 ? hoverImages.member2 : member2}
                        alt="Overlay"
                        onMouseOver={() => handleMouseOver('member2')}
                        onMouseOut={handleMouseOut}
                    />
                </div>
                <div className="mt-4">
                    <p className="lg:text-[20px] text-[15px]  font-semibold">Shubham Raj</p>
                    <p className="lg:text-md text-sm" >Head - CTO</p>
                    <p className="mt-6 lg:text-[14px] text-sm">
                        Lorem ipsum dolor sit amet consectetur. Elementum risus lorem proin dignissim neque. Et euismod sem risus sollicitudin a placerat libero viverra. Ut pharetra sit in libero tortor tellus. Mi a diam fringilla mauris.
                    </p>
                </div>
            </div>
        </div>
        )
    }
    const OurValues=()=>{
        return(
            <div className="lg:w-[63%]">
            <div className="transition-transform duration-[1500ms]">
                <div>
                    <Image
                        src={hoveredImage === hoverImages.aboutUs2 ? hoverImages.aboutUs2 : aboutUs2}
                        alt="Overlay"
                        onMouseOver={() => handleMouseOver('aboutUs2')}
                        onMouseOut={handleMouseOut}
                        className="lg:w-full object-cover lg:h-[100%]  h-[136px]"

                    />
                </div>
                <div className="text-[15px]">
                    <p className="mt-4 text-sm lg:text-md">At Kalp Decentra Foundation, our actions are guided by a set of core principles:</p>
                    <ul className="list-decimal list-inside text-start mt-4 pl-3 lg:space-y-4 space-y-3">
                        <li className="">
                            <span className="text-sm lg:text-md">Compliance-First Approach:</span> We believe innovation thrives within ethical and legal frameworks.
                        </li>   
                        <li className="">
                            <span className="text-sm lg:text-md">Transparency:</span> We commit to open governance and clear communication in all our operations.
                        </li>
                        <li className="">
                            <span className="text-sm lg:text-md">Inclusivity:</span> We strive to create technology that empowers all, regardless of background or resources.
                        </li>
                        <li className="">
                            <span className="text-sm lg:text-md">Sustainability:</span> Our commitment to the environment is embedded in our technological solutions.
                        </li>
                        <li className="">
                            <span className="text-sm lg:text-md">Innovation:</span> We continuously push the boundaries of whats possible in decentralized technology.
                        </li>
                        <li className="">
                            <span className="text-sm lg:text-md">Community-Driven:</span> We believe in the power of collective wisdom and shared governance.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
    const Governance=()=>{
        return(
             <div className="lg:w-[62%]">
                        <div className="transition-transform duration-[1500ms]">
                            <div>
                                <Image
                                    src={hoveredImage === hoverImages.governance ? hoverImages.governance : governance}
                                    alt="Overlay"
                                    onMouseOver={() => handleMouseOver('governance')}
                                    onMouseOut={handleMouseOut}
                        className="lg:w-full object-cover lg:h-[100%]  h-[136px]"

                                />
                            </div>
                            <div className="lg:text-[15px] text-[12px]">
                                <p className="mt-4">
                                    The Kalp Decentra Foundation operates under a robust governance structure designed to ensure transparency, accountability, and community participation. Our framework includes:
                                </p>
                                <ul className="list-disc text-start pl-3">
                                    <li className="">A diverse Board of Directors with expertise across relevant fields</li>
                                    <li className="">Multiple specialized committees overseeing various aspects of our operations</li>
                                    <li className="">A two-tier grievance redressal mechanism to ensure fair resolution of issues</li>
                                    <li className="">Regular internal and external audits to maintain the highest standards of operation</li>
                                </ul>
                                <p className="mt-4">
                                    Our governance model is designed to evolve with the needs of our community and the changing landscape of blockchain technology. We believe in the power of decentralized decision-making, balanced with the need for expert guidance and regulatory compliance.
                                </p>
                                <p className="">
                                    For a detailed look at our governance structure, please review our full Governance Framework Document.
                                </p>
                               {isDesktop ? <p className="mt-4">
                                    Join us in our mission to create a more equitable, secure, and innovative digital future. Together, we are not just building technology – we are shaping the future of global digital interaction.
                                </p>: null } 
                            </div>
                        </div>
                    </div>
        )
    }

    return (
        <div className="relative w-full mt-12 lg:mt-0 lg:h-screen">
            {/* Background Image */}
            <Image
                src={aboutMainImg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="z-0"
            />

            {/* Content over the background */}
            <div className="relative z-10 lg:flex flex-wrap lg:gap-16 h-full lg:px-10 px-4 lg:py-10 py-6 text-[#fff]">
            <div className={`${isDesktop ? '': 'flex overflow-x-auto space-x-8'}`}>
  {text?.map((data: any, index: any) => (
    <div
      key={index}
      className={`w-full lg:text-[23px] text-sm lg:pb-6 pb-5 ${index === 3 ? '' : 'lg:border-b border-[#B1B1B1]/40'} transition-transform duration-[1500ms] cursor-pointer ${
        data === select ? 'font-semibold ' : 'text-[#B1B1B1]/40'
      } lg:mb-6`}
      onClick={() => setSelect(data)}
    >
     <p className="whitespace-nowrap text-ellipsis">{data}</p>
    </div>
  ))}
</div>

                
                {select === 'OUR STORY' ? <OurStory/> : null}

                {select === 'FOUNDING MEMBERS' ? (
                 <FoundingMembers/>
                ) : null}

                {select === 'OUR VALUES' ? (
                  <OurValues/>  
                ) : null}

                {select === 'GOVERNANCE FRAMEWORK' ? (
                  <Governance/>
                ) : null}

            </div>
           {isDesktop ? <div className="absolute top-0 right-0 bg-[#000] pt-32 pb-8 h-full w-[7%] z-20 sm:hidden">
                <Image
                    src={overlayImg}
                    alt="Overlay"
                    width={60}
                />
            </div> : null } 
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        </div>
    );
};

export default AboutUs;
