"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft, Calendar, Tag, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Product = {
  _id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  condition: string;
  description?: string;
  specifications?: string;
  images: string[];
  createdAt: string;
  metaTitle?: string;
  metaDescription?: string;
};

const DEFAULT_IMAGE = "/Images/site/product-1.jpg";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch product data
  useEffect(() => {
    if (!mounted || !slug) return;
    
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`/api/products/${slug}`);
        const data = await response.json();

        if (data.success) {
          setProduct(data.data);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [mounted, slug]);

  // Parse specifications
  const specifications = product?.specifications 
    ? product.specifications.split('\n').map(line => {
        const [field, ...valueParts] = line.split(':');
        return {
          field: field?.trim() || '',
          value: valueParts.join(':').trim() || ''
        };
      }).filter(spec => spec.field && spec.value)
    : [];

  // Prevent hydration mismatch by waiting for client mount
  if (!mounted) {
    return null;
  }

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col bg-[#f0f4f8]">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-32 mx-auto"></div>
            </div>
            <p className="text-gray-600 mt-4">Loading product...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-screen flex flex-col bg-[#f0f4f8]">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
            <p className="text-gray-600 mb-6">{error || 'The product you are looking for does not exist.'}</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              <ArrowLeft size={20} />
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const productImages = product.images && product.images.length > 0 ? product.images : [DEFAULT_IMAGE];
  const mainImage = productImages[selectedImage] || productImages[0];

  return (
    <main className="min-h-screen flex flex-col bg-[#f0f4f8]">
      <Header />

      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden">
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <span className="text-blue-900 font-bold text-2xl uppercase tracking-widest rotate-[-15deg]">
                    AL QASWA MARINE
                  </span>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square bg-white rounded border overflow-hidden transition ${
                        selectedImage === index
                          ? 'border-blue-500 ring-2 ring-blue-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                  <Tag size={16} />
                  <span className="font-medium">{product.brand}</span>
                  <span>•</span>
                  <span>{product.category}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                {/* Condition Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.condition === 'New' 
                      ? 'bg-green-100 text-green-800' 
                      : product.condition === 'Refurbished'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.condition}
                  </span>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>Listed {new Date(product.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div className="prose prose-gray max-w-none">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Specifications */}
              {specifications.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Settings size={20} />
                    Technical Specifications
                  </h3>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="divide-y divide-gray-200">
                      {specifications.map((spec, index) => (
                        <div key={index} className="px-4 py-3 flex justify-between items-center">
                          <span className="font-medium text-gray-900">{spec.field}</span>
                          <span className="text-gray-700">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Contact CTA */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Interested in this product?
                </h3>
                <p className="text-blue-700 mb-4">
                  Contact us for pricing, availability, and technical specifications.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      if (!product) return;
                      
                      // Format WhatsApp message for marine spare parts inquiry
                      const currentUrl = window.location.href;
                      const message = `Hello Al Qaswa Marine,

I am interested in the following product:

*Product Name:* ${product.name}
*Brand:* ${product.brand}
*Category:* ${product.category}
*Condition:* ${product.condition}

I would like to inquire about:
- Current availability and delivery time
- Price quotation (FOB/CIF)
- Technical specifications and certifications
- Payment terms and conditions
- Warranty details

Product Link: ${currentUrl}

Looking forward to your response.

Best regards`;

                      const encodedMessage = encodeURIComponent(message);
                      const whatsappNumber = '919825183207'; // Your WhatsApp business number
                      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                      
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="flex-1 bg-[#25D366] text-white text-center py-3 px-6 rounded-md hover:bg-[#22c55e] transition font-semibold flex items-center justify-center gap-2"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      fill="currentColor" 
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    Get Quote via WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      const currentUrl = window.location.href;
                      if (navigator.share) {
                        navigator.share({
                          title: product.name,
                          text: `Check out this product: ${product.name}`,
                          url: currentUrl
                        }).catch(() => {
                          // Fallback to clipboard
                          navigator.clipboard?.writeText(currentUrl);
                          alert('Link copied to clipboard!');
                        });
                      } else {
                        navigator.clipboard?.writeText(currentUrl);
                        alert('Link copied to clipboard!');
                      }
                    }}
                    className="flex-1 border-2 border-blue-600 text-blue-600 text-center py-3 px-6 rounded-md hover:bg-blue-50 transition font-semibold"
                  >
                    Share Link
                  </button>
                </div>
              </div>

              {/* Back to Products */}
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition font-medium"
              >
                <ArrowLeft size={18} />
                Back to All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}