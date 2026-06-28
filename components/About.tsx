import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
          
          <h3 className="text-xl text-blue-600 font-semibold">
            Al Qaswa Marine – Your Global Partner for Marine Engine Spare Parts
          </h3>
          
          <p className="text-gray-700">
            Looking for a reliable marine spare parts supplier you can trust worldwide?
            <br />
            <strong>Al Qaswa Marine delivers — fast, dependable, and cost-effective solutions from India&apos;s leading marine hub.</strong>
          </p>
          
          <p className="text-gray-700">
            Strategically located in Bhavnagar and Alang, we operate at the heart of the global ship recycling and marine supply industry, giving us direct access to a vast range of quality engine components.
          </p>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Massive Ready Stock – Immediate Dispatch</h4>
            <p className="text-gray-700">
              With a <strong>75,000 sq. ft. warehouse</strong>, we maintain a large inventory of marine engine spare parts ready for quick shipment worldwide — helping you reduce vessel downtime and operational delays.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Complete Engine Spare Parts Solutions</h4>
            <p className="text-gray-700">
              We supply critical components for <strong>main and auxiliary engines</strong>, including:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cylinder Heads, Liners & Pistons</li>
              <li>Crankshafts & Connecting Rods</li>
              <li>Fuel Pumps & Injectors</li>
              <li>Turbochargers & Governors</li>
              <li>Cylinder Blocks and more</li>
            </ul>
          </div>
        </div>

        {/* Right Images Layout */}
        <div className="relative h-[400px] md:h-[500px] flex justify-center items-center mt-10 md:mt-0">
          {/* Main Background Image with Hexagon Shape */}
          <div 
            className="absolute right-0 md:right-10 top-0 w-[80%] h-[80%] overflow-hidden z-0 relative"
            style={{ 
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" 
            }}
          >
            <Image
              src="/Images/site/about-main.jpg"
              alt="Ship at sea"
              fill
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-cover"
            />
          </div>
          
          {/* Overlapping Image */}
          <div className="absolute left-0 bottom-0 w-[50%] h-[50%] z-10 rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl border-4 border-white relative">
            <Image
              src="/Images/site/about-overlay.jpg"
              alt="Cargo container ship"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
