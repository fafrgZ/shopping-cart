
function Contacto () {

    return(
        <div className=" min-h-screen flex items-center justify-center bg-gray-50 max-w-[1240px] mx-auto p-4 mt-20">
            <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Contáctanos!</h1>
                <p className="text-gray-600 text-center mb-8">
                    ¿Tenés alguna consulta o querés que te contactemos? Completá el formulario y te responderemos pronto.
                </p>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input 
                            type="text"
                            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3b3b91]"
                            placeholder="nombre"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="text"
                            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3b3b91]"
                            placeholder="pedroflores@gmail.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                        <textarea 
                            rows={4}
                            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3b3b91]"
                            placeholder="Escribí tu mensaje..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#3b3b91] text-white py-2 rounded-md font-semibold hover:bg-[#2c2c75] transition"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>         
        </div>
    );
}

export default Contacto;