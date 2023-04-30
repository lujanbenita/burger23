import Link from "next/link";
import { FC } from "react";
import LogoMenu from "../icons/LogoMenu";

export const Nav: FC = () => {
	return (
		<nav className="header-nav">
			<ul>
				<li>
					<Link href="/about" legacyBehavior>
						<a className="hover-effect">ABOUT</a>
					</Link>
				</li>
				<li>
					<Link href="/location" legacyBehavior>
						<a className="hover-effect">LOCATION</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<LogoMenu />
					</Link>
				</li>
				<li>
					<Link href="/contact" legacyBehavior>
						<a className="hover-effect">CONTACT</a>
					</Link>
				</li>
				<li>
					<Link href="/news" legacyBehavior>
						<a className="hover-effect">NEWS</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
