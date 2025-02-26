import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log('uuu1', env.VITE_SERVER)
  console.log('uuu2', env.VITE_MODE)

  return {
    plugins: [react(), svgr()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_SERVER, 
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
          configure: (proxy, _options) => {
            if (env.VITE_MODE === 'development') {
              proxy.on('error', (err, _req, _res) => {
                console.log('proxy error', err);
              });
              proxy.on('proxyReq', (_, req, _res) => {
                console.log('Sending Request to the Target:', req.method, req.url);
              });
              proxy.on('proxyRes', (proxyRes, req, _res) => {
                console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
              });
            }
          },
        }
      }
    },
    logLevel: 'info'
  };
});


