import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/v1/hooks/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    '/api/v1/'
  ],
  ignoredRoutes: [
    '/events/:id',
    '/api/v1/',
    '/api/v1/hooks/clerk',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 