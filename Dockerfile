# Tahap 1: Build Aplikasi React
# Menggunakan image Node.js sebagai base untuk membangun aplikasi.
FROM node:20-alpine AS build

# Menentukan direktori kerja di dalam container.
WORKDIR /app

# Menyalin package.json dan package-lock.json (jika ada) untuk menginstal dependensi.
# Ini memanfaatkan Docker cache, jadi dependensi tidak diinstal ulang jika package.json tidak berubah.
COPY package*.json ./

# Menginstal dependensi proyek.
RUN npm install

# Menyalin semua file sumber aplikasi ke dalam direktori kerja.
COPY . .

# Membangun aplikasi React untuk produksi.
# "build" script biasanya didefinisikan di package.json.
RUN npm run build

# Tahap 2: Serve Aplikasi dengan Nginx
# Menggunakan image Nginx sebagai base untuk menyajikan aplikasi yang sudah dibangun.
FROM nginx:stable-alpine AS production

# Menyalin output build dari tahap 'build' ke direktori Nginx.
# /usr/share/nginx/html adalah lokasi default Nginx untuk file statis.
# COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/dist /usr/share/nginx/html

# Menyalin konfigurasi Nginx kustom (jika ada).
# Jika Anda punya file nginx.conf kustom, letakkan di samping Dockerfile.
# Contoh: COPY nginx.conf /etc/nginx/conf.d/default.conf

# Mengexpose port 80, karena Nginx akan mendengarkan di port ini secara default.
EXPOSE 80

# Perintah default untuk menjalankan Nginx.
CMD ["nginx", "-g", "daemon off;"]