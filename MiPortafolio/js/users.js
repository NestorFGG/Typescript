"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
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
exports.User = User;
var users = [];
var firstUser = new User('TestUser', '221015');
users.push(firstUser);
function getUsers() {
    return users;
}
exports.getUsers = getUsers;
