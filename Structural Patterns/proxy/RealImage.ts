import { Image } from './Image'

export class RealImage implements Image {
    private fileName: String;

    constructor(fileName: String){
        this.fileName = fileName;
        this.loadFromDisk(fileName);
    }

    public display(): void {
        console.log(`Displaying ` + this.fileName);
    }

    private loadFromDisk(fileName: String): void {
        console.log(`Loading ` + fileName);
    }
 }