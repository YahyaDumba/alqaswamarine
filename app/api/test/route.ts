import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Product from '@/models/Product';

// Test endpoint to verify database connection
export async function GET(request: NextRequest) {
  try {
    console.log('Testing database connection...');
    
    await dbConnect();
    console.log('Database connected successfully');

    // Try to count products
    const count = await Product.countDocuments();
    console.log('Product count:', count);

    // Get one product as example
    const sampleProduct = await Product.findOne().lean();
    console.log('Sample product:', sampleProduct);

    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      productCount: count,
      sampleProduct: sampleProduct ? {
        id: sampleProduct._id,
        name: sampleProduct.name,
        status: sampleProduct.status
      } : null
    });
  } catch (error) {
    console.error('Test failed:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Database test failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}