export class User{

    private _userName : string;
    private _password : string;
    
    constructor(_userName:string, _password:string) {
        this._userName = _userName;
        this._password = _password;
    }

    get password() : string {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
    get userName() : string {
        return this._userName;
    }
    set userName(userName) {
        this._userName = userName;
    }
    
}

let users:User[] = [];

let firstUser = new User('TestUser','221015');

users.push(firstUser);

export function getUsers(){
    return users;
}