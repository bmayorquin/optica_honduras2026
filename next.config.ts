/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Indica a Next.js que genere archivos HTML estáticos
  output: 'export', 
  
  // 2. Desactiva la optimización de imágenes nativa (porque requiere un servidor)
  // Esto es necesario para que las fotos de los lentes se vean en GitHub Pages
  images: {
    unoptimized: true,
  },

  // 3. OPCIONAL: Si tu URL de GitHub es algo como "usuario.github.io/nombre-repo"
  // debes agregar el nombre del repositorio aquí:
  // basePath: '/nombre-del-repo',
};

module.exports = nextConfig;