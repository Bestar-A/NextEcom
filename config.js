export const DB_URI="mongodb://localhost:27017/nextecom"
export const API = process.env.NODE_ENV === "production"
        ? "https://xxx:vercel.com/api"
        : "http://localhost:3000/api";