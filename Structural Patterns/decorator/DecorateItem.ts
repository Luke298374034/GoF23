import { Item } from './Item'

export abstract class DecorateItem extends Item {
    private item: Item

    constructor(item: Item) {
        super()
        this.item = item
    }

    public order(): void{
    }
}