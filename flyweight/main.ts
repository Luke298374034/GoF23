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