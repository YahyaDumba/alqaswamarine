import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const BrandMark = ({ id, name }: { id: string; name: string }) => {
    if (id === "manbw") {
      return (
        <div className="flex items-center gap-2">
          <div className="h-14 w-14 rounded-full border-[3px] border-[#003366] flex flex-col items-center justify-center bg-white">
            <div className="text-[#003366] font-black text-[13px] tracking-tight leading-none">MAN</div>
            <div className="text-[#003366] font-black text-[11px] tracking-tight leading-none mt-0.5">B&amp;W</div>
          </div>
        </div>
      );
    }

    if (id === "yanmar") {
      return (
        <div className="flex flex-col items-center gap-1.5">
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none" aria-hidden="true">
            <path d="M4 4h14l-7 8-7-8Z" fill="#C8102E" />
            <path d="M30 4h14l-7 8-7-8Z" fill="#C8102E" />
          </svg>
          <div className="text-[#C8102E] text-[19px] font-black tracking-wide">{name}</div>
        </div>
      );
    }

    if (id === "sulzer") {
      return (
        <div className="flex flex-col items-center gap-2">
          <div className="text-[#0066B3] text-[28px] font-black tracking-[0.02em]">
            SULZER
          </div>
        </div>
      );
    }

    if (id === "pielstick") {
      return (
        <div className="flex flex-col items-center">
          <div className="text-[#1a1a1a] text-[22px] font-bold tracking-wide">
            pielstick
          </div>
        </div>
      );
    }

    if (id === "wartsila") {
      return (
        <div className="flex items-center gap-2.5">
          <div className="text-[#1a1a1a] text-[22px] font-bold tracking-wide">
            WÄRTSILÄ
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 4c-3.2-3.2-8.5-3.2-11.7 0-3.2 3.2-3.2 8.5 0 11.7"
              stroke="#FF6B2C"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    }

    return <div className="text-[#003366] text-[20px] font-black">{name}</div>;
  };

  const brands = [
    { id: "sulzer", name: "SULZER" },
    { id: "yanmar", name: "YANMAR" },
    { id: "wartsila", name: "WÄRTSILÄ" },
    { id: "manbw", name: "MAN B&W" },
    { id: "pielstick", name: "pielstick" },
  ];

  return (
    <>
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

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-8 h-2 bg-red-600 rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm sm:text-base font-bold text-[#003366] uppercase tracking-[0.15em] mb-3">
              Trusted Partners
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 text-sm max-w-2xl mx-auto">
              We proudly collaborate with world-leading marine engine manufacturers
            </p>
          </div>

          <div className="relative rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden">
            <div className="relative overflow-hidden aqm-marquee">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white to-white/20 z-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white to-white/20 z-20" />

              <div className="aqm-marquee-track flex items-center gap-16 w-max py-10 px-8 sm:px-12">
                {brands.concat(brands).concat(brands).map((b, idx) => (
                  <div
                    key={`${b.id}-${idx}`}
                    className="h-24 min-w-[200px] rounded-xl bg-gray-50 border-2 border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-center justify-center px-6 shrink-0"
                  >
                    <BrandMark id={b.id} name={b.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-gray-500 italic">
              Official distributor of genuine spare parts and components
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
