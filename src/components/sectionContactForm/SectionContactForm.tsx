import { FC } from "react";
import { Rrss } from "../rrss/Rrss";

export const SectionContactForm: FC = () => {
	return (
		<section className="container-form-section">
			<div className="form-info">
				<p>¿Tienes cualquier duda o necesitas más información?</p>
				<p>
					¿O quizá tienes alguna sugerencia? Háblanos, nosotros te escuchamos, queremos seguir mejorando y ayudarte. Nos
					importa mucho tu opinión.
				</p>
				<p>Escribe tu mensaje en el formulario o contáctanos a traves de nuestras redes sociales.</p>

				<Rrss />
			</div>

			<div className="form">
				<form>
					<input type="text" placeholder="Nombre" />
					<input type="email" placeholder="Email" />
					<textarea rows={12} placeholder="Cuentanos"></textarea>
				</form>
				<button>ENVIAR MENSAJE</button>
			</div>
		</section>
	);
};
