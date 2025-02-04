import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // הגדרת האתר כסטטי
  images: {
    unoptimized: true, // ביטול אופטימיזציה לתמונות (חובה במצב סטטי)
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false, // הסרת הודעות קונסול בייצור
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimize = false; // ביטול מיניפיקציה של הקוד
    }
    return config;
  },
};

export default nextConfig;
