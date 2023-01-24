import { NextResponse } from 'next/server';
import { verify } from './services/jwt';

async function verifyAuth(req) {
    const auth = req.headers.get('authorization');

    if(!auth)
        return false;
    
    const parts = auth.split(' ');

    if(parts.length != 2)
        return false;

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme))
        return false;
    
    const { payload } = await verify(token, process.env.JWT_SECRET);

    if(!payload)
        return false;

    for(const [key, value] of Object.entries(payload))
        req.cookies.set(key, value);

    return true;
}

export async function middleware(req) {
    if(await verifyAuth(req))
        console.log('Requisição com autenticação');
    else
        console.log('Requisição sem autenticação');

    req.cookies.set('teste', 'value')

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*'
}