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
        if (ctx.path === '/blog.html' || ctx.filename === 'blog.html') {
          // Update script and link paths to use /blog/ base
          return html
            .replace(/src="\/src\//g, 'src="/blog/src/')
            .replace(/href="\/src\//g, 'href="/blog/src/')
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

        // Move blog.html to blog/index.html after build
        const blogHtmlPath = path.join(options.dir, 'blog.html')
        const blogDir = path.join(options.dir, 'blog')
        const blogAssetsDir = path.join(blogDir, 'assets')
        const blogIndexPath = path.join(blogDir, 'index.html')
        
        if (fs.existsSync(blogHtmlPath)) {
          // Ensure blog directory exists
          if (!fs.existsSync(blogDir)) {
            fs.mkdirSync(blogDir, { recursive: true })
          }
          if (!fs.existsSync(blogAssetsDir)) {
            fs.mkdirSync(blogAssetsDir, { recursive: true })
          }
          
          // Move blog-specific assets from root assets to blog/assets
          const assetsDir = path.join(options.dir, 'assets')
          if (fs.existsSync(assetsDir)) {
            const files = fs.readdirSync(assetsDir)
            files.forEach(file => {
              // Move blog-* files to blog/assets
              if (file.startsWith('blog-')) {
                const srcPath = path.join(assetsDir, file)
                const destPath = path.join(blogAssetsDir, file)
                if (fs.existsSync(srcPath)) {
                  fs.renameSync(srcPath, destPath)
                }
              }
            })
          }
          
          // Read the HTML file and update paths
          let html = fs.readFileSync(blogHtmlPath, 'utf-8')
          // Update blog-specific assets to use /blog/ base
          // But keep shared chunks (like client.js) in root /assets/
          html = html.replace(/(href|src)="\/assets\/(blog-[^"]+)"/g, '$1="/blog/assets/$2"')
          // Fix shared chunks that were incorrectly moved - they should stay in /assets/
          html = html.replace(/(href|src)="\/blog\/assets\/(client-[^"]+)"/g, '$1="/assets/$2"')
          // Write to blog/index.html
          fs.writeFileSync(blogIndexPath, html)
          // Remove the original file
          fs.unlinkSync(blogHtmlPath)
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
        isa: resolve(__dirname, 'isa-website.html'),
        blog: resolve(__dirname, 'blog.html')
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // Check if this is the isa entry point
          if (chunkInfo.name === 'isa' || (chunkInfo.facadeModuleId && chunkInfo.facadeModuleId.includes('isa-website'))) {
            return 'iloveisa/assets/[name]-[hash].js'
          }
          // Check if this is the blog entry point
          if (chunkInfo.name === 'blog' || (chunkInfo.facadeModuleId && chunkInfo.facadeModuleId.includes('blog'))) {
            return 'blog/assets/[name]-[hash].js'
          }
          return 'assets/[name]-[hash].js'
        },
        chunkFileNames: (chunkInfo) => {
          // Check if chunk belongs to isa-website by checking module IDs
          if (chunkInfo.moduleIds && chunkInfo.moduleIds.some(id => id && id.includes('isa-website'))) {
            return 'iloveisa/assets/[name]-[hash].js'
          }
          // Check if chunk belongs to blog by checking module IDs
          if (chunkInfo.moduleIds && chunkInfo.moduleIds.some(id => id && id.includes('blog'))) {
            return 'blog/assets/[name]-[hash].js'
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
          // Check if asset belongs to blog
          if (name.includes('blog') || moduleIds.some(id => id && id.includes('blog'))) {
            return 'blog/assets/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
