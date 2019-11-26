import { MacbookPro, Processor, Memory, Graphics, Storage, Keyboard } from './MacbookPro'
import { MacbookPro_2018 } from './MacbookPro_2018'
import { MacBookSeller } from './MacbookSeller'

export class Test {
    public test(): void{

        let macbookPro_2018: MacbookPro_2018 = new MacbookPro_2018();

        let macBookSeller: MacBookSeller = new MacBookSeller(macbookPro_2018);

        // 兩種取得Macbook的管道
        // 從經銷商取得的固定規格
        let myMacbook: MacbookPro= macBookSeller.lowSpec();
        console.log(myMacbook.toString());

        // 自訂的macbook pro
        let dreamMacbook: MacbookPro = macbookPro_2018
                .buildCPU(new Processor("2.9GHz 6 核心第八代 Intel Core i9 處理器"))
                .buildMemory(new Memory(32))
                .buildStorage(new Storage(4096))
                .buildKeyboard(new Keyboard("英文"))
                .buildGraphics(new Graphics("Radeon Pro 560X 配備 4GB GDDR5 記憶體"))
                .build();
        console.log(dreamMacbook.toString());
    }
}

let t = new Test()
t.test()


//★★★★★ JQuery $('').attr().html() 即為BUILDER模式的一種 就是每執行一個函式 回傳新的物件
