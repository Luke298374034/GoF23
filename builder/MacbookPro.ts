export class MacbookPro {
    private processor: Processor;
    private memory: Memory;
    private storage: Storage;
    private graphics: Graphics;
    private keyboard: Keyboard;

    public setProcessor(processor: Processor): void {
        this.processor = processor;
    }

    public setMemory(memory: Memory): void {
        this.memory = memory;
    }

    public setStorage(storage: Storage): void {
        this.storage = storage;
    }

    public setGraphics(graphics: Graphics): void {
        this.graphics = graphics;
    }

    public setKeyboard(keyboard: Keyboard): void {
        this.keyboard = keyboard;
    }

    public getProcessor(): Processor {
        return this.processor;
    }

    public getMemory(): Memory {
        return this.memory;
    }

    public getStorage(): Storage {
        return this.storage;
    }

    public getGraphics(): Graphics {
        return this.graphics;
    }

    public getKeyboard(): Keyboard {
        return this.keyboard;
    }

    public toString(): String{
        return "{ Macbook : " + "\n" +
                "Processor : " + this.getProcessor().name + "\n" +
                "Memory size : " + this.getMemory().size + "GB" + "\n" +
                "Graphics : " + this.getGraphics().name + "\n" +
                "Storage size : " + this.getStorage().size + "GB" +"\n" +
                "Keyboard language : "+ this.getKeyboard().language +
                " }";
    }
}

export class Processor {
    name: String;
    constructor(name: String){
        this.name = name;
    }
}

export class Memory {
    size: number;
    constructor(size: number){
        this.size = size;
    }
}

export class Graphics {
    name: String;
    constructor(name: String){
        this.name = name;
    }
}

export class Storage {
    size: number;
    constructor(size: number){
        this.size = size;
    }
}

export class Keyboard {
    language: String;
    constructor(language: String){
        this.language = language;
    }
}
