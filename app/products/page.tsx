"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ChevronLeft, ChevronRight, Grid2X2, List, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Product = {
  _id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  images: string[];
  createdAt: string;
};

const DEFAULT_IMAGE = "/Images/site/product-1.jpg";

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function ProductsPage() {
  const [mounted, setMounted] = useState(false);
  const [brands, setBrands] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"latest" | "name_asc" | "name_desc">("latest");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);

  const pageSize = 20;

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch brands on mount
  useEffect(() => {
    if (!mounted) return;
    
    const fetchBrands = async () => {
      try {
        const response = await fetch('/api/brands');
        const data = await response.json();
        if (data.success) {
          setBrands(data.data);
        }
      } catch (err) {
        console.error('Error fetching brands:', err);
      }
    };
    fetchBrands();
  }, [mounted]);

  // Fetch products whenever filters change
  useEffect(() => {
    if (!mounted) return;
    
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: pageSize.toString(),
          sort: sort,
        });

        if (selectedBrands.length > 0) {
          params.append('brand', selectedBrands.join(','));
        }

        if (query.trim()) {
          params.append('search', query.trim());
        }

        const response = await fetch(`/api/products?${params}`);
        const data = await response.json();

        if (data.success) {
          setProducts(data.data);
          setTotal(data.pagination.total);
        } else {
          setError('Failed to load products');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [mounted, page, sort, selectedBrands, query]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);
  const pageItems = products;

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

  const handleSearchChange = (value: string) => {
    setPage(1);
    setQuery(value);
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

  // Prevent hydration mismatch by waiting for client mount
  if (!mounted) {
    return null;
  }

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
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search products..."
                className="w-full border border-gray-200 rounded-md py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-blue-500"
              />
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="max-h-[520px] overflow-auto pr-1 space-y-2">
              {brands.map((brand) => {
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

            {loading ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-10 text-center">
                <div className="animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
              </div>
            ) : error ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-10 text-center">
                <h3 className="text-lg font-semibold text-red-600 mb-2">Error</h3>
                <p className="text-gray-600 text-sm mb-6">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition text-sm font-semibold"
                >
                  Retry
                </button>
              </div>
            ) : total === 0 ? (
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
                {pageItems.map((p) => {
                  const productImage = p.images && p.images.length > 0 ? p.images[0] : DEFAULT_IMAGE;
                  return (
                    <div
                      key={p._id}
                      className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden"
                    >
                      <div className="relative aspect-square bg-gray-100">
                        <Image 
                          src={productImage} 
                          alt={p.name} 
                          fill 
                          className="object-cover" 
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                          <span className="text-blue-900 font-bold text-lg uppercase tracking-widest rotate-[-15deg]">
                            AL QASWA MARINE
                          </span>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wide">{p.brand}</div>
                        <Link href={`/products/${p.slug}`} className="block text-sm font-semibold text-blue-600 hover:text-blue-700 line-clamp-2">
                          {p.name}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-3">
                {pageItems.map((p) => {
                  const productImage = p.images && p.images.length > 0 ? p.images[0] : DEFAULT_IMAGE;
                  return (
                    <div
                      key={p._id}
                      className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition p-4 flex gap-4 items-center"
                    >
                      <div className="relative w-24 h-24 rounded-md overflow-hidden bg-gray-100 shrink-0">
                        <Image src={productImage} alt={p.name} fill className="object-cover" sizes="96px" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] text-gray-500 uppercase tracking-wide mb-1">{p.brand}</div>
                        <Link href={`/products/${p.slug}`} className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                          {p.name}
                        </Link>
                      </div>
                    </div>
                  );
                })}
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

