# Proyecto SmartCities

Proyecto de Tesis de Maestría en Gestión Aplicación y Desarrollo de Software.

## Estructura Principal de Archivos

```bash
├─ public
│   ├─ img
│   └─ icons
└─ src
    ├─ components
    ├─ layouts
    └─ pages
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

* Comando para instalar otras dependencias (tailwind).

```sh
npx astro add tailwind
```

* Comando para iniciar la aplicación

```sh
npm run dev
```