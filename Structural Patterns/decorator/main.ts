import { Item } from './Item'
import { Drink, Soup, Cake } from './ConcreteDecorateItem'
import { Combo } from './Combo'

let item = new Item()
let item1 = new Drink(item)
let item2 = new Soup(item1)
let item3 = new Cake(item2)

item.order()
item1.order()
item2.order()
item3.order()

console.log(`\n或是把這些裝飾變成一個Set 直接新增\n`)
let combo = new Combo()
combo.orderCombo()

// 其主要概念為 "剝洋蔥" 的概念
// 也就是你裝飾者愛怎麼包就怎麼包 順序互換也沒有關係
// 此方法最大好處是解耦合

// 例子 : Java的inputstream 和 bufferedinputstream
