import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      <Image
        src="/Images/site/hero.jpg"
        alt="Al Qaswa Marine"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#062644]/65 via-[#062644]/45 to-[#062644]/70" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          GLOBAL SUPPLIER OF MARINE DIESEL ENGINES, GENUINE SPARE PARTS & RECONDITIONED COMPONENTS SINCE 1994
        </h1>
        
        <p className="text-lg md:text-xl text-white mb-10 drop-shadow-md">
          Genuine Parts for Peak Vessel Performance
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link 
            href="#" 
            className="bg-white text-gray-900 font-semibold py-3 px-8 rounded hover:bg-gray-100 transition flex items-center justify-center"
          >
            View Products <span className="ml-2">&gt;</span>
          </Link>
          <Link 
            href="#" 
            className="bg-white text-gray-900 font-semibold py-3 px-8 rounded hover:bg-gray-100 transition flex items-center justify-center"
          >
            Contact Us <span className="ml-2">&gt;</span>
          </Link>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-8 h-2 bg-red-600 rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
        <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
      </div>
    </section>
  );
}
