import Drink from './Drink'
import {SugarType, IceType} from './Drink'

export default class Coffee extends Drink {
    coffeeType: CoffeeType

    constructor(sugar: SugarType, ice: IceType) {
        super(sugar, ice);
    }

    public setCoffeeType(coffeeType: CoffeeType) {
        this.coffeeType = coffeeType;
    }

    public getCoffeeType(): CoffeeType{
        return this.coffeeType;
    }
}

export enum CoffeeType {
    LATTE,MOCHA,WHITE,BLUE_MOUNTAIN,AMERICANO,ESPRESSO
}