# CURRENT ISSUES
⚠ The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead.
Error: Organizer not found
    at h (/Users/aditya/Downloads/jj/.next/server/app/(root)/events/create/page.js:1:6593)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async /Users/aditya/Downloads/jj/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:16:406
    at async rm (/Users/aditya/Downloads/jj/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:15:5703)
    at async rD (/Users/aditya/Downloads/jj/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:16:22546)
    at async doRender (/Users/aditya/Downloads/jj/node_modules/next/dist/server/base-server.js:1391:30)
    at async cacheEntry.responseCache.get.routeKind (/Users/aditya/Downloads/jj/node_modules/next/dist/server/base-server.js:1552:28)
    at async NextNodeServer.renderToResponseWithComponentsImpl (/Users/aditya/Downloads/jj/node_modules/next/dist/server/base-server.js:1460:28)
    at async NextNodeServer.renderPageComponent (/Users/aditya/Downloads/jj/node_modules/next/dist/server/base-server.js:1843:24)
    at async NextNodeServer.renderToResponseImpl (/Users/aditya/Downloads/jj/node_modules/next/dist/server/base-server.js:1881:32)
Error: {}
    at r (/Users/aditya/Downloads/jj/.next/server/chunks/486.js:1:20167)
    at h (/Users/aditya/Downloads/jj/.next/server/app/(root)/events/create/page.js:1:6779)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async /Users/aditya/Downloads/jj/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:16:406
    at async rm (/Users/aditya/Downloads/jj/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:15:5703)
    at async rD (/Users/aditya/Downloads/jj/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:16:22546)
    at async doRender (/Users/aditya/Downloads/jj/node_modules/next/dist/server/base-server.js:1391:30)
    at async cacheEntry.responseCache.get.routeKind (/Users/aditya/Downloads/jj/node_modules/next/dist/server/base-server.js:1552:28)
    at async NextNodeServer.renderToResponseWithComponentsImpl (/Users/aditya/Downloads/jj/node_modules/next/dist/server/base-server.js:1460:28)
    at async NextNodeServer.renderPageComponent (/Users/aditya/Downloads/jj/node_modules/next/dist/server/base-server.js:1843:24)

