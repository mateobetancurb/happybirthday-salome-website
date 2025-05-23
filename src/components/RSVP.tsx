import useScrollAnimation from "../hooks/useScrollAnimation";

const RSVP = () => {
	const animateFadeUp = useScrollAnimation("animate-fade-in-up");
	const animateFadeUp200 = useScrollAnimation("animate-fade-in-up", {
		delay: 200,
	});
	const animateFadeRight300 = useScrollAnimation("animate-fade-in-right", {
		delay: 300,
	});
	const animateFadeLeft400 = useScrollAnimation("animate-fade-in-left", {
		delay: 400,
	});

	return (
		<section id="rsvp" className="section">
			<h2 ref={animateFadeUp} className="section-title scroll-animate">
				Confirmación de asistencia
			</h2>

			<div className="max-w-4xl mx-auto">
				<p
					ref={animateFadeUp200}
					className="text-center text-gray-600 mb-10 scroll-animate"
				>
					Debes confirmar tu asistencia antes del 7 de junio
					<br />
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div
						ref={animateFadeRight300}
						className="bg-white p-8 rounded-lg shadow-lg scroll-animate"
					>
						<div className="text-center py-4">
							<div className="mx-auto w-16 h-16 mb-4">
								<svg
									width="40"
									height="40"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-purple-dark lucide lucide-book-text-icon lucide-book-text"
								>
									<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
									<path d="M8 11h8" />
									<path d="M8 7h6" />
								</svg>
							</div>
							<p className="text-gray-600 mb-6">
								Haz clic en el botón de abajo para acceder al formulario y
								confirmar tu asistencia
							</p>
							<a
								href="https://forms.gle/UbXR9crhVqagnSFf6"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block bg-purple-dark hover:bg-purple-dark text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md"
							>
								Clic aquí
							</a>
						</div>
					</div>

					<div ref={animateFadeLeft400} className="scroll-animate">
						<div className="bg-white p-8 rounded-lg shadow-lg mb-8">
							<h3 className="font-display text-2xl text-purple-dark mb-4">
								Contacto
							</h3>
							<p className="mb-6">
								Para cualquier pregunta o disposición especial, por favor
								escríbenos aquí
							</p>
							<div className="space-y-3">
								<p>
									<span className="font-medium">Teléfono:</span>
									<a
										href="https://wa.me/573104647152"
										className="text-purple-dark ml-2"
										target="_blank"
										rel="noopener noreferrer"
									>
										3104647152
									</a>
								</p>
							</div>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h3 className="font-display text-2xl text-purple-dark mb-4">
								Regalo
							</h3>
							<div className="flex items-center gap-2">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-purple-dark lucide lucide-heart-icon lucide-heart"
								>
									<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
								</svg>
								<p>LLuvia de sobres</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RSVP;
