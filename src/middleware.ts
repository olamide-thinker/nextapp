import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import signup from './app/signup/page'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
   
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/login' || path === '/signup' || path === '/'

    if(isPublicPath){
   
    const token = request.cookies.get('token')?.value

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
}


}

}
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile/:path*',
    '/login',
    '/signup',

  ]
}