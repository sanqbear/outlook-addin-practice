import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import devCerts from "office-addin-dev-certs";

async function getHttpsOptions() {
  const httpsOptions = await devCerts.getHttpsServerOptions();
  return {
    ca: httpsOptions.ca,
    cert: httpsOptions.cert,
    key: httpsOptions.key,
  };
}

async function getConfig() {
  const httpsOptions = await getHttpsOptions();
  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      https: {
        key: httpsOptions.key,
        cert: httpsOptions.cert,
      },
      cors: true,
      proxy: {
        "/officeaddin": {
          target: "https://localhost:7287",
          changeOrigin: true,
          secure: false,
        },
        "/resources": {
          target: "https://localhost:7287",
          changeOrigin: true,
          secure: false,
        },

      },

    },
  });
}

const config = await getConfig();

export default config;
