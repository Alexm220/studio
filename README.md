# Real State - Aplicación de Next.js

La aplicación utiliza Genkit para funciones impulsadas por IA, como la generación de descripciones de propiedades.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) (generalmente viene con Node.js)

## Empezando

Sigue estos pasos para poner en marcha el proyecto en tu entorno de desarrollo local.

### 1. Instalar Dependencias

Navega al directorio raíz del proyecto y ejecuta el siguiente comando para instalar todos los paquetes necesarios:

```bash
npm install
```

### 2. Configurar Variables de Entorno

Este proyecto utiliza Genkit con el plugin de Google AI, que requiere una clave API. Deberás configurar tus variables de entorno.

1.  Crea un archivo llamado `.env` en la raíz del proyecto.
2.  Abre el archivo `.env` y añade tu clave API de Google AI:

```
GEMINI_API_KEY=tu_clave_api_aqui
```

Reemplaza `tu_clave_api_aqui` con tu clave API real de Google AI.

### 3. Ejecutar el Servidor de Desarrollo

Una vez que hayas instalado las dependencias y configurado las variables de entorno, puedes iniciar el servidor de desarrollo de Next.js:

```bash
npm run dev
```

Esto iniciará la aplicación en modo de desarrollo con Turbopack. Por defecto, estará disponible en [http://localhost:9002](http://localhost:9002).

La aplicación también incluye herramientas de Genkit para funcionalidades de IA. Para ejecutar el inspector de Genkit localmente, puedes usar:

```bash
npm run genkit:watch
```

Esto te permitirá ver tus flujos de IA, probarlos e inspeccionar los seguimientos.

## Scripts Disponibles

En el archivo `package.json`, encontrarás varios scripts para gestionar la aplicación:

-   `npm run dev`: Inicia la aplicación en modo de desarrollo.
-   `npm run build`: Construye la aplicación para producción.
-   `npm run start`: Inicia un servidor de producción de Next.js.
-   `npm run lint`: Ejecuta ESLint para analizar el código en busca de problemas.
-   `npm run typecheck`: Ejecuta el compilador de TypeScript para verificar los tipos sin emitir archivos.

## Estructura del Proyecto

-   `src/app/`: Contiene las rutas principales y los diseños de la aplicación usando el App Router de Next.js.
-   `src/components/`: Contiene componentes de React reutilizables.
-   `src/ai/`: Contiene la lógica relacionada con la IA, incluyendo los flujos de Genkit.
-   `src/lib/`: Contiene funciones de utilidad, definiciones de tipos y lógica de datos.
-   `public/`: Contiene activos estáticos que se sirven directamente.
