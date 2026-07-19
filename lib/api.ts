const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface Product {
  _id: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  condition: 'Used' | 'Reconditioned' | 'New';
  shortDescription?: string;
  fullDescription?: string;
  featuredImage?: string;
  galleryImages?: string[];
  specifications: Array<{
    field: string;
    value: string;
  }>;
  seoTitle?: string;
  metaDescription?: string;
  status: 'Draft' | 'Published';
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  success: boolean;
  data: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ProductFilters {
  status?: string;
  brand?: string;
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
  sort?: 'latest' | 'name_asc' | 'name_desc';
}

export async function fetchProducts(filters?: ProductFilters): Promise<ProductsResponse> {
  const params = new URLSearchParams();
  
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, value.toString());
      }
    });
  }

  const url = `${API_URL}/products?${params.toString()}`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store', // Ensure fresh data
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_URL}/products?search=${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const result: ProductsResponse = await response.json();
    return result.data.find(p => p.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
