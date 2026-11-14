import { NextRequest, NextResponse } from 'next/server';

// Experiences (/projects) is private: only viewable with the password set in
// the PROJECTS_PASSWORD env var. With no password set, it is blocked entirely.
export function middleware(request: NextRequest) {
  const password = process.env.PROJECTS_PASSWORD;
  const auth = request.headers.get('authorization');

  if (password && auth?.startsWith('Basic ')) {
    const [, given] = atob(auth.slice(6)).split(/:(.*)/s);
    if (given === password) {
      const response = NextResponse.next();
      response.headers.set('X-Robots-Tag', 'noindex, nofollow');
      return response;
    }
  }

  return new NextResponse('Not found', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Private"',
      'X-Robots-Tag': 'noindex, nofollow'
    }
  });
}

export const config = {
  matcher: ['/projects', '/projects/:path*']
};
