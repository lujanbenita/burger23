import localFont from "@next/font/local";

export const thirsty = localFont({
	src: [
		{
			path: "../../public/typography/ThirstySoftRegular.otf",
			weight: "400",
		},
		{
			path: "../../public/typography/ThirstySoftExtrabold.otf",
			weight: "700",
		},
	],
	variable: "--font-thirsty",
});

export const tradeGothic = localFont({
	src: [
		{
			path: "../../public/typography/TradeGothicLTStd-Cn18.otf",
			weight: "400",
		},
		{
			path: "../../public/typography/TradeGothic-BoldCondTwenty.otf",
			weight: "800",
		},
	],
	variable: "--font-tradeGothic",
});
