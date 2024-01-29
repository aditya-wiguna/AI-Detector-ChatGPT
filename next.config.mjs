/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['antd', '@ant-design', 'rc-util', 'rc-pagination', 'rc-picker', 'rc-notification', 'rc-tooltip', '@ant-design/icons'],
  env: {
    apiUrl: process.env.API_URL
  }
};

export default nextConfig;
