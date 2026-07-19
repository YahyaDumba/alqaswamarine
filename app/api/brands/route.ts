import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';

// GET /api/brands - Fetch all unique brands from database
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    // Get all unique brands from active products
    const brands = await Product.distinct('brand', { status: 'active' });
    
    // Sort brands alphabetically
    const sortedBrands = brands.filter(Boolean).sort();
    
    return NextResponse.json({
      success: true,
      data: sortedBrands
    });
    
  } catch (error) {
    console.error('Error fetching brands:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch brands'
      },
      { status: 500 }
    );
  }
}
