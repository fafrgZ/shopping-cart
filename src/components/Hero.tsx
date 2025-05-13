import Banner from '../assets/banner.jpg';

const Hero = () => {

    return (
        <div
          className="w-full px-10 h-[100vh] bg-cover bg-no-repeat bg-center relative"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          {/* Capa de oscurecimiento */}
          <div className="absolute inset-0 bg-[#0005]"></div>
    
          {/* Contenido centrado */}
          <div className="relative z-10 flex flex-col items-center justify-start h-full text-white text-center px-4 py-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bienvenido a Mi Tienda
            </h1>
            <p className="text-lg md:text-2xl max-w-xl mb-6">
              Descubrí nuestros productos destacados y encontrá lo que necesitas al mejor precio.
            </p>
            <button className="bg-[#3b3b91] hover:bg-[#2f2f7a] text-white font-semibold px-6 py-3 rounded-md transition duration-300">
              Ver productos
            </button>
          </div>
        </div>
      );
}

export default Hero;