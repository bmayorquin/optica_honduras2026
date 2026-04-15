/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true,
  },
  // Agrega esta línea para que reconozca la carpeta del repositorio
  basePath: '/optica_honduras2026',
};

module.exports = nextConfig;