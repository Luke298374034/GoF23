import { Image } from './Image'
import { RealImage } from './RealImage'

export class ProxyImage implements Image{
    private realImage: RealImage;
    private fileName: String;

    constructor(fileName: String){
        this.fileName = fileName;
    }

    public display(): void{
        if(this.realImage == null){
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
 }