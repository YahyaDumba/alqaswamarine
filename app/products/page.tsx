"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ChevronLeft, ChevronRight, Grid2X2, List, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Product = {
  id: string;
  brand: string;
  title: string;
  image: string;
  createdAt: string;
};

const BRANDS = [
  "ABB-BBC TURBOCHARGER",
  "AKASAKA",
  "ALCO",
  "BERGEN ROLLS-ROYCE",
  "CATERPILLAR",
  "DAIHATSU",
  "DEUTZ",
  "Electro-Motive Diesel GM (EMD)",
  "GENERAL ELECTRIC GE",
  "GOVERNORS",
  "HIMSEN",
  "MAK",
  "MAN B&W",
  "MAN B&W TURBOCHARGER",
  "MTU",
  "NIGATA",
  "NOHAB POLAR",
  "OTHER ENGINE SPARES",
  "PIELSTICK",
  "RUSTON",
  "SKL",
  "STORK WERKSPOOR (SWD)",
  "SULZER-ZGODA",
  "WARTSILA",
  "WICHMANN",
  "YANMAR",
];

const PRODUCT_IMAGES = [
  "/Images/site/product-1.jpg",
  "/Images/site/product-2.jpg",
  "/Images/site/product-3.jpg",
  "/Images/site/product-4.jpg",
];

