class Person {

    public count:number=0
    constructor() {
        
    }
    add(){
        this.count++
        console.log(this.count);
        
    }

}
const people=new Person()
people.add()
people.add()
people.add()