import { NextResponse } from 'next/server';
import { verify } from './services/jwt';



export async function middleware(req) {
}

export const config = {
    matcher: '/:path*'
}