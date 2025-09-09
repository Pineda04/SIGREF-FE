# 💻 SIGREF-FE
[![React](https://img.shields.io/badge/React-Framework-blue)](https://reactjs.org/) 
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Framework-%2338B2AC)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Runtime-green)](https://nodejs.org/)  

Este repositorio contiene el código fuente de la aplicación frontend de SIGREF, que se encarga de la interfaz de usuario y la gestión de datos. Construido totalmente en React JavaScript mediante el entorno de Node.js.

## 🚀 Tecnologías Utilizadas

- **React** - Biblioteca principal para la construcción de la interfaz de usuario
- **Tailwind CSS** - Framework de CSS para estilizado rápido y responsive
- **Node.js** - Entorno de ejecución para JavaScript
- **Zustand** - Gestión de estado ligero y escalable
- **TanStack Query** - Manejo eficiente de data fetching y caching
- **Axios** - Cliente HTTP para realizar peticiones a APIs
- **Formik** - Biblioteca para construcción y manejo de formularios
- **Yup** - Validación de esquemas para formularios
- **Otras paqueterías** - React Router DOM, React Hook Form, entre otras

## 🛠️ Estructura del Proyecto

```
SIGREF-FE/
├── documentation/           # Documentación de componentes reutilizables
├── public/                  # Archivos públicos
├── src/                     # Carpeta principal de recursos
│   ├── config/              # Configuración de la aplicación
│   ├── features/            # Carpeta principal de funcionalidades
|   |   ├── admin/           # Páginas de administración
|   |   ├── auditor/         # Páginas de auditoría
|   |   ├── auth/            # Páginas de autenticación
|   |   ├── cashier/         # Páginas de auxiliar de caja
|   │   └── it/              # Páginas de administrador ti
|   ├── routers/             # Rutas principales de navegación
|   ├── shared/              # Componentes y funciones reutilizables
|   |   ├── actions/         # Peticiones a la API
|   |   ├── components/      # Componentes reutilizables
|   |   |   ├── modals/      # Componentes de modales
|   |   │   └── ui/          # Componentes de interfaz
|   |   ├── hooks/           # Hooks reutilizables
|   |   ├── pages/           # Páginas reutilizables
|   |   ├── store/           # Store con Zustand para manejo de estado
|   │   └── utils/           # Funciones y utilidades
|   ├── App.jsx              # Componente principal de la aplicación
|   ├── index.css            # Estilos globales
│   └── main.jsx             # Archivo principal de entrada
├── .gitignore               # Archivo de ignorados
├── eslint.config.js         # Configuración de ESLint 
├── index.html               # Archivo HTML de entrada
├── package-lock.json        # Archivo de bloqueo de versión de paquetes
├── package.json             # Archivo de configuración de paquetes
├── README.md                # Este archivo
└── vite.config.js           # Configuración de Vite
```

## ⚙️ Instrucciones de instalación

**1. Clona el repositorio:**
```
git clone https://github.com/Pineda04/SIGREF-FE.git
```
**2. Navega al directorio del proyecto:**
```
cd SIGREF-FE
```
**3. Instala las dependencias:** 
```
npm install
```
**4. Inicia el servidor de desarrollo:** 
```
npm run dev
```

## 📄 Documentación
Dar click en el siguiente enlace para ver la documentación disponible acerca del proyecto:

[SIGREF Web Frontend](./documentation/index.md)

## 🧑🏻‍💻 Equipo de desarrollo
Personas involucradas en el desarrollo del proyecto:

- **[Anthony Edward Miranda Fuentes](https://github.com/AnthonyEMF)**  
- **[Carlos Ovidio Dubon Pineda](https://github.com/Pineda04)**  
- **[Danilo Isaac Vides Chicas ](https://github.com/IsaacV04)**
- **[Ever Josue Garcia Leonor ](https://github.com/everjosue56)**
- **[Hector Rene Martinez Vega ](https://github.com/TETvega)**  
- **[Josue David Diaz Rodriguez ](https://github.com/JDDR200530)**
- **[Michael Andrey Galdamez Martinez ](https://github.com/MichaelGald)**