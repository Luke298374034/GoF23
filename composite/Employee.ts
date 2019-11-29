export class Employee {
    private name: String;
    private dept: String;
    private salary: number;
    private subordinates: Array<Employee>;

    constructor(name: String,dept: String, sal: number) {
        this.name = name;
        this.dept = dept;
        this.salary = sal;
        this.subordinates = new Array<Employee>();
    }

    public add(e: Employee): void {
        this.subordinates.push(e);
    }

    public remove(e: Employee): void {
        this.subordinates.forEach( (item, index) => {
            if(item === e) this.subordinates.splice(index,1);
        });
    }

    public getSubordinates(): Array<Employee> {
        return this.subordinates;
    }

    public toString(): String{
        return ("Employee :[ Name : " + this.name + ", dept : " + this.dept + ", salary :" + this.salary+" ]");
    }
}