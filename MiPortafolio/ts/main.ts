import {getUsers} from './users';
import login from './login';

document.getElementById('logIn')!.addEventListener('click',function(e){

    e.preventDefault();

    let name:string = (<HTMLInputElement>document.getElementById('username')).value;
    let password:string = (<HTMLInputElement>document.getElementById('password')).value;

    login(getUsers()[0], {userName: name, password: password});
});