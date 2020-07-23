import { PM } from './PM'
import { Programmer } from './Programmer'
import { Boss } from './Boss'

export class main {
    main(): void {
        // 無名的Boss
        let boss = new Boss();

        // 各個員工
        let wei = new PM("小偉");
        let bad = new Programmer("小惡");
        let good = new Programmer("阿仁");

        // 把員工加入Boss下面管理
        boss.addMember(wei);
        boss.addMember(bad);
        boss.addMember(good);

        // Boss介紹新來的小惡
        boss.introduce(bad);

        // 阿仁自己工作
        good.work();

        // boss請大家專心工作
        boss.workHard();

        // 小惡自己做不來
        // PM請老闆幫忙
        wei.bossHelp(bad);
    }
}

let doing = new main()
doing.main()

// 除了與facade差異在雙向以及單向溝通外，另外是facade有隱藏子元件細節的目的，
// 可能是針對系統外部使用者等等隱藏細節的操作，mediator著重的點是在於讓溝通的行為管單單一
