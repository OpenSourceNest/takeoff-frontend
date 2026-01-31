import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Only protect /admin routes
    if (request.nextUrl.pathname.startsWith('/admin')) {
        const token = request.cookies.get('token');

        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        try {
            // Decode JWT to check role (without verification as secret is on backend)
            // JWT is Header.Payload.Signature
            const payloadPart = token.value.split('.')[1];
            if (payloadPart) {
                // Decode base64url to string using atob (Edge compatible)
                const base64 = payloadPart.replace(/-/g, '+').replace(/_/g, '/');
                const decoded = JSON.parse(atob(base64));

                if (decoded.role !== 'ADMIN') {
                    // Return a 404 to make it look like the page doesn't even exist
                    return NextResponse.rewrite(new URL('/404', request.url));
                }
            }
        } catch (error) {
            // On decode error, treat as unauthenticated
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
