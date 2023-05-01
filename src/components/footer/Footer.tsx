import { FC } from "react";
import { FacebookIcon, InstagramIcon, SpotifyIcon, TwitterIcon, YoutubeIcon } from "../../../public/images";
import Link from "next/link";
import Image from "next/image";
import { MAIN_ROUTES, RRSS } from "@/core/routes";

const year = new Date().getFullYear();

export const Footer: FC = () => {
	return (
		<footer>
			<div className="rrss">
				<div className="rrss__logo"></div>
				<div className="rrss__container">
					<div className="rrss__item">
						<a href={RRSS.youtube} target="_blank">
							<Image src={YoutubeIcon} height={29} alt="icon" />
						</a>
					</div>
					<div className="rrss__item">
						<a href={RRSS.facebook} target="_blank">
							<Image src={FacebookIcon} height={29} alt="icon" />
						</a>
					</div>
					<div className="rrss__item">
						<a href={RRSS.spotify} target="_blank">
							<Image src={SpotifyIcon} height={29} alt="icon" />
						</a>
					</div>
					<div className="rrss__item">
						<a href={RRSS.twitter} target="_blank">
							<Image src={TwitterIcon} height={29} alt="icon" />
						</a>
					</div>
					<div className="rrss__item">
						<a href={RRSS.instagram} target="_blank">
							<Image src={InstagramIcon} height={29} alt="icon" />
						</a>
					</div>
				</div>
			</div>

			<nav className="footer--nav">
				<ul>
					<li>
						<Link href={MAIN_ROUTES.about} legacyBehavior>
							<a className="hover-effect">ABOUT</a>
						</Link>
					</li>{" "}
					/
					<li>
						<Link href={MAIN_ROUTES.location} legacyBehavior>
							<a className="hover-effect">LOCATION</a>
						</Link>
					</li>{" "}
					/
					<li>
						<Link href={MAIN_ROUTES.home}>
							<a className="hover-effect">BURGER TOWN</a>
						</Link>
					</li>{" "}
					/
					<li>
						<Link href={MAIN_ROUTES.contact} legacyBehavior>
							<a className="hover-effect">CONTACT</a>
						</Link>
					</li>{" "}
					/
					<li>
						<Link href={MAIN_ROUTES.news} legacyBehavior>
							<a className="hover-effect">NEWS</a>
						</Link>
					</li>
				</ul>
			</nav>

			<div className="footer--info">
				<span>@Burger Town {year}. </span>
				<span>Todos los derechos reservados.</span>
				<span>
					<a href="#">Aviso legal</a>.
				</span>
				<span>
					<a href="#">Politica de cookies.</a>
				</span>
				<span>
					Desarrollado por <a href="clujan.eu">Carlos Luján</a>
				</span>
			</div>
		</footer>
	);
};
