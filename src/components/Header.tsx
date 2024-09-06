import Image from "next/image";
import logo from "../../public/images/logo.png";
import kalplogo from "../../public/images/Kalp_logo 2.png";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <main
      className={`flex flex-wrap items-center justify-between px-4 lg:px-[76px] lg:py-[19px]  py-3 `}
    >
      {/* <div className="z-10  w-full items-center justify-between font-mono text-sm lg:flex"> */}
        <Image
          src={logo}
          alt="Main Logo"
          width={125}
        />
      
          <Image
            src={kalplogo}
            alt="kalp Logo"
            width={100}
          />
        
      {/* </div> */}
    </main>
  );
};

export default Header;
