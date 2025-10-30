/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true } // dùng ảnh trong /public
  // KHÔNG đặt runtime = 'edge' ở các page vì ta có dùng fs đọc JSON
};
export default nextConfig;
