# Nodejs

Este repositorio servirá para conocer las bases de Nodejs

## ¿Qué es Nodejs?
- Node.js es una plataforma del lado del servidor construida sobre el motor JavaScript de Google Chrome (V8 Engine)


## ¿Para qué Nodejs?
- Node.js brilla en aplicaciones web en tiempo real que emplean tecnología push sobre websockets. Este video puede ayudar a entenderlo: https://www.youtube.com/watch?v=tZDV8dmSKNc

## ¿Cómo instalo Nodejs?
- Haciendo un clic aquí → https://nodejs.org/es/ - Asegurate de bajar la aplicación LTS (es la versión más estable de Node)

- Al instalar Node, va a ser residente dentro de nuestro sistema.

## Comprobar que está instalado Node - Es necesario abrir la terminal y escribir:
```bash
node
```
- Ejecutando este comando veremos un mensaje de bienvenida, de lo contrario, un mensaje de error.

## ¿Qué versión de Nodejs tengo?
- Desde terminal ejecuta el siguiente comando
```bash
node -v
```

# NPM
npm es el Node Package Manager

## El entorno de NPM

## Inicializar un proyecto con npm
```bash
npm init
```
- Seguido de esto Nodejs nos pedirá llenar una serie de datos.

## Instalar y desisntalar paquetes
En el siguiente enlace, importaremos el paquete "Cowsay" a nuestro proyecto.
```bash
[npm init](https://www.npmjs.com/package/cowsay)
```
Es muy importante leer la documentación.
- Dentro de nuestra carpeta desde terminal, vamos a ejecutar el comando:
```bash
npm i cowsay
```

- Se ha colocado el siguiente código en nuestro app.js
```bash
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));
```
Ahora vamos a ejecutarlo...

## Automatización de tareas con npm

- Dentro de nuestro package.json vamos a modificar el apartado de scripts, quedando de la siguiente manera:
```bash
"scripts": {
    "start": "node app.js"
  },
```
- Esta modificación nos permitirá inicializar nuestro app.js que tenemos dentro de la misma carpeta. Ahora vamos a inicializar nuestro proyecto con el comando
```bash
node start
```


# Sintaxis de Nodejs
