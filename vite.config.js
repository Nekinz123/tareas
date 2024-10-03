import { defineConfig } from "vite";

export default defineConfig({
    base: 'tareas/',
    build: {
        rollupOptions: {
          input: {
            main: './index.html',
            show: './show-task.html',
            delete: './delete-task.html'
          }
        }
      }
});