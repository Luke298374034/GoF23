import Cook from './Cook'

export default class cooker {
    public c: Cook

    setCookWay(c: Cook) {
        this.c = c
    }

    doCook(temperature: string, time: string) {
        this.c.cook(temperature, time)
    }

    getCookName() {
        console.log(this.c.getName())
    }
}