import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'isa-website-base-path',
      transformIndexHtml(html, ctx) {
        if (ctx.path === '/isa-website.html' || ctx.filename === 'isa-website.html') {
          // Update script and link paths to use /iloveisa/ base
          return html
            .replace(/src="\/src\//g, 'src="/iloveisa/src/')
            .replace(/href="\/src\//g, 'href="/iloveisa/src/')
            .replace(/href="\/iloveisa\/img\//g, 'href="/iloveisa/img/')
        }
        return html
      },
      writeBundle(options, bundle) {
        // Move isa-website.html to iloveisa/index.html after build
        const isaHtmlPath = path.join(options.dir, 'isa-website.html')
        const isaDir = path.join(options.dir, 'iloveisa')
        const isaAssetsDir = path.join(isaDir, 'assets')
        const isaIndexPath = path.join(isaDir, 'index.html')
        
        if (fs.existsSync(isaHtmlPath)) {
          // Ensure iloveisa directory exists
          if (!fs.existsSync(isaDir)) {
            fs.mkdirSync(isaDir, { recursive: true })
          }
          if (!fs.existsSync(isaAssetsDir)) {
            fs.mkdirSync(isaAssetsDir, { recursive: true })
          }
          
          // Move isa-website specific assets from root assets to iloveisa/assets
          const assetsDir = path.join(options.dir, 'assets')
          if (fs.existsSync(assetsDir)) {
            const files = fs.readdirSync(assetsDir)
            files.forEach(file => {
              // Move isa-* files and heart-icon to iloveisa/assets
              if (file.startsWith('isa-') || file.startsWith('heart-icon')) {
                const srcPath = path.join(assetsDir, file)
                const destPath = path.join(isaAssetsDir, file)
                if (fs.existsSync(srcPath)) {
                  fs.renameSync(srcPath, destPath)
                }
              }
            })
          }
          
          // Read the HTML file and update paths
          let html = fs.readFileSync(isaHtmlPath, 'utf-8')
          // Update isa-website specific assets to use /iloveisa/ base
          // But keep shared chunks (like client.js) in root /assets/
          html = html.replace(/(href|src)="\/assets\/(isa-[^"]+)"/g, '$1="/iloveisa/assets/$2"')
          html = html.replace(/(href|src)="\/assets\/(heart-icon[^"]+)"/g, '$1="/iloveisa/assets/$2"')
          // Fix shared chunks that were incorrectly moved - they should stay in /assets/
          html = html.replace(/(href|src)="\/iloveisa\/assets\/(client-[^"]+)"/g, '$1="/assets/$2"')
          // Write to iloveisa/index.html
          fs.writeFileSync(isaIndexPath, html)
          // Remove the original file
          fs.unlinkSync(isaHtmlPath)
        }
      }
    }
  ],
  base:'/',
  root: './',
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.PNG', '**/*.png', '**/*.jpeg', '**/*.JPEG'],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        isa: resolve(__dirname, 'isa-website.html')
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // Check if this is the isa entry point
          if (chunkInfo.name === 'isa' || (chunkInfo.facadeModuleId && chunkInfo.facadeModuleId.includes('isa-website'))) {
            return 'iloveisa/assets/[name]-[hash].js'
          }
          return 'assets/[name]-[hash].js'
        },
        chunkFileNames: (chunkInfo) => {
          // Check if chunk belongs to isa-website by checking module IDs
          if (chunkInfo.moduleIds && chunkInfo.moduleIds.some(id => id && id.includes('isa-website'))) {
            return 'iloveisa/assets/[name]-[hash].js'
          }
          return 'assets/[name]-[hash].js'
        },
        assetFileNames: (assetInfo) => {
          // Check if asset belongs to isa-website
          const moduleIds = assetInfo.moduleIds || []
          const name = assetInfo.name || ''
          if (name.includes('isa-website') || moduleIds.some(id => id && id.includes('isa-website'))) {
            return 'iloveisa/assets/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
