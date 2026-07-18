/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
  output: "export",
  // 開発サーバーと本番ビルドで出力先を分け、片方の再生成で
  // もう片方のチャンクが消えないようにする。
  distDir: phase === "phase-development-server" ? ".next-dev" : ".next",
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  },
});

export default nextConfig;
