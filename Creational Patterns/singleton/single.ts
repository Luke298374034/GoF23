class Single {
    private static single: Single

    private constructor() {
    }

    public static getInstance() {
        return this.single || new Single()
    }

    public getInfo(): string {
        return 'i am unique'
    }
}

let s = Single.getInstance()
console.log(s.getInfo())

// 核心就是單一實例
// 所以會有 private static 直接讓它存在記憶體且為private