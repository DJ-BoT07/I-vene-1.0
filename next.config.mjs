/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
      NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
      NEXT_PUBLIC_DRIZZLE_DB_URL: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
      NEXT_PUBLIC_GEMINI_API_KEY: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
      NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT: process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT,
      NEXT_PUBLIC_INFO: process.env.NEXT_PUBLIC_INFO,
      NEXT_PUBLIC_QUESTION_NOTE: process.env.NEXT_PUBLIC_QUESTION_NOTE,
    },
    // Sensitive keys like CLERK_SECRET_KEY should not be exposed here.
  };
  
  export default nextConfig;
  