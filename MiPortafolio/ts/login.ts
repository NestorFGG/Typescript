import {User} from './users';
import loggedIn from './loggedIn';

export default function(user:User, formInfo:{userName:string, password:string}){
    if(user.userName !== formInfo.userName)
        return;

    if(user.password !== formInfo.password)
        return;

    localStorage.setItem('userName', formInfo.userName);
    loggedIn();
}