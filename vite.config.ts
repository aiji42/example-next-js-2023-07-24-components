import react from '@vitejs/plugin-react'
import * as path from 'node:path'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import { name } from './package.json'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    tsconfigPaths()
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/libs/index.ts'),
      name,
      formats: ['es', 'umd'],
      fileName: (format) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
})