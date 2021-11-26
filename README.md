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

## Instalación
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

## Desinstalar
```bash
npm uninstall cowsay
```

## Automatización de tareas con npm
- Este comando examina todos los modulos que se encuentran dentro de mi aplicació y verifica que no haya vulnerabilidades.
```bash
npm audit
```
```bash
"scripts": {
    "start": "node app.js && auditar",
    "auditar": "npm audit"
  },
  },
```
- En el código de arriba hemos agregado una propiedad de nombre auditar en específico podemos ejecutarla con
```bash
npm run auditar
```

- Dentro de nuestro package.json vamos a modificar el apartado de scripts, quedando de la siguiente manera modificamos la propiedad y su valor quedando:
```bash
"scripts": {
    "start": "node app.js"
  },
```
- Esta modificación nos permitirá inicializar nuestro app.js que tenemos dentro de la misma carpeta. Ahora vamos a inicializar nuestro proyecto con el comando
```bash
npm start
```
- Al hacer este proceso, le indicamos a Node la ruta del archivo específico a ejecutar.

- Pero OJO, también podemos ejecutar varios procesos, uno seguido de otro, para ello se usan los comandos &&
```bash
"scripts": {
    "start": "node app.js && npm audit"
  },
```

# Sintaxis de Nodejs
## Datos simples en Nodejs
- Node al estar basado en Javascript utiliza sus mismas reglas y sintaxis

## Datos compuestos en Nodejs

## Funciones y métodos en Nodejs

## Buffer y Process a examen

## Importar paquetes externos usando el servicio en la nube de NPM

## Importar paquetes internos usando el servicio en la nube de NPM
```bash
var miModulo = require('./SecondApp/app.js')
```

## Paquetes preinstalados de Node
Node por defecto tiene instalados algunos paquetes como http, url, path, fs, estos módulos nos permiten interactuar con el sistema (path fs) así como con archivos externos (http url)

# Operar un servidor en Nodejs

## Instalando nodemon para ver cambios sin refrescar

Nodemon es una utilidad que monitorea los cambios en el código fuente que se esta desarrollando y automáticamente re inicia el servidor. Es una herramienta muy útil para desarrollo de aplicaciones en nodojs.

```bash
npm install nodemon
```

## Instalando nodemon para ver cambios sin actualizar en terminal
```bash
https://www.npmjs.com/package/nodemon
```

## Crear un servidor básico en Nodejs

## Mostrar contenido en el servidor Nodejs