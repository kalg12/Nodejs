var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "**",
    T : "U "
}));

//Importación de un módulo local
var miModulo = require('./SecondApp/app.js')

//Importamos nuestra segunda app que es utilizando nodemon
var appDos = require('./app2.js')