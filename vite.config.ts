/** @format */

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, ".", "");

	return {
		plugins: [react()],
		server: {
			proxy: {
				"/api": {
					target: env.VITE_BASE_URL || "https://api.goodclimateproject.org",
					changeOrigin: true,
					secure: false,
				},
			},
		},

		build: {
			rollupOptions: {
				external: [
					"@material-tailwind/html/utils/withMT", // Prevent bundling of this module
				],
			},
			outDir: "dist",
		},
		assetsInclude: ["**/*.jpeg", "**/*.jpg", "**/*.JPEG", "**/*.JPG"],
	};
});
