import { Combo } from './Combo'

export class ComboB implements Combo {
    ps: string
    constructor (ps: string) {
        this.ps = ps
    }

    include() {
        console.log(`include sandwich and blacktea`, this.ps)
    }
}