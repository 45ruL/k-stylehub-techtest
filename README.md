# K-StyleHub Tech Test

Mini project menggunakan **TypeScript**, **React**, dan **TanStack Query (React Query)**.  
Aplikasi ini menampilkan daftar **Brand**, **Product**, dan **Detail Product** dengan dukungan **pagination**.

🚀 Preview Project: [https://k-stylehub-techtest.vercel.app/](https://k-stylehub-techtest.vercel.app/)

---

## ✨ Fitur

- Daftar **Brand** dengan pagination
- Daftar **Product** per Brand dengan pagination
- Detail Product
- Data diambil menggunakan **TanStack useQuery**
- Komponen UI menggunakan **shadcn/ui**

---

## 📖 Essay Question

### 1. Props dengan TypeScript

**Props** adalah mekanisme di React untuk mengirimkan data dari parent component ke child component. Dengan TypeScript, kita bisa mendefinisikan tipe Props agar lebih aman, terhindar dari kesalahan runtime, dan mendapat auto-completion.

### 2. Tanstack Query

**TanStack Query** adalah library untuk manajemen data asynchronous di React.
Fungsi utamanya:

- Fetching data (misalnya dari REST API)
- Caching data agar tidak refetch setiap render
- Pagination & infinite queries
- State management untuk loading, error, success

## 📦 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/45ruL/k-stylehub-techtest
cd <your-repo>
```

### 2. Clone Repository

```bash
npm install
# or
yarn install

```

### 3. Env

API dari mock dari mockApi: [https://mockapi.io/](https://mockapi.io/). contoh :

```bash
VITE_API_URL=https://68c222dbf9928dbf33ed6b0b.mockapi.io/k-hub

```

### 4. Run

```bash
npm run dev

```
