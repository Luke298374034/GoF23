import { Sensor } from './Sensor'

let sensors = new Array(3);
sensors[0] = new Sensor();
sensors[0].setID(1);
sensors[0].setName("Sensor第" + 1 + "版");
sensors[0].setNickname("我的空氣探測器");
sensors[0].setVersion("1.0.0");
sensors[0].setWifiID("MYSENSORWIFIID1.0.0");
sensors[0].setWifiPass("THISisWiFiPasssOuO");
sensors[0].setData("None");

console.log(sensors[0])

for(let i = 1 ; i < sensors.length ; i ++){
    try {
        sensors[i] = sensors[0].clone();
        sensors[i].setID(i+1);
        sensors[i].setName("Sensor第" + Number(i+1) + "版");
        console.log(sensors[i])
    } catch (e) {
        console.log(e.stack);
    }
}

// 由以上範例可以證明，Prototype為指向不同物件，也就是達到我們要求的完整複製了一Prototype物件，不用重新建構一物件耗費資源，這也就是Prototype Pattern所期待的。
// 也就是說 如果是用new重新constructor物件的話 會消耗更多的資源 所以直接複製是比較好的做法