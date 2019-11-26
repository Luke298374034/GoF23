import { Combo } from "./Combo";
import { ComboA } from "./ComboA";
import { ComboB } from "./ComboB";

export class Factory {
    getComboA(ps: string) :Combo{
        return new ComboA(ps)
    }

    getComboB(ps: string) :Combo{
        return new ComboB(ps)
    }
}