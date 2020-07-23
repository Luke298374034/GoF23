import { Employee } from './Employee'

let CEO = new Employee("John","CEO", 30000);
let headSales = new Employee("Robert","Head Sales", 20000);
let headMarketing = new Employee("Michel","Head Marketing", 20000);
let clerk1 = new Employee("Laura","Marketing", 10000);
let clerk2 = new Employee("Bob","Marketing", 10000);
let salesExecutive1 = new Employee("Richard","Sales", 10000);
let salesExecutive2 = new Employee("Rob","Sales", 10000);

CEO.add(headSales);
CEO.add(headMarketing);

headSales.add(salesExecutive1);
headSales.add(salesExecutive2);

headMarketing.add(clerk1);
headMarketing.add(clerk2);

//print all employees of the organization
console.log(CEO.toString()); 
CEO.getSubordinates().forEach((headEmployee) => {
    console.log(headEmployee.toString());
    headEmployee.getSubordinates().forEach((employee) => {
        console.log(employee.toString());
    })
})

// 使用場景和狀況
// 組織中某些部位、功能可能包含部分或著整體時。
// 使用者對整體或是單一物件可以使用同樣的function進行操作。
// 在組合模式中所有的物件都是整體的一部分，而整體是物件的集合。