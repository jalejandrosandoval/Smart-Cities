# Proyecto SmartCities

Proyecto de Tesis de Grado para la Maestría en Gestión Aplicación y Desarrollo de Software de la Universidad Aútonoma de Bucaramanga.

Desarrollado por: <b> Jhon Alejandro Sandoval Miranda.</b>

## Contexto

Proyecto de desarrollo de Software: Creación de un sitio web por medio del uso de Astro, Preact, Tailwind, Auth0, Microsoft Copilot, entre otras tecnologías, para ayudar en la toma de desiciones en el área de la movilidad del AMB basado en modelos o conceptos de SMARTCities de la Industria 4.0

## Tecnologías Usadas

* Astro.
* Preact.
* Tailwind.
* Auth0.
* NodeJS.
* Microsoft Copilot.
* JS.
* HTML.
* PowerBI.

## Estructura Principal de Archivos

```bash
├─ public
│   ├─ assets
│   ├─ img
│   └─ icons
└─ src
    ├─ components
    │   ├─ astro
    │   │   ├─ auth
    │   │   ├─ init
    │   │   ├─ shared
    │   │   └─ users 
    │   └─ preact
    │       ├─ auth
    │       ├─ shared
    │       └─ utils 
    ├─ config
    ├─ layouts
    ├─ libs
    └─ pages
        ├─ admin
        └─ users
```

## Inicialización de los proyectos

Se debe tener en cuenta que para arrancar los proyectos se deben tener previamente instaladas algunas tecnologías como lo son:

- NodeJS >= 18.

## Comandos para instalar dependencias, etc.

* Comando para crear archivos package.json en el repositorio.

```sh
npm init --yes
```

- Una vez se ejecuta el comando anterior se debe reemplazar en el archivo package.json, la sección de scripts por lo siguiente:

```sh
De:
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    }

A:
    "scripts": {
        "dev": "astro dev",
        "start": "astro dev",
        "build": "astro build",
        "preview": "astro preview"
    }
```

* Comando para instalar dependencia de @astro.

```sh
npm i astro@latest
```

* Comando para instalar otras dependencias (tailwind, preact).

```sh
npx astro add tailwind
npx astro add preact
```

* Comando para iniciar la aplicación

```sh
npm run dev
```

# Documentación

* [Preact](https://preactjs.com/).
* [Tailwind](https://tailwindcss.com/).
* [Astro](https://docs.astro.build/es/getting-started/).