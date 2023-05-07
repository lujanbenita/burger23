import Youtube from "../icons/Youtube";
import Facebook from "../icons/Facebook";
import Spotify from "../icons/Spotify";
import Twitter from "../icons/Twitter";
import Instagram from "../icons/Instagram";
import { FC } from "react";
import { RRSS } from "@/core/routes";

export const Rrss: FC = () => {
	return (
		<div className="rrss">
			<div className="rrss__logo"></div>
			<div className="rrss__container">
				<div className="rrss__item">
					<a href={RRSS.youtube} target="_blank" rel="noreferrer">
						<Youtube />
					</a>
				</div>
				<div className="rrss__item">
					<a href={RRSS.facebook} target="_blank" rel="noreferrer">
						<Facebook />
					</a>
				</div>
				<div className="rrss__item">
					<a href={RRSS.spotify} target="_blank" rel="noreferrer">
						<Spotify />
					</a>
				</div>
				<div className="rrss__item">
					<a href={RRSS.twitter} target="_blank" rel="noreferrer">
						<Twitter />
					</a>
				</div>
				<div className="rrss__item">
					<a href={RRSS.instagram} target="_blank" rel="noreferrer">
						<Instagram />
					</a>
				</div>
			</div>
		</div>
	);
};
