import { pool } from '@/utils/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get both users and products data
    const usersResult = await pool.query('SELECT * FROM users ORDER BY id');
    const productsResult = await pool.query('SELECT * FROM products ORDER BY id');
    
    return NextResponse.json({
      message: "Data dari PostgreSQL",
      time: new Date().toISOString(),
      data: {
        users: usersResult.rows,
        products: productsResult.rows
      }
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from database' },
      { status: 500 }
    );
  }
}