import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';

// GET /api/products/[id] - Fetch a single product by ID or slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params in Next.js 15+
    const { id } = await params;
    
    await dbConnect();
    
    console.log('Fetching product with ID/slug:', id);

    // Try to find by ID first, then by slug
    let product;
    
    // Check if it's a MongoDB ObjectId format
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      product = await Product.findById(id).lean();
    } else {
      // Try to find by slug
      product = await Product.findOne({ slug: id }).lean();
    }

    if (!product) {
      console.log('Product not found with ID/slug:', id);
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    console.log('Product found:', product.name, 'Status:', product.status);

    return NextResponse.json({
      success: true,
      data: product
    });
    
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
