import { FC } from "react";
import { About } from "../../../public/images";
import Image from "next/image";

export const SectionHistory: FC = () => {
	return (
		<section className="history">
			<div className="history-content">
				<h2>
					<span>OUR STORY </span>
				</h2>
				<div className="history-content__text">
					<p>
						The Burger Town nace en 2002 de la mano de Pepe y Pepa, tras varias incursiones en el mundo de los
						restaurantes. Su filosofía y sus ganas de cambiar las cosas desembocaron en un concepto disruptivo e
						innovador, centrado en el mundo de las burgers. En Septiembre de 2002, inauguran el primer establecimiento
						en Valencia. Un menú completo, con materias primas de gran calidad y con una premisa fundamental: los
						detalles deben ser inolvidables. Así nace el primer Burger Town.
					</p>
					<p>
						Hoy, junto a un gran equipo de personas, cocinan la mejor carne a la brasa de carbón vegetal, además
						ensaladas, milkshakes, dulces artesanos… Y siempre se realiza al momento. Su inconformismo y sus ganas de
						mejorar constantemente han conseguido que la historia de Burger Town y de las personas que lo acompañan se
						haga más grande cada día.
					</p>
				</div>
			</div>
			<div className="history-img">
				<Image src={About} width={600} height={750} alt="image" />
			</div>
		</section>
	);
};
