import { SugarType, IceType } from './Drink'
import { TeaType } from './Tea'
import { CoffeeType } from './Coffee'
import DrinkShop from './DrinkShop'
import Tea from './Tea'
import Coffee from './Coffee'

let drinkShop = new DrinkShop();

//點一杯烏龍茶
let tea = <Tea>(drinkShop.order("tea", SugarType.FREE, IceType.EASY));
tea.setTeaType(TeaType.OOLONG);
console.log(tea.getTeaType() + `-` + tea.getIce() + `-` + tea.getSugar())

//點一杯美式
let coffee = <Coffee>(drinkShop.order("coffee", SugarType.QUARTER, IceType.HOT));
coffee.setCoffeeType(CoffeeType.AMERICANO);
console.log(coffee.getCoffeeType() + `-` + coffee.getIce() + `-` + coffee.getSugar())

// 用轉型去做 這樣設計是不好的!?