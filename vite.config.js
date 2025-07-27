import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Ini penting agar Vite server bisa diakses dari IP eksternal (Ngrok)
    port: 5173, // Pastikan ini sesuai dengan port yang Anda gunakan (addr: 5173 di ngrok.yml)
    strictPort: true, // Pastikan port ini digunakan
    hmr: {
      host: 'ada98bc35bd9.ngrok-free.app', // Ganti dengan URL Ngrok Anda saat ini
      port: 443, // Ngrok biasanya menggunakan port 443 (HTTPS) untuk HMR
      protocol: 'wss', // Gunakan wss untuk koneksi HMR melalui HTTPS
    },
    cors: true, // Mengaktifkan CORS untuk semua origin (bisa disesuaikan lebih lanjut)
    fs: {
      strict: false, // Memungkinkan akses file di luar root proyek (jarang diperlukan, tapi bisa membantu)
      // Contoh: Anda juga bisa menentukan allowedHosts di sini, jika ada masalah khusus
      // allowedHosts: [
      //   '.ngrok-free.app', // Ini mengizinkan semua subdomain ngrok-free.app
      //   'bb0055d79d9c.ngrok-free.app', // Atau spesifik
      // ],
    },
    // Bagian utama untuk mengatasi error "Blocked request"
    allowedHosts: [
      '.ngrok-free.app', // Ini adalah cara terbaik: mengizinkan semua subdomain ngrok-free.app
    ],
  },
});