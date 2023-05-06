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
					<a href={RRSS.youtube} target="_blank">
						<Youtube />
					</a>
				</div>
				<div className="rrss__item">
					<a href={RRSS.facebook} target="_blank">
						<Facebook />
					</a>
				</div>
				<div className="rrss__item">
					<a href={RRSS.spotify} target="_blank">
						<Spotify />
					</a>
				</div>
				<div className="rrss__item">
					<a href={RRSS.twitter} target="_blank">
						<Twitter />
					</a>
				</div>
				<div className="rrss__item">
					<a href={RRSS.instagram} target="_blank">
						<Instagram />
					</a>
				</div>
			</div>
		</div>
	);
};
