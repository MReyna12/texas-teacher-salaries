const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://texas-teacher-salaries-a1gi2gv92-mreyna12.vercel.app";
