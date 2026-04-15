import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Aquí puedes agregar reglas personalizadas si las necesitas
    rules: {
      // Ejemplo: "no-unused-vars": "error"
    },
  },
  {
    // Ignorar carpetas de construcción
    ignores: [".next/*", "out/*", "build/*", "next-env.d.ts"],
  },
];

export default eslintConfig;

