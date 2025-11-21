import React from "react"
import { FaLaptopCode, FaVideo, FaCertificate } from "react-icons/fa"


export default function Benefits(){
    return(
        <section className="w-full max-w-6xl mx-auto px-6 mt-16">

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Benefícios do nosso curso online
          </h2>

					
					{/* Container */}
					<div className="grid md:grid-cols-3 gap-8">

						{/* Card 01 */}
						<div className="bg-pink-300 p-6 rounded-2xl shadow hover:shadow-lg transition">
							<div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-full mb-4">
								<FaLaptopCode className="text-pink-600 text-3xl" />
							</div>

							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								Aprendizagem Flexível
							</h3>

							<p className="text-gray-600">
								Aprenda no seu próprio ritmo com materiais de alta qualidade e professores especializados.
							</p>
						</div>

						{/* Card 02 */}
						<div className="bg-pink-300 p-6 rounded-2xl shadow hover:shadow-lg transition">
							<div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-full mb-4">
								<FaVideo className="text-pink-600 text-3xl"/>
							</div>

							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								Video-aulas
							</h3>

							<p className="text-gray-600">
								Acesse videoaulas a qualquer hora e em qualquer lugar.
							</p>
						</div>

						{/* Card 03 */}
						<div className="bg-pink-300 p-6 rounded-2xl shadow hover:shadow-lg transition">
							<div className="w-16 h-16 bg-purple-100 flex items-center justify-center rounded-full mb-4">
								<FaCertificate className="text-pink-600 text-3xl"/>
							</div>

							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								Cursos com Certificados
							</h3>

							<p className="text-gray-600">
								Obtenha certificados oficiais reconhecidos por empresas em todo o mundo.
							</p>
						</div>
					</div>

        </section>
    )
}