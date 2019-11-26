export default class Drink {
    sugar: SugarType
    ice: IceType

    constructor(sugar: SugarType, ice: IceType) {
        this.sugar = sugar;
        this.ice = ice;
    }

    public getSugar(): SugarType{
        return this.sugar;
    }

    public setSugar(sugar: SugarType) {
        this.sugar = sugar;
    }

    public getIce(): IceType{
        return this.ice;
    }

    public setIce(ice: IceType) {
        this.ice = ice;
    }
}

export enum SugarType {
    REGULAR,LESS,HALF,QUARTER,FREE
}

export enum IceType {
    REGULAR,EASY,FREE,HOT
}