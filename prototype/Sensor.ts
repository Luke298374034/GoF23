import { Prototype } from './Prototype'

export class Sensor extends Prototype {
    private ID: number;
    private name: String;
    private nickname: String;
    private version: String;
    private wifiID: String;
    private wifiPass: String;
    private data: String;

    public getData(): String{
        return this.data;
    }

    public setData(data: String): void{
        this.data = data;
    }

    public getID(): number {
        return this.ID;
    }

    public setID(ID: number): void{
        this.ID = ID;
    }

    public getName(): String{
        return name;
    }

    public setName(name: String): void{
        this.name = name;
    }

    public getNickname(): String{
        return this.nickname;
    }

    public setNickname(nickname: String): void{
        this.nickname = nickname;
    }

    public getVersion(): String{
        return this.version;
    }

    public setVersion(version: String): void{
        this.version = version;
    }

    public getWifiID(): String{
        return this.wifiID;
    }

    public setWifiID(wifiID: String): void{
        this.wifiID = wifiID;
    }

    public getWifiPass(): String{
        return this.wifiPass;
    }

    public setWifiPass(wifiPass: String): void{
        this.wifiPass = wifiPass;
    }

    public clone(): Prototype{
        var cloned = Object.create(Sensor.prototype || null);
        Object.keys(this).map((key: string) => {
            cloned[key] = this[key];
        });

        return cloned;
    }
}