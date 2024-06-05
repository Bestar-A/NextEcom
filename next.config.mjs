import { API, DB_URI } from './config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URI: DB_URI,
        API: API
    }
};

export default nextConfig;
