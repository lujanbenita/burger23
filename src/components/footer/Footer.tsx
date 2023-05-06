import { FC } from "react";
import { FacebookIcon, InstagramIcon, SpotifyIcon, TwitterIcon, YoutubeIcon } from "../../../public/images";
import Link from "next/link";
import Image from "next/image";
import { MAIN_ROUTES, RRSS } from "@/core/routes";
import { MENU_NAV } from "@/core/lists";

const currentYear = new Date().getFullYear();

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
						<Link href={MAIN_ROUTES.about} className="hover-effect">
							ABOUT
						</Link>
					</li>{" "}
					/
					<li>
						<Link href={MAIN_ROUTES.location} className="hover-effect">
							LOCATION
						</Link>
					</li>{" "}
					/
					<li>
						<Link href={MAIN_ROUTES.home} className="hover-effect">
							BURGER TOWN
						</Link>
					</li>{" "}
					/
					<li>
						<Link href={MAIN_ROUTES.contact} className="hover-effect">
							CONTACT
						</Link>
					</li>{" "}
					/
					<li>
						<Link href={MAIN_ROUTES.news} className="hover-effect">
							NEWS
						</Link>
					</li>
				</ul>
			</nav>

			<div className="footer--info">
				<span>@Burger Town {currentYear}. </span>
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
