export const Login = () => {
  return (
    <div className="flex min-h-screen bg-white ">
      <div className="flex-1 bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-gray-800 tracking-wider">
            SIGREF
          </h1>
        </div>
      </div>

      {/* Formulario */}
      <div className="flex-1 bg-blue-600 flex items-center justify-center p-10">
        <div className="flex flex-col w-100 items-center">
          <h2 className="text-5xl font-bold text-white mb-8 text-center">
            Inicia Sesión
          </h2>
          <div className="bg-gray-50 rounded-lg p-8 py-12 w-full max-w-md shadow-lg">
            {/* Input de usuario */}
            <div className="mb-8">
              <input
                className="w-full px-4 py-3 border-2 shadow-md border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500 font-medium"
                placeholder="Nombre de usuario:"
                type="text"
              />
            </div>

            {/* Input de contraseña */}
            <div className="mb-12">
              <input
                className="w-full px-4 py-3 border-2 shadow-md border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500 font-medium"
                placeholder="Contraseña:"
                type="password"
              />
            </div>

            {/* Boton de iniciar sesion */}
            <div className="flex justify-center">
              <button className="w-50 shadow-md bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-2xl hover:bg-blue-700 transition duration-200">
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
