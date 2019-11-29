import { State } from './State';
import { Person } from './Person';

export class IsLogin implements State {
    private person: Person; //每一狀態會綁上使用者的物件，這是Mediatro的雙相溝通方法。
    constructor(p: Person){ //透過建構子進行綁定
        this.person = p;
    }

    public name = 'IsLogin'

    public chat(): void {
        console.log('Chating!!!!'); 
    }
    public login(): void {
        console.log('You are already logged in!');
    }
    public logout(): void {
        console.log('Logout....');
        this.person.setState(this.person.getisLogoutState());
    }
}