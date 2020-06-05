"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
function default_1() {
    if (!localStorage.userName)
        return;
    document.getElementById('loginContainer').innerHTML = "<span>Hola, " + users_1.getUsers()[0].userName + "</span>";
    document.getElementById('addGalleryItemButtonContainer').innerHTML = "<button class=\"btn btn-primary btn-block\">Agregar foto</button>\n                                                                            <button id=\"closeSessionButton\" class=\"btn btn-danger btn-block\">Cerrar sesi\u00F3n</button>";
    $('#closeSessionButton').click(function (e) {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    });
}
exports.default = default_1;
