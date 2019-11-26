export abstract class Game{
    abstract initialize():void;
    abstract startPlay():void;
    abstract endPlay():void;
    
    play():void{      //流程在這裡哦   
        this.initialize();
        this.startPlay();
        this.endPlay();
    }
}