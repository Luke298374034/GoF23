import { Factory } from "./Factory";

let factory = new Factory();

console.log(`request for ComboA`)
let a1 = factory.getComboA(`正常`)
a1.include()

console.log(`request for ComboA`)
let a2 = factory.getComboA(`飲料換綠茶`)
a2.include()

console.log(`request for ComboB`)
let b = factory.getComboB(`奶茶不加奶`)
b.include()

// factory pattern
// 核心概念為，不用先實作物件，可以等到要實作時再傳入參數
// 也就是所謂的依賴注入
// 我說做甚麼東西，你再做甚麼東西

// 在「Factory」類別中透過參數來取得「Combo」物件，建立「Combo」物件的責任在呼叫方法的類別

// 定義一個用於建立物件的介面，子類別決定實例化哪一個類別，工廠模式使一個類別的實例化延遲到其子類別。
// 通常設計是從工廠方法開始，再向其他模式演化。