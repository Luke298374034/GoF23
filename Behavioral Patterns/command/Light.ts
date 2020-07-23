export class Light {
    //Receiver可以是任何的類
    public turnOn(): void{
        console.log("開燈");
    }

    public turnOff(): void{
        console.log("關燈");
    }
}