import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { apiPlugin, storyblokInit } from "@storyblok/react";
import { MainLayout } from "@/components/layouts/MainLayout";

storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
	bridge: true,
	use: [apiPlugin],
	//components: components,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
}
