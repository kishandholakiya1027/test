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

import { useState } from "react";

const AboutUs: React.FC = () => {
    const [select, setSelect] = useState('OUR STORY');
    const [transitioning, setTransitioning] = useState(false);
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
            <div className="w-[62%] ">
            <div className={` transition-opacity transform ${
transitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
} duration-[1500ms] ease-in-out`}>
                <div>
                    <Image
                        src={hoveredImage === hoverImages.aboutUs1 ? hoverImages.aboutUs1 : aboutUs1}
                        alt="Overlay"
                        onMouseOver={() => handleMouseOver('aboutUs1')}
                        onMouseOut={handleMouseOut}
                    />
                </div>
                <div className="text-[15px]">
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
            <div className="flex flex-wrap gap-20 ml-[46px]">
            <div className="transition-transform duration-[1500ms] max-w-[264px]">
                <div>
                    <Image
                        src={hoveredImage === hoverImages.member1 ? hoverImages.member1 : member1}
                        alt="Overlay"
                        onMouseOver={() => handleMouseOver('member1')}
                        onMouseOut={handleMouseOut}
                    />
                </div>
                <div className="mt-4">
                    <p className="text-[20px] font-semibold">Tapan Sangal</p>
                    <p>Founder and Permanent Director</p>
                    <p className="mt-6 text-[14px]">
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
                    <p className="text-[20px] font-semibold">Shubham Raj</p>
                    <p>Head - CTO</p>
                    <p className="mt-6 text-[14px]">
                        Lorem ipsum dolor sit amet consectetur. Elementum risus lorem proin dignissim neque. Et euismod sem risus sollicitudin a placerat libero viverra. Ut pharetra sit in libero tortor tellus. Mi a diam fringilla mauris.
                    </p>
                </div>
            </div>
        </div>
        )
    }
    const OurValues=()=>{
        return(
            <div className="w-[63%]">
            <div className="transition-transform duration-[1500ms]">
                <div>
                    <Image
                        src={hoveredImage === hoverImages.aboutUs2 ? hoverImages.aboutUs2 : aboutUs2}
                        alt="Overlay"
                        onMouseOver={() => handleMouseOver('aboutUs2')}
                        onMouseOut={handleMouseOut}
                    />
                </div>
                <div className="text-[15px]">
                    <p className="mt-4">At Kalp Decentra Foundation, our actions are guided by a set of core principles:</p>
                    <ul className="list-decimal list-inside text-start mt-4 pl-3 space-y-4">
                        <li className="">
                            <span className="text-md">Compliance-First Approach:</span> We believe innovation thrives within ethical and legal frameworks.
                        </li>
                        <li className="">
                            <span className="text-md">Transparency:</span> We commit to open governance and clear communication in all our operations.
                        </li>
                        <li className="">
                            <span className="text-md">Inclusivity:</span> We strive to create technology that empowers all, regardless of background or resources.
                        </li>
                        <li className="">
                            <span className="text-md">Sustainability:</span> Our commitment to the environment is embedded in our technological solutions.
                        </li>
                        <li className="">
                            <span className="text-md">Innovation:</span> We continuously push the boundaries of what's possible in decentralized technology.
                        </li>
                        <li className="">
                            <span className="text-md">Community-Driven:</span> We believe in the power of collective wisdom and shared governance.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
    const Governance=()=>{
        return(
             <div className="w-[62%]">
                        <div className="transition-transform duration-[1500ms]">
                            <div>
                                <Image
                                    src={hoveredImage === hoverImages.governance ? hoverImages.governance : governance}
                                    alt="Overlay"
                                    onMouseOver={() => handleMouseOver('governance')}
                                    onMouseOut={handleMouseOut}
                                />
                            </div>
                            <div className="text-[15px]">
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
                                <p className="mt-4">
                                    Join us in our mission to create a more equitable, secure, and innovative digital future. Together, we're not just building technology – we're shaping the future of global digital interaction.
                                </p>
                            </div>
                        </div>
                    </div>
        )
    }

    return (
        <div className="relative w-full h-screen">
            {/* Background Image */}
            <Image
                src={aboutMainImg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="z-0"
            />

            {/* Content over the background */}
            <div className="relative z-10 flex flex-wrap gap-16 h-full px-10 py-10 text-[#fff]">
                <div className="" >
                    {
                        text?.map((data: any, index: any) => (
                            <div className={`text-[23px] pb-6 ${index === 3 ? '' : 'border-b border-[#B1B1B1]/40'} transition-transform duration-[1500ms] cursor-pointer ${data === select ? 'font-semibold ' : 'text-[#B1B1B1]/40'} mb-6`} onClick={() => setSelect(data)} >
                                <p >{data}</p>
                            </div>
                        ))
                    }

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
            <div className="absolute top-0 right-0 bg-[#000] pt-32 pb-8 h-full w-[7%] z-20">
                <Image
                    src={overlayImg}
                    alt="Overlay"
                    width={60}
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        </div>
    );
};

export default AboutUs;
