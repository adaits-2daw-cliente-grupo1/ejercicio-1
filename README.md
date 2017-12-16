# [Entorno cliente: ejercicio 1](https://adaits-2daw-cliente-grupo1.github.io/ejercicio-1/) [![Estado de compilación][travis-image]][travis-url]

Este es el Ejercicio 1 del Grupo 1 de la asignatura de Entorno Cliente.

Los archivos del proyecto se pueden encontrar en `src`, con sus respectivas carpetas `css`, `html`, y `js`.

## Proceso de compilación

El proyecto cuenta con un proceso de compilación mediante el cual los archivos Javascript se agrupan en uno con `browserify`, y después se minifican con `uglify-es`.

Para compilar el proyecto hay que tener Node 8 o superior instalado, y ejecutar los siguientes comandos:

```sh
# Instalará todas las dependencias del proyecto
# Solo es necesario ejecutarlo una vez
npm install

# Compilará todos los archivos en la carpeta build
# El archivo build/index.html se puede visitar desde un navegador
npm run build
```

## Estilo

El proyecto usa `eslint` para garantizar un estilo consistente. Para ejecutar las comprobaciones de ESLint, hay que ejecutar el comando:

```sh
npm run lint
```

## Tests

El proyecto utiliza `mocha` para ejectuar los tests y reducir los bugs. Los tests están definidos en `src/js` junto con el resto de los archivos Javascript, con el nombre de `archivo.spec.js`.

Para ejecutar los tests, hay que ejecutar el comando:

```sh
npm run test
```

[travis-image]: https://travis-ci.org/adaits-2daw-cliente-grupo1/ejercicio-1.svg?branch=master
[travis-url]: https://travis-ci.org/adaits-2daw-cliente-grupo1/ejercicio-1
