// tailwind.config.js
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      // Devuelve la variable CSS si no hay opacidad (e.g., ring)
      return `var(${variableName})`; 
    }
    // Devuelve el color con la opacidad aplicada (e.g., ring/50)
    return `oklch(from var(${variableName}) l c h / ${opacityValue})`; 
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Asegúrate de que esta línea esté correcta para Next.js App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Aquí puedes personalizar cosas globales, pero normalmente usamos 'extend'
    extend: {
      colors: {
        // Mapea las clases de utilidad a tus variables CSS:
        ring: withOpacity('--ring'),
        
        // Define tus otros colores de la misma forma para consistencia:
        border: withOpacity('--border'),
        background: withOpacity('--background'),
        foreground: withOpacity('--foreground'),
        primary: 'var(--primary)',
        // ... (Agrega todas las variables que uses como clases en tus archivos)
      },
      // Si usas --radius, también debes mapear los bordes:
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      },
    },
  },
  plugins: [],
}