import Image from "next/image";
import { Join } from "../../../public/images";
import { FC } from "react";

export const SectionJoinUs: FC = () => {
	return (
		<section className="join-us">
			<div className="join-us__img">
				<Image src={Join} width={960} height={700} alt="Join us" />
			</div>
			<div className="join-us__content">
				<h2>WE ARE FAMILY</h2>
				<p>
					¿Buscas empleo? Nosotros buscamos a personas comprometidas, honestas y con ganas de crecer. Buscamos personas
					que quieren más. Personas que no se conforman con lo que está ahí fuera. Sólo el trabajo en equipo hace que
					los sueños se cumplan. ¿Quieres formar parte de esto?
				</p>
				<button>Únete</button>
			</div>
		</section>
	);
};
