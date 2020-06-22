System.register("users", [], function (exports_1, context_1) {
    "use strict";
    var User, users, firstUser;
    var __moduleName = context_1 && context_1.id;
    function getUsers() {
        return users;
    }
    exports_1("getUsers", getUsers);
    return {
        setters: [],
        execute: function () {
            User = /** @class */ (function () {
                function User(_userName, _password) {
                    this._userName = _userName;
                    this._password = _password;
                }
                Object.defineProperty(User.prototype, "password", {
                    get: function () {
                        return this._password;
                    },
                    set: function (password) {
                        this._password = password;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "userName", {
                    get: function () {
                        return this._userName;
                    },
                    set: function (userName) {
                        this._userName = userName;
                    },
                    enumerable: true,
                    configurable: true
                });
                return User;
            }());
            exports_1("User", User);
            users = [];
            firstUser = new User('TestUser', '221015');
            users.push(firstUser);
        }
    };
});
System.register("loggedIn", ["users"], function (exports_2, context_2) {
    "use strict";
    var users_1;
    var __moduleName = context_2 && context_2.id;
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
    exports_2("default", default_1);
    return {
        setters: [
            function (users_1_1) {
                users_1 = users_1_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("login", ["loggedIn"], function (exports_3, context_3) {
    "use strict";
    var loggedIn_1;
    var __moduleName = context_3 && context_3.id;
    function default_2(user, formInfo) {
        if (user.userName !== formInfo.userName)
            return;
        if (user.password !== formInfo.password)
            return;
        localStorage.setItem('userName', formInfo.userName);
        loggedIn_1.default();
    }
    exports_3("default", default_2);
    return {
        setters: [
            function (loggedIn_1_1) {
                loggedIn_1 = loggedIn_1_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("main", ["users", "login"], function (exports_4, context_4) {
    "use strict";
    var users_2, login_1;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (users_2_1) {
                users_2 = users_2_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }
        ],
        execute: function () {
            document.getElementById('logIn').addEventListener('click', function (e) {
                e.preventDefault();
                var name = document.getElementById('username').value;
                var password = document.getElementById('password').value;
                login_1.default(users_2.getUsers()[0], { userName: name, password: password });
            });
        }
    };
});
