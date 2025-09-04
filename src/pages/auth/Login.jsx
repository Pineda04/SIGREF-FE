export const Login = () => {
  return (
    <div className="flex min-h-screen bg-background-third">
      <div className="flex-1 flex items-center justify-center bg-background-third">
        <div className="text-center">
          <h1 className="text-7xl font-roboto font-bold tracking-wider text-general">
            SIGREF
          </h1>
        </div>
      </div>

      {/* Formulario */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background-primary">
        <div className="flex flex-col w-150 items-center">
          <h2 className="text-5xl font-roboto font-bold mb-8 text-center text-third">
            Inicia Sesión
          </h2>
          <div className="rounded-lg p-6 py-12 w-full max-w-md shadow-default bg-card">
            {/* Input de usuario */}
            <div className="mb-8">
              <input
                className="w-full px-4 font-roboto font-bold py-3 border-2 shadow-default border-background-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-background-primary focus:border-transparent text-general-secondary "
                placeholder="Nombre de usuario:"
                type="text"
              />
            </div>

            {/* Input de contraseña */}
            <div className="mb-12">
              <input
                className="w-full px-4 py-3 font-roboto border-2 shadow-default border-background-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-background-primary focus:border-transparent text-general-secondary font-bold"
                placeholder="Contraseña:"
                type="password"
              />
            </div>

            {/* Boton de iniciar sesion */}
            <div className="flex justify-center">
              <button className="w-50 shadow-default font-roboto bg-background-primary text-third py-2 px-4 rounded-xl font-semibold text-2xl hover:bg-background-secondary transition duration-200">
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
