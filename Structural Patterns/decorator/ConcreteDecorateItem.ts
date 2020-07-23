import { DecorateItem } from './DecorateItem'

export class Drink extends DecorateItem {
    public order(): void{
        super.order()
        console.log(`加飲料40元`)
    }
}

export class Soup extends DecorateItem {
    public order(): void{
        super.order()
        console.log(`加湯80元`)
    }
}

export class Cake extends DecorateItem {
    public order(): void{
        super.order()
        console.log(`加蛋糕100元`)
    }
}