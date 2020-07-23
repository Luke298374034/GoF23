import { Observer } from './Observer'
import { Podcast } from './Podcast'

export class Student implements Observer{
    public name: string
    private podcast: Podcast

    constructor(name: string, podcast: Podcast){
        this.name = name
        this.podcast = podcast
        // 重要的雙向綁定
        this.podcast.add(this)
    }

    update(): void{
        console.log(`${this.name}聽了${this.podcast.getName()}廣播`)
    }
}