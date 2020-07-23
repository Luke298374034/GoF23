// import java.util.HashMap;
import { CustomSetting } from "./CustomSetting";
import { Macbook, Spec } from "./Macbook";

export class MacbookFactory {
    private cache = new Map();

    public getMacbook(spec: Spec): Macbook {
        let c = new CustomSetting(String(spec))
        if (this.cache.get(c)) {
            return this.cache.get(c);
        }
        let macbook = new Macbook(c);
        this.cache.set(c, macbook);
        return macbook;
    }

    public getCustomMacbook(key: CustomSetting): Macbook {
        if (this.cache.get(key)) {
            return this.cache.get(key);
        }
        let macbook = new Macbook(key);
        this.cache.set(key, macbook);
        return macbook;
    }
}
