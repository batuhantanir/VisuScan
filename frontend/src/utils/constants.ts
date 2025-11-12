declare const process: any;

export const BASE_URL = (process && process.env && process.env.VITE_API_URL) || 'http://localhost:3000';