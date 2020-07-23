import Drink from './Drink'
import {SugarType, IceType} from './Drink'

export default class Tea extends Drink {
    teaType: TeaType

    constructor(sugar: SugarType, ice: IceType) {
        super(sugar, ice);
    }

    public setTeaType(teaType: TeaType) {
        this.teaType = teaType;
    }

    public getTeaType(): TeaType{
        return this.teaType;
    }
}

export enum TeaType {
    LEMON,OOLONG,GINGER,HONEY
}