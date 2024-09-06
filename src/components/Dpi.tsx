import Image from 'next/image';
import aboutUs1 from '../../public/images/aboutUs1.jpg';

const Dpi: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[400px] cursor-pointer group">
    {/* Image with spin effect on hover */}
    <div className="w-full h-full transition-transform duration-500 transform group-hover:rotate-[360deg]">
      <Image src={aboutUs1} alt="About Us" layout="fill" objectFit="cover" />
    </div>
  </div>
  );
};

export default Dpi;
