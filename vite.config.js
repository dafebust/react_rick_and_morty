import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
    base: "https://dafebust.github.io/react_rick_and_morty",
    plugins: [react(), eslint()],
});