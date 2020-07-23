import { CustomSetting } from './CustomSetting'
import { Monitor } from './Monitor'

export class Macbook extends Monitor{
    private customSetting: CustomSetting;

    constructor(customSetting: CustomSetting) {
        super();
        this.customSetting = customSetting;
    }

    public setCustomSetting(customSetting: CustomSetting): void{
        this.customSetting = customSetting;
    }

    public toString(): String{
        return "CustomSetting = { " + "\n" +
                "cpu = " + this.customSetting.getCpu() + "\n" +
                "memory = " + this.customSetting.getMemory() + "\n" +
                "storage = " + this.customSetting.getStorage() + "\n" +
                "monitor = " + this.getMonitor() + "\n" +
                "}";
    }
}

enum Spec {
    LOW = 'LOW',
    HIGH = 'HIGH'
}

export { Spec }
