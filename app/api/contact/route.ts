import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Inquiry from '@/models/Inquiry';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const { name, email, productName, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create the inquiry in the database
    const newInquiry = await Inquiry.create({
      name,
      email,
      productName,
      message,
    });

    return NextResponse.json({
      success: true,
      data: newInquiry,
    });
  } catch (error: any) {
    console.error('Error creating inquiry:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
