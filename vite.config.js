import react from "@vitejs/plugin-react-swc";
import { dirname, resolve } from "path"; // 현재 파일의 디렉토리 경로를 구합니다.
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(currentDir, "src") // '@'를 src 폴더의 절대 경로로 설정
    }
  }
});
