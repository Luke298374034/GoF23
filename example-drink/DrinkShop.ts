import Drink from './Drink'
import {SugarType, IceType} from './Drink'
import Tea from './Tea'
import Coffee from './Coffee'

export default class DrinkShop {
    public order(drink: String, sugarType: SugarType ,iceType: IceType): Drink{
        drink = drink.toLowerCase();
        switch (drink){
            case "coffee":
                return new Coffee(sugarType, iceType);
            case "tea":
                return new Tea(sugarType, iceType);
            default:
                return null;
        }
    }

}