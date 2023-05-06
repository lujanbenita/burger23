import { FC } from "react";
import Link from "next/link";
import { MAIN_ROUTES } from "@/core/routes";
import { Rrss } from "../rrss/Rrss";

const currentYear = new Date().getFullYear();

export const Footer: FC = () => {
	return (
		<footer>
			<Rrss />

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
