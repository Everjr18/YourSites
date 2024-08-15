"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
	return (
		<section id="whatsapp">
			<FloatingWhatsApp
				phoneNumber="+573053335489"
				accountName="YourSite"
				allowEsc
				notification
				notificationSound
				chatMessage="Hola!! bienvenido al chat de YourSite ¿Como puedo ayudarte?"
				placeholder="Escribe tu consulta"
				// avatar='/icon.ico'
				statusMessage="Generalmente responden rapido"
			/>
		</section>
	);
}
