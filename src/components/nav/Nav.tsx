import Link from "next/link";
import { FC } from "react";
import LogoMenu from "../icons/LogoMenu";
import { MAIN_ROUTES } from "@/core/routes";

export const Nav: FC = () => {
	return (
		<nav className="header-nav">
			<ul>
				<li>
					<Link href={MAIN_ROUTES.about} legacyBehavior>
						<a className="hover-effect">ABOUT</a>
					</Link>
				</li>
				<li>
					<Link href={MAIN_ROUTES.location} legacyBehavior>
						<a className="hover-effect">LOCATION</a>
					</Link>
				</li>
				<li>
					<Link href={MAIN_ROUTES.home}>
						<LogoMenu />
					</Link>
				</li>
				<li>
					<Link href={MAIN_ROUTES.contact} legacyBehavior>
						<a className="hover-effect">CONTACT</a>
					</Link>
				</li>
				<li>
					<Link href={MAIN_ROUTES.news} legacyBehavior>
						<a className="hover-effect">NEWS</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
