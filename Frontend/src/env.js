let isProd = true;   // false for localHost

const server = isProd ? "https://zeni-gemini.vercel.app" : "http://localhost:5000";

export default server;