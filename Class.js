export class Author{
    #name;
    #age;
    #rost;
    constructor(name,age,rost){
        this.name = name;
        this.age = age; 
        this.rost = rost; 
    }
    get name(){
        return this.#name;
    }
    set name(value){
        if(value.length!=undefined){
            this.#name=value;}    
    }
    get age(){
        return this.#age;
    }
    set age(value){
        const age1=parseInt(value);
        this.#age=age1;
    }
    get rost(){
        return this.#rost;
    }
    set rost(value){
        const rost1=parseInt(value);
        this.#rost=rost1;
    }
    print(){
        console.log("Имя:"+this.#name+'\n'+"Возраст:"+this.#age+'\n'+"Рост:"+this.#rost);
    }
    #vyros(){
        this.rost+=10;
    }
    grow(){
        this.#vyros();
    }
    delete() {
        this.#name = null;
        this.#age = null;
        this.#rost = null;
    }
    copy() {
        return this;
    }
    static clone(a) {
        return new Author(a.#name, a.#age, a.#rost);
    }
}