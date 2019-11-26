import { MacbookPro, Processor, Memory, Graphics, Storage, Keyboard } from './MacbookPro'

export abstract class MacbookProBuilder {
    protected macbookPro: MacbookPro;

    constructor(){
        this.macbookPro = new MacbookPro();
    }

    abstract buildCPU(processor: Processor): MacbookProBuilder;

    abstract buildMemory(size: Memory): MacbookProBuilder;

    abstract buildGraphics(name: Graphics): MacbookProBuilder;

    abstract buildStorage(size: Storage): MacbookProBuilder;

    abstract buildKeyboard(language: Keyboard): MacbookProBuilder;

    build(): MacbookPro {
        return this.macbookPro;
    }

}