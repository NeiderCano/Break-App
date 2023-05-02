"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Este es el archivo principal del programa, su función es reflejar los cambios en el servidor 
// Cada vez que se hagan cambios en el código
_app["default"].listen(3000);

console.log('Server on port 3000 \nin http://localhost:3000');