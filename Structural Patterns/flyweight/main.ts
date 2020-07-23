import { CustomSetting } from './CustomSetting'
import { MacbookFactory } from './MacbookFactory'
import { Spec } from "./Macbook";

export class main {
    public main(): void{
        let factory = new MacbookFactory();

        let goodbook = factory.getMacbook(Spec.HIGH);
        console.log(goodbook.toString());

        let superSetting = new CustomSetting();
        superSetting.setCpu("i9");
        superSetting.setMemory(32);
        superSetting.setStorage(1024);

        let superMacbook = factory.getCustomMacbook(superSetting);
        console.log(superMacbook.toString());
    }
}

let work = new main()
work.main()

// Flyweigt Factory：工廠模式的應用，用來建立並管理Flyweight物件，如果物件不存在則建立，存在則返回已建立的物件，可以讓使用這個工廠建立的物件提供給大家共同分享使用。