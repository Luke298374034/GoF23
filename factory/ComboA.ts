import { Combo } from './Combo'

export class ComboA implements Combo {
    ps: string
    constructor (ps: string) {
        this.ps = ps
    }

    include() {
        console.log(`include burger and milktea`, this.ps)
    }
}