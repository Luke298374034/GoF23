import { MacbookPro, Processor, Memory, Graphics, Storage, Keyboard } from './MacbookPro'
import { MacbookProBuilder } from './MacbookProBuilder'

export class MacBookSeller {
    private macbookProBuilder: MacbookProBuilder;
    constructor( macbookProBuilder: MacbookProBuilder){
        this.macbookProBuilder = macbookProBuilder;
    }

    public lowSpec(): MacbookPro{
        return this.macbookProBuilder
                .buildCPU(new Processor("2.2GHz 6 核心第八代 Intel Core i7 處理器"))
                .buildMemory(new Memory(16))
                .buildGraphics(new Graphics("Radeon Pro 555X 配備 4GB GDDR5 記憶體"))
                .buildStorage(new Storage(256))
                .buildKeyboard(new Keyboard("中文注音"))
                .build();
    }

    public highSpec(): MacbookPro{
        return this.macbookProBuilder
                .buildCPU(new Processor("2.6GHz 6 核心第八代 Intel Core i7 處理器"))
                .buildMemory(new Memory(16))
                .buildGraphics(new Graphics("Radeon Pro 560X 配備 4GB GDDR5 記憶體"))
                .buildStorage(new Storage(512))
                .buildKeyboard(new Keyboard("中文注音"))
                .build();
    }


}