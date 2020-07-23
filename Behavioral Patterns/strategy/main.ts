import Cooker from './Cooker'
import Fried from './Fried'
import Roast from './Roast'
import Boil from './Boil'

let c: Cooker = new Cooker()

c.setCookWay(new Fried())
c.doCook(`250`, `6`)
c.getCookName()

c.setCookWay(new Roast())
c.doCook(`400`, `3`)
c.getCookName()

c.setCookWay(new Boil())
c.doCook(`100`, `8`)
c.getCookName()

// strategy pattern
// 先選擇(實作)策略，再傳入策略的參數