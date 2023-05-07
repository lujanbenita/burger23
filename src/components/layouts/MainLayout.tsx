import React, { FC, ReactNode } from "react";
import { Footer } from "../footer/Footer";
import Head from "next/head";
//import { tradeGothic } from "@/styles/typography";

type Props = {
	children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Next Burger</title>
				<meta name="description" content="create by next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{children}
				<Footer />
			</main>
		</>
	);
};
