"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useMemo } from "react";

type Brand = {
  id: string;
  name: string;
  count: number;
};

function BrandMark({ id, name }: { id: string; name: string }) {
  if (id === "manbw") {
    return (
      <div className="h-[74px] w-[74px] rounded-full border-2 border-[#0b3c6b] flex flex-col items-center justify-center text-[#0b3c6b] font-extrabold leading-none">
        <div className="text-[18px] tracking-wide">MAN</div>
        <div className="text-[16px] tracking-wide">B&amp;W</div>
      </div>
    );
  }

  if (id === "yanmar") {
    return (
      <div className="flex items-center gap-3 text-[#d71920]">
        <svg width="34" height="18" viewBox="0 0 34 18" fill="none" aria-hidden="true">
          <path d="M2 2h12l-6 6-6-6Z" fill="currentColor" />
          <path d="M20 2h12l-6 6-6-6Z" fill="currentColor" />
        </svg>
        <div className="text-[22px] font-extrabold tracking-wide">{name}</div>
      </div>
    );
  }

  if (id === "sulzer") {
    return (
      <div className="text-[#0b66c3] text-[26px] font-extrabold tracking-wider">
        {name}
      </div>
    );
  }

  if (id === "pielstick") {
    return (
      <div className="text-gray-900 text-[22px] font-semibold tracking-wide lowercase">
        {name.toLowerCase()}
      </div>
    );
  }

  if (id === "wartsila") {
    return (
      <div className="flex items-center gap-2">
        <div className="text-gray-900 text-[22px] font-semibold tracking-wide">
          {name}
        </div>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M15.8 2.8c-2.4-2.4-6.4-2.4-8.8 0-2.4 2.4-2.4 6.4 0 8.8"
            stroke="#f18b1f"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return <div className="text-[#0b3c6b] text-[22px] font-extrabold">{name}</div>;
}

export default function BrandPage() {
  const brands = useMemo<Brand[]>(
    () => [
      { id: "yanmar", name: "YANMAR", count: 0 },
      { id: "manbw", name: "MAN B&W", count: 0 },
      { id: "sulzer", name: "SULZER", count: 0 },
      { id: "pielstick", name: "PIELSTICK", count: 0 },
      { id: "wartsila", name: "WÄRTSILÄ", count: 0 },
    ],
    []
  );

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="w-full px-4 sm:px-8 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
            {brands.map((brand) => (
              <div key={brand.id} className="flex flex-col items-center text-center">
                <div className="w-full max-w-[180px] h-[110px] flex items-center justify-center">
                  <div className="w-full h-full rounded-md border border-gray-200 bg-white shadow-sm flex items-center justify-center">
                    <BrandMark id={brand.id} name={brand.name} />
                  </div>
                </div>

                <div className="mt-3 text-[11px] sm:text-xs font-extrabold text-blue-600 uppercase tracking-wide">
                  {brand.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
