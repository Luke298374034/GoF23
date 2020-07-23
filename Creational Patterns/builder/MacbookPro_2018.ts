import { MacbookPro, Processor, Memory, Graphics, Storage, Keyboard } from './MacbookPro'
import { MacbookProBuilder } from './MacbookProBuilder'

export class MacbookPro_2018 extends MacbookProBuilder {
    constructor() {
        super();
    }

    buildCPU(processor: Processor): MacbookProBuilder {
        this.macbookPro.setProcessor(processor);
        return this;
    }

    buildMemory(size: Memory): MacbookProBuilder {
        this.macbookPro.setMemory(size);
        return this;
    }

    buildGraphics(name: Graphics): MacbookProBuilder {
        this.macbookPro.setGraphics(name);
        return this;
    }

    buildStorage(size: Storage): MacbookProBuilder {
        this.macbookPro.setStorage(size);
        return this;
    }

    buildKeyboard(language: Keyboard): MacbookProBuilder {
        this.macbookPro.setKeyboard(language);
        return this;
    }

    build(): MacbookPro {
        return super.build();
    }
}
