import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const user = request.cookies.get('user');

    // Protected routes
    if (request.nextUrl.pathname.startsWith('/checkout') || request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!user) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Already logged in users shouldn't access login/register pages
    if ((request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register') && user) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/checkout/:path*', '/dashboard/:path*', '/login', '/register'],
};
