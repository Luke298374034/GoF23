import { Item } from './Item'
import { Drink, Soup, Cake } from './ConcreteDecorateItem'

export class Combo extends Item {
    public orderCombo(): void{
        this.addItem()
    }

    public addItem(): void{
        let item = new Item()
        let item1 = new Drink(item)
        let item2 = new Soup(item1)
        let item3 = new Cake(item2)

        item.order()
        item1.order()
        item2.order()
        item3.order()
    }
}