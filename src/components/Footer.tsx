
const Footer = () => {
    return (
      <div className="max-w-[1920px] mx-auto py-16 px-4 text-gray-300 bg-[#10233d]">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sección izquierda */}
          <div>
            <h1 className="w-full text-3xl font-bold text-gray-200">Mi Tienda</h1>
            <p className="py-4 max-w-[600px] text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
  
          {/* Sección derecha (listas) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div>
              <h6 className="font-medium text-gray-400">Conocenos</h6>
              <ul>
                <li className="py-2 text-sm">Acerca de nostros</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Servicios</li>
                <li className="py-2 text-sm">Logística</li>
                <li className="py-2 text-sm">Inversiones</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-400">Soporte</h6>
              <ul>
                <li className="py-2 text-sm">Tu cuenta</li>
                <li className="py-2 text-sm">Politica de devolucion</li>
                <li className="py-2 text-sm">Plotica de Envios</li>
                <li className="py-2 text-sm">Tus compras</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-400">Company</h6>
              <ul>
                <li className="py-2 text-sm">Trabajos</li>
                <li className="py-2 text-sm">Cargos</li>
                <li className="py-2 text-sm">Carreras</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-400">Legal</h6>
              <ul>
                <li className="py-2 text-sm">Reclamos</li>
                <li className="py-2 text-sm">Politica de la Empresa</li>
                <li className="py-2 text-sm">Términos de servicio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;