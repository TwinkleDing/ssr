// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		// 环境变量，使用const runtimeConfig = useRuntimeConfig()使用
		// 构建之后不可更改的变量
		public: {
			apiBase: "/api",
		},
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/_color.scss" as *;',
				},
			},
		},
	},
	app: {
		head: {
			charset: "utf8",
			viewport: "width=device-width, initial-scale=1",
		},
	},
});
