import * as Sub from './Sub'

export class Facade {
    private one: Sub.SubClassOne ;
    private two: Sub.SubClassTwo ;
    private three: Sub.SubClassThree ;
    private four: Sub.SubClassFour ;
    
    public constructor(){
        this.one = new Sub.SubClassOne();
        this.two = new Sub.SubClassTwo();
        this.three = new Sub.SubClassThree();
        this.four = new Sub.SubClassFour();
    }

    public MethodA(){
        this.four.MethodFour();
        this.one.MethodOne();
    }

    public MethodB(){
        this.two.MethodTwo();
        this.three.MethodThree();
    }
}