# Vercel Error
### Error 2
./node_modules/scheduler/cjs/scheduler.production.min.js
A Node.js API is used (setImmediate at line: 51) which is not supported in the Edge Runtime.
Learn more: https://nextjs.org/docs/api-reference/edge-runtime
Import trace for requested module:
./node_modules/scheduler/cjs/scheduler.production.min.js
./node_modules/scheduler/index.js
./node_modules/react-dom/cjs/react-dom.production.min.js
./node_modules/react-dom/index.js
./node_modules/@clerk/clerk-react/dist/esm/utils/useCustomElementPortal.js
./node_modules/@clerk/clerk-react/dist/esm/utils/index.js
./node_modules/@clerk/clerk-react/dist/esm/components/uiComponents.js
./node_modules/@clerk/clerk-react/dist/esm/components/index.js
./node_modules/@clerk/clerk-react/dist/esm/index.js
./node_modules/@clerk/nextjs/dist/esm/client-boundary/controlComponents.js
./node_modules/@clerk/nextjs/dist/esm/index.js
./node_modules/scheduler/cjs/scheduler.production.min.js
A Node.js API is used (setImmediate at line: 51) which is not supported in the Edge Runtime.
Learn more: https://nextjs.org/docs/api-reference/edge-runtime
Import trace for requested module:
./node_modules/scheduler/cjs/scheduler.production.min.js
./node_modules/scheduler/index.js
./node_modules/react-dom/cjs/react-dom.production.min.js
./node_modules/react-dom/index.js
./node_modules/@clerk/clerk-react/dist/esm/utils/useCustomElementPortal.js
./node_modules/@clerk/clerk-react/dist/esm/utils/index.js
./node_modules/@clerk/clerk-react/dist/esm/components/uiComponents.js
./node_modules/@clerk/clerk-react/dist/esm/components/index.js
./node_modules/@clerk/clerk-react/dist/esm/index.js
./node_modules/@clerk/nextjs/dist/esm/client-boundary/controlComponents.js
./node_modules/@clerk/nextjs/dist/esm/index.js
./node_modules/scheduler/cjs/scheduler.production.min.js
A Node.js API is used (MessageChannel at line: 120) which is not supported in the Edge Runtime.
Learn more: https://nextjs.org/docs/api-reference/edge-runtime
Import trace for requested module:
./node_modules/scheduler/cjs/scheduler.production.min.js
./node_modules/scheduler/index.js
./node_modules/react-dom/cjs/react-dom.production.min.js
./node_modules/react-dom/index.js
./node_modules/@clerk/clerk-react/dist/esm/utils/useCustomElementPortal.js
./node_modules/@clerk/clerk-react/dist/esm/utils/index.js
./node_modules/@clerk/clerk-react/dist/esm/components/uiComponents.js
./node_modules/@clerk/clerk-react/dist/esm/components/index.js
./node_modules/@clerk/clerk-react/dist/esm/index.js
./node_modules/@clerk/nextjs/dist/esm/client-boundary/controlComponents.js
./node_modules/@clerk/nextjs/dist/esm/index.js
./node_modules/scheduler/cjs/scheduler.production.min.js
A Node.js API is used (MessageChannel at line: 121) which is not supported in the Edge Runtime.
Learn more: https://nextjs.org/docs/api-reference/edge-runtime
Import trace for requested module:
./node_modules/scheduler/cjs/scheduler.production.min.js
./node_modules/scheduler/index.js
./node_modules/react-dom/cjs/react-dom.production.min.js
./node_modules/react-dom/index.js
./node_modules/@clerk/clerk-react/dist/esm/utils/useCustomElementPortal.js
./node_modules/@clerk/clerk-react/dist/esm/utils/index.js
./node_modules/@clerk/clerk-react/dist/esm/components/uiComponents.js
./node_modules/@clerk/clerk-react/dist/esm/components/index.js
./node_modules/@clerk/clerk-react/dist/esm/index.js
./node_modules/@clerk/nextjs/dist/esm/client-boundary/controlComponents.js
./node_modules/@clerk/nextjs/dist/esm/index.js
./node_modules/@clerk/shared/dist/chunk-RSOCGYTF.mjs
A Node.js API is used (MessageEvent at line: 27) which is not supported in the Edge Runtime.
Learn more: https://nextjs.org/docs/api-reference/edge-runtime
Import trace for requested module:
./node_modules/@clerk/shared/dist/chunk-RSOCGYTF.mjs
./node_modules/@clerk/shared/dist/index.mjs
./node_modules/@clerk/clerk-react/dist/esm/components/uiComponents.js
./node_modules/@clerk/clerk-react/dist/esm/components/index.js
./node_modules/@clerk/clerk-react/dist/esm/index.js
./node_modules/@clerk/nextjs/dist/esm/client-boundary/controlComponents.js
./node_modules/@clerk/nextjs/dist/esm/index.js
### Error 2
<w> [webpack.cache.PackFileCacheStrategy] Serializing big strings (101kiB) impacts deserialization performance (consider using Buffer instead and decode when needed)
### Error 3
RangeError: Maximum call stack size exceeded
    at RegExp.exec (<anonymous>)
    at create (/vercel/path0/node_modules/next/dist/compiled/micromatch/index.js:15:18889)
    at create (/vercel/path0/node_modules/next/dist/compiled/micromatch/index.js:15:18918)
    at parse.fastpaths (/vercel/path0/node_modules/next/dist/compiled/micromatch/index.js:15:18997)
    at picomatch.makeRe (/vercel/path0/node_modules/next/dist/compiled/micromatch/index.js:15:21635)
    at picomatch (/vercel/path0/node_modules/next/dist/compiled/micromatch/index.js:15:19637)
    at /vercel/path0/node_modules/next/dist/compiled/micromatch/index.js:15:19294
    at Array.map (<anonymous>)
    at picomatch (/vercel/path0/node_modules/next/dist/compiled/micromatch/index.js:15:19286)
    at micromatch.isMatch (/vercel/path0/node_modules/next/dist/compiled/micromatch/index.js:15:1090)
Error: Command "npm run build" exited with 1

#TUTORIAL LINK
https://www.youtube.com/watch?v=zgGhzuBZOQg&t=5729s&ab_channel=JavaScriptMastery

##
Designed and implemented a cohesive web platform that serves as a centralized hub for events across all clubs and departments at SRM IST KTR campus. This user-friendly platform ensures seamless and rapid access to comprehensive information on all campus activities, fostering a unified and streamlined experience for students and faculty.
##
## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Zod
- React Hook Form
- Shadcn
- uploadthing

## <a name="features">🔋 Features</a>

👉 **Authentication (CRUD) with Clerk:** User management through Clerk, ensuring secure and efficient authentication.

👉 **Events (CRUD):** Comprehensive functionality for creating, reading, updating, and deleting events, giving users full control over event management.
- **Create Events:** Users can effortlessly generate new events, providing essential details such as title, date, location, and any additional information.
- **Read Events:** Seamless access to a detailed view of all events, allowing users to explore event specifics, including descriptions, schedules, and related information.
- **Update Events:** Empowering users to modify event details dynamically, ensuring that event information remains accurate and up-to-date.
- **Delete Events:** A straightforward process for removing events from the system, giving administrators the ability to manage and curate the platform effectively.
        
👉 **Related Events:** Smartly connects events that are related and displaying on the event details page, making it more engaging for users
    
👉 **Organized Events:** Efficient organization of events, ensuring a structured and user-friendly display for the audience, i.e., showing events created by the user on the user profile
    
👉 **Search & Filter:** Empowering users with a robust search and filter system, enabling them to easily find the events that match their preferences.
    
👉 **New Category:** Dynamic categorization allows for the seamless addition of new event categories, keeping your platform adaptable.
    
👉 **Checkout and Pay with Stripe:** Smooth and secure payment transactions using Stripe, enhancing user experience during the checkout process.
    
👉 **Event Orders:** Comprehensive order management system, providing a clear overview of all event-related transactions.
    
👉 **Search Orders:** Quick and efficient search functionality for orders, facilitating easy tracking and management.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual credentials 

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
