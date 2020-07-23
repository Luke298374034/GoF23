//Person.ts
import { State } from './State';
import { IsLogin } from './IsLogin';
import { IsLogout } from './IsLogout';

export class Person {
    private isLogin:State;
    private isLogout:State;
    private state:State;
    
    constructor() {//透過建構子將自己綁進去狀態，mediator的雙向概念。
        this.isLogin = new IsLogin(this);
        this.isLogout = new IsLogout(this);
        this.state = this.isLogout; //預設狀態是登出狀態
    }

    //====
    //各個方法執行時，會呼叫狀態的方法。 所以我不會有一串邏輯判斷，因為會透過切方法來找到對應的回應。
    public chat(): void{
        this.state.chat();
    }
    public login(): void{
        this.state.login();
    }
    public logout(): void{
        this.state.logout();
    }

    //===
    //取得登入狀態以及登出狀態。
    public getisLoginState(): State{
        return this.isLogin;
    }
    public getisLogoutState(): State{
        return this.isLogout;
    }

    //=====
    //取目前狀態
    public getState(): void {
        console.log(this.state.name);
    }
    //設定狀態
    public setState(s: State): void {
        this.state = s;
    }
}