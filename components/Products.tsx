import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      image: "/Images/site/product-1.jpg",
      category: "ENGINE & GENERATOR SET",
      title: "MAN B&W 9L40/54 ENGINE WITH 6400KW 550RPM",
      reviews: 0,
    },
    {
      image: "/Images/site/product-2.jpg",
      category: "ENGINE & GENERATOR SET",
      title: "MAN B&W 8L40/54 ENGINE WITH 5280KW 510RPM",
      reviews: 0,
    },
    {
      image: "/Images/site/product-3.jpg",
      category: "LINER",
      title: "WICHMANN AXAG CYLINDER LINER",
      reviews: 0,
    },
    {
      image: "/Images/site/product-4.jpg",
      category: "CYLINDER HEAD",
      title: "WICHMANN AXAG - AXA CYLINDER HEAD",
      reviews: 0,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto bg-white">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-blue-500">New Arrival</h2>
        <Link href="#" className="text-blue-500 font-semibold hover:text-blue-700 flex items-center">
          View All <ChevronRight size={20} />
        </Link>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 bg-white p-2 rounded-full shadow-md z-10 text-gray-800 hover:bg-gray-100 hidden md:block">
          <ChevronLeft size={24} />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="border border-gray-100 rounded-lg p-4 hover:shadow-lg transition bg-white flex flex-col h-full">
              <div className="aspect-[4/3] w-full relative mb-4 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                {/* Watermark overlay placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                   <span className="text-blue-900 font-bold text-xl uppercase tracking-widest rotate-[-15deg]">AL QASWA MARINE</span>
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-2 uppercase">{product.category}</p>
                  <h3 className="text-sm font-semibold text-blue-500 mb-4 line-clamp-2 hover:underline cursor-pointer">
                    {product.title}
                  </h3>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} className="text-gray-300" />
                    ))}
                  </div>
                  <span>{product.reviews} Reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 bg-white p-2 rounded-full shadow-md z-10 text-gray-800 hover:bg-gray-100 hidden md:block">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
