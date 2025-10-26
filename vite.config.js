import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/", // <-- ajoute cette ligne
  plugins: [react()],
});
