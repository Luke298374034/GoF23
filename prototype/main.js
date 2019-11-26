"use strict";
exports.__esModule = true;
var Sensor_1 = require("./Sensor");
// let prototype1: Prototype = new Prototype();
// prototype1.saySomething();
// let prototype2: Prototype = prototype1.clone(); //並不是透過new Create物件
// prototype2.saySomething();
// //兩個獨立Create 記憶體位置不同
// prototype1 == prototype2 ? console.log('Yes it\'s same!') : console.log('No it\'s different!');
var sensors = new Array(3);
sensors[0] = new Sensor_1.Sensor();
sensors[0].setID(1);
sensors[0].setName("Sensor第" + 1 + "版");
sensors[0].setNickname("我的空氣探測器");
sensors[0].setVersion("1.0.0");
sensors[0].setWifiID("MYSENSORWIFIID1.0.0");
sensors[0].setWifiPass("THISisWiFiPasssOuO");
sensors[0].setData("None");
console.log(sensors[0]);
for (var i = 1; i < sensors.length; i++) {
    try {
        sensors[i] = sensors[0].clone();
        sensors[i].setID(i + 1);
        sensors[i].setName("Sensor第" + Number(i + 1) + "版");
        console.log(sensors[i]);
    }
    catch (e) {
        console.log(e.stack);
    }
}
