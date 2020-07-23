//ExtrinsicState
export class CustomSetting {
    //儲存一些使用者設定的類別
    public static LOW = new CustomSetting("LOW");
    public static HIGH = new CustomSetting("HIGH");

    private cpu: String;
    private memory: number;
    private storage: number;

    constructor(set?: String){
        switch (set){
            // 一些低階設定
            case "LOW":
                this.cpu = "i5";
                this.memory = 8;
                this.storage = 256;
                break;

            // 一些高階設定
            case "HIGH":
                this.cpu = "i7";
                this.memory = 16;
                this.storage = 512;
                break;

            default:
        }
    }

    public getCpu(): String{
        return this.cpu;
    }

    public setCpu(cpu: String): void {
        this.cpu = cpu;
    }

    public getMemory(): number{
        return this.memory;
    }

    public setMemory(memory: number): void{
        this.memory = memory;
    }

    public getStorage(): number{
        return this.storage;
    }

    public setStorage(storage: number): void {
        this.storage = storage;
    }

    public toString(): String{
        return "CustomSetting = { "
            + "\n" + "cpu = " + this.getCpu()
            + "\n" + "memory = " + this.getMemory()
            + "\n" + "storage = " + this.getStorage()
            + "\n" + "}";
    }
}