function buildMockProducts(count: number): Product[] {
  const titles = [
    "MAN B&W 32/40 FUEL INJECTION PIPE",
    "WICHMANN 12V28B ENGINE COMPLETE",
    "WICHMANN AXAG CYLINDER LINER",
    "WICHMANN AXAG - AXA CYLINDER HEAD",
    "MTU 4000 CYLINDER HEAD (12V4000)",
    "MAK 32 M32, 6M32, 8M32, 9M32 ENGINE",
    "GENERAL ELECTRIC GE 7FDL16D3 ENGINE",
    "MAN B&W 9L40/54 ENGINE WITH 6400KW 550RPM",
    "MAN B&W 8L40/54 ENGINE WITH 5280KW 510RPM",
    "PIELSTICK 280 FUEL INJECTORS",
    "HIMSEN H25/33 FUEL INJECTION PUMP",
    "ABB TPL 61D01 TURBOCHARGER",
    "PIELSTICK 280 CONNECTING ROD",
    "PIELSTICK 280 CYLINDER HEAD",
  ];

  const now = Date.now();
  const products: Product[] = [];
  for (let i = 0; i < count; i += 1) {
    const brand = BRANDS[i % BRANDS.length] ?? "MAN B&W";
    const title = titles[i % titles.length] ?? `Marine spare part ${i + 1}`;
    const image = PRODUCT_IMAGES[i % PRODUCT_IMAGES.length] ?? PRODUCT_IMAGES[0]!;
    const createdAt = new Date(now - i * 1000 * 60 * 60 * 12).toISOString();
    products.push({
      id: `p_${i + 1}`,
      brand,
      title,
      image,
      createdAt,
    });
  }
  return products;
}

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function ProductsPage() {
  const allProducts = useMemo(() => buildMockProducts(347), []);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"latest" | "name_asc" | "name_desc">("latest");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let items = allProducts;

    if (selectedBrands.length > 0) {
      const set = new Set(selectedBrands);
      items = items.filter((p) => set.has(p.brand));
    }

    if (q) {
      items = items.filter((p) => {
        return (
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q)
        );
      });
    }

    const sorted = [...items];
    if (sort === "latest") {
      sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    } else if (sort === "name_asc") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }

    return sorted;
  }, [allProducts, query, selectedBrands, sort]);

  const pageSize = 20;
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);
  const pageItems = filtered.slice(startIndex, endIndex);

  const toggleBrand = (brand: string) => {
    setPage(1);
    setSelectedBrands((prev) => {
      if (prev.includes(brand)) return prev.filter((b) => b !== brand);
      return [...prev, brand];
    });
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setQuery("");
    setSort("latest");
    setPage(1);
  };

  const pageButtons = useMemo(() => {
    const maxButtons = 7;
    const buttons: Array<number | "dots"> = [];
    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i += 1) buttons.push(i);
      return buttons;
    }

    const left = Math.max(2, safePage - 1);
    const right = Math.min(totalPages - 1, safePage + 1);

    buttons.push(1);
    if (left > 2) buttons.push("dots");
    for (let i = left; i <= right; i += 1) buttons.push(i);
    if (right < totalPages - 1) buttons.push("dots");
    buttons.push(totalPages);
    return buttons;
  }, [safePage, totalPages]);

  return (
    <main className="min-h-screen flex flex-col bg-[#f0f4f8]">
      <Header />

      <section className="w-full px-4 sm:px-8 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          <aside className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 h-fit">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-[#0b3c6b] uppercase tracking-wide">
                Product categories
              </h2>
              {(selectedBrands.length > 0 || query) && (
                <button
                  onClick={clearFilters}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="relative mb-4">
              <input
                value={query}
                onChange={(e) => {
                  setPage(1);
                  setQuery(e.target.value);
                }}
                placeholder="Search products..."
                className="w-full border border-gray-200 rounded-md py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-blue-500"
              />
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="max-h-[520px] overflow-auto pr-1 space-y-2">
              {BRANDS.map((brand) => {
                const checked = selectedBrands.includes(brand);
                return (
                  <label key={brand} className="flex items-start gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleBrand(brand)}
                      className="mt-1 accent-blue-600"
                    />
                    <span className="leading-snug">{brand}</span>
                  </label>
                );
              })}
            </div>
          </aside>

          <div className="space-y-5">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md overflow-hidden">
                  <button
                    onClick={() => setView("list")}
                    className={classNames(
                      "p-2",
                      view === "list" ? "bg-white text-blue-600" : "text-gray-500 hover:text-gray-700"
                    )}
                    aria-label="List view"
                  >
                    <List size={18} />
                  </button>
                  <button
                    onClick={() => setView("grid")}
                    className={classNames(
                      "p-2 border-l border-gray-200",
                      view === "grid" ? "bg-white text-blue-600" : "text-gray-500 hover:text-gray-700"
                    )}
                    aria-label="Grid view"
                  >
                    <Grid2X2 size={18} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by</span>
                  <select
                    value={sort}
                    onChange={(e) => {
                      setPage(1);
                      setSort(e.target.value as typeof sort);
                    }}
                    className="text-sm border border-gray-200 rounded-md px-3 py-2 bg-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="latest">latest</option>
                    <option value="name_asc">name (A–Z)</option>
                    <option value="name_desc">name (Z–A)</option>
                  </select>
                </div>
              </div>

              <div className="text-sm text-gray-600">
                Showing {total === 0 ? 0 : startIndex + 1}–{endIndex} of {total} results
              </div>
            </div>

            {total === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-10 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Try removing some filters or searching with different keywords.
                </p>
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition text-sm font-semibold"
                >
                  Clear filters
                </button>
              </div>
            ) : view === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pageItems.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden"
                  >
                    <div className="relative aspect-square bg-gray-100">
                      <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                        <span className="text-blue-900 font-bold text-lg uppercase tracking-widest rotate-[-15deg]">
                          AL QASWA MARINE
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="text-[10px] text-gray-500 uppercase tracking-wide">{p.brand}</div>
                      <Link href="#" className="block text-sm font-semibold text-blue-600 hover:text-blue-700 line-clamp-2">
                        {p.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {pageItems.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition p-4 flex gap-4 items-center"
                  >
                    <div className="relative w-24 h-24 rounded-md overflow-hidden bg-gray-100 shrink-0">
                      <Image src={p.image} alt={p.title} fill className="object-cover" sizes="96px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-gray-500 uppercase tracking-wide mb-1">{p.brand}</div>
                      <Link href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                        {p.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={safePage === 1}
                  className={classNames(
                    "px-3 py-2 rounded-md border text-sm flex items-center gap-1",
                    safePage === 1
                      ? "border-gray-200 text-gray-300 bg-white"
                      : "border-gray-200 text-gray-700 bg-white hover:bg-gray-50"
                  )}
                >
                  <ChevronLeft size={16} />
                </button>

                {pageButtons.map((b, idx) =>
                  b === "dots" ? (
                    <span key={`dots_${idx}`} className="px-2 text-gray-500">
                      …
                    </span>
                  ) : (
                    <button
                      key={b}
                      onClick={() => setPage(b)}
                      className={classNames(
                        "px-3 py-2 rounded-md text-sm border",
                        b === safePage
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {b}
                    </button>
                  )
                )}

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage === totalPages}
                  className={classNames(
                    "px-3 py-2 rounded-md border text-sm flex items-center gap-1",
                    safePage === totalPages
                      ? "border-gray-200 text-gray-300 bg-white"
                      : "border-gray-200 text-gray-700 bg-white hover:bg-gray-50"
                  )}
                >
                  <ChevronRight size={16} />
                </button>

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage === totalPages}
                  className={classNames(
                    "ml-2 px-4 py-2 rounded-md text-sm font-semibold",
                    safePage === totalPages
                      ? "bg-gray-100 text-gray-400"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  )}
                >
                  NEXT &gt;
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

