"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type Brand = {
  id: string;
  name: string;
  count: number;
  logoSrc?: string;
};

function brandInitials(name: string) {
  const cleaned = name.replace(/[()]/g, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  const initials = parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .filter(Boolean)
    .join("");
  return initials || cleaned.slice(0, 2).toUpperCase();
}

export default function BrandPage() {
  const brands = useMemo<Brand[]>(
    () => [
      { id: "abb-bbc", name: "ABB-BBC TURBOCHARGER", count: 0 },
      { id: "akasaka", name: "AKASAKA", count: 0 },
      { id: "alco", name: "ALCO", count: 0 },
      { id: "bergen", name: "BERGEN ROLLS-ROYCE", count: 0 },
      { id: "caterpillar", name: "CATERPILLAR", count: 0 },
      { id: "cummins", name: "CUMMINS", count: 0 },
      { id: "daihatsu", name: "DAIHATSU", count: 0 },
      { id: "deutz", name: "DEUTZ", count: 0 },
      { id: "emd", name: "Electro-Motive Diesel (EMD, GM)", count: 0 },
      { id: "fiat", name: "FIAT", count: 0 },
      { id: "ge", name: "GENERAL ELECTRIC GE", count: 0 },
      { id: "woodward", name: "GOVERNORS FOR MARINE ENGINE", count: 0 },
      { id: "hanshin", name: "HANSHIN", count: 0 },
      { id: "himsen", name: "HIMSEN", count: 0 },
      { id: "mak", name: "MAK", count: 0 },
      { id: "manbw", name: "MAN B&W", count: 0 },
      { id: "manbw-tc", name: "MAN B&W TURBOCHARGER", count: 0 },
      { id: "man", name: "MAN DIESEL", count: 0 },
      { id: "mirrlees", name: "MIRRLEES BLACKSTONE", count: 0 },
      { id: "mitsubishi", name: "MITSUBISHI", count: 0 },
      { id: "mtu", name: "MTU", count: 0 },
      { id: "mwm", name: "MWM", count: 0 },
      { id: "nigata", name: "NIGATA", count: 0 },
      { id: "nohab", name: "NOHAB POLAR", count: 0 },
      { id: "pielstick", name: "PIELSTICK", count: 0 },
      { id: "ruston", name: "RUSTON", count: 0 },
      { id: "skl", name: "SKL", count: 0 },
      { id: "swd", name: "STORK WERKSPOOR (SWD)", count: 0 },
      { id: "sulzer", name: "SULZER–ZGODA", count: 0 },
      { id: "wartsila", name: "WÄRTSILÄ", count: 0 },
      { id: "wichmann", name: "WICHMANN", count: 0 },
      { id: "yanmar", name: "YANMAR", count: 0 },
    ],
    []
  );

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="w-full px-4 sm:px-8 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-14">
            {brands.map((brand) => (
              <div key={brand.id} className="flex flex-col items-center text-center">
                <div className="w-full max-w-[180px] h-[110px] flex items-center justify-center">
                  {brand.logoSrc ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={brand.logoSrc}
                        alt={brand.name}
                        fill
                        sizes="180px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-md border border-gray-200 bg-white shadow-sm flex items-center justify-center">
                      <span className="text-3xl font-extrabold text-[#0b3c6b] tracking-widest">
                        {brandInitials(brand.name)}
                      </span>
                    </div>
                  )}
                </div>

                <Link
                  href="#"
                  className="mt-3 text-[11px] sm:text-xs font-extrabold text-blue-600 hover:text-blue-700 uppercase tracking-wide"
                >
                  {brand.name}
                </Link>
                <div className="text-xs text-gray-400 mt-1">({brand.count})</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

