import { Author } from './Class.js';
export class FamousAuthor extends Author{
    #booksCount;
    constructor(name,age,rost,booksCount){
        super(name,age,rost);
        this.booksCount = booksCount;
    }
    get booksCount(){
        return this.#booksCount;
    }
    set booksCount(value){
        const count=parseInt(value);
        this.#booksCount=count;
    }
    print(){
        super.print();
        console.log("Количество произведений:"+this.#booksCount);
    }
    delete() {
        this.#booksCount = null;
        super.delete();
    }
    copy() {
        return new FamousAuthor(this.name, this.age, this.rost, this.#booksCount);
    }
    static clone(a) {
        return new FamousAuthor(a.name, a.age, a.rost, a.#booksCount);
    }
}