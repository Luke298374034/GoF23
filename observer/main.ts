import { Podcast } from './Podcast'
import { Student } from './Student'

let podcast = new Podcast('ICRT')
let podcast2 = new Podcast('CNN')

let sam = new Student('Sam', podcast2)
let anne = new Student('Anne', podcast)
let hung = new Student('Hung', podcast2)

sam.update()
anne.update()
hung.update()

console.log(`或是從廣播通知`)

podcast2.remove(sam)
podcast2.notifyObservers()

// 常見的監聽的手法!
// ★★★★★當被監聽者改變的時候要通知(廣播)監聽者
// ★★★☆☆或是被監聽者控制誰可以監聽
// 也就是兩者做合成