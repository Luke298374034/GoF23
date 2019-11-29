import {Person} from './Person';

let person:Person = new Person();

person.getState();
person.chat(); 

person.getState();
person.login(); 

person.getState();
person.chat();

person.getState();
person.login();

person.getState();
person.logout();

// 1.將每個狀態的行為定義在自己的類別裡。
// 2.將容易產生問題的 if 敘述拿掉，以方便日後維護。
// 3.讓每個狀態「對修改關閉」。讓糖果機「對擴充開放」，因為容易加入新的狀態。
// 4.較舊程式碼更容易閱讀理解。