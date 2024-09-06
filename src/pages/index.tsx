import Header from "@/components/Header";
import Image from "next/image";
import bannerImg from "../../public/images/Frame 1410125009.jpg";
import bannerImg2 from "../../public/images/bannerImg.jpg";
import bannerImgMobile from "../../public/images/bannerBlackMobile.jpg";
import bannerImg2Mobile from "../../public/images/bannerMobile.jpg";
import egdeImg from "../../public/images/egde.png";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Vision from "@/components/Vision";
import AboutUs from "@/components/AboutUs";
import Dpi from "@/components/Dpi";
import EcoSystem from "@/components/EcoSystem";
import Accordion from "@/components/Accordion";
import Faq from "@/components/Faq";


export default function Home() {
  const [src, setSrc] = useState<any>();
  useEffect(()=>{
if(window.innerWidth < 768){
  setSrc(bannerImgMobile);
} else {
  setSrc(bannerImg);
}
  },[])
const handleMouseOver=()=>{
  if(window.innerWidth < 768){
    setSrc(bannerImg2Mobile);
  } else {
    setSrc(bannerImg2);
  }
}
const handleMouseOut=()=>{
  if(window.innerWidth < 640){
    setSrc(bannerImgMobile);
  } else {
    setSrc(bannerImg);
  }
}
  return (
    <>
      <div className="w-full">
        <Header />
        <div className="lg:px-10 px-4" >
          <div className="relative"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut }
            onTouchStart={handleMouseOver}
            onTouchEnd={handleMouseOut }
            
          >
            <Image
              src={src}
              alt="kalp Logo"
            />
            <Image
              src={egdeImg}
              alt="kalp Logo"
              className="absolute lg:bottom-4 bottom-3 lg:left-4 left-2 lg:w-[35%] w-[60%]"
            />
          </div>

          <div className="lg:grid grid-cols-3 lg:mt-28 mt-6">
            <div className="col-span-1 " >
              <p className="lg:text-[32px] text-md font-bold" >About KALP Foundation</p>
              <p className="lg:text-2xl text-sm lg:mt-4 mt-2 lg:mr-28" >Architecting the Future of Digital Inclusivity</p>
            </div>
            <div className="col-span-2 lg:pl-[39px] lg:border-l border-[#B1B1B1]/40" >
              <div className="flex flex-col gap-5 text-sm" >
                <p className="lg:text-sm text-xs mt-2">The Kalp Decentra Foundation stands at the forefront of the blockchain revolution, pioneering a new era of Digital Public Infrastructure. We are not just building technology; we're architecting the future of global digital interaction.</p>
                <div className="lg:text-md text-xs" >
                  <p>
                    Our mission? To create a decentralized ecosystem that's as secure as it is inclusive, as innovative as it is compliant.</p>

                  <p className="font-bold">At Kalp, we believe in:</p>
                  <div className="flex flex-col">
                    <p>• Decentralization with accountability</p>
                    <p>• Innovation within regulatory frameworks</p>
                    <p>• Global accessibility with local relevance</p>
                  </div>


                </div>
                <p className="lg:text-md text-xs" >
                  We're unique in our 'compliance-first' approach, embedding regulatory adherence into our DNA. Our ecosystem isn't just about technology—it's about empowering communities, fostering innovation, and creating a level playing field in the digital realm.
                </p>
              </div>
            </div>
          </div>
          <Vision />
          <AboutUs />
          {/* <Dpi/> */}
          <EcoSystem/> 
          <Faq/>
        </div>
        <Footer />
      </div>
    </>
  );
}
