names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        let arr = [];
        names.forEach(element => {
            if (element[0] === letter){
                arr.push(element);
            }
        });

        return arr;
    }

    sorted() {
        this.names = this.names.sort(); 
        return this.names;
    }

    get() {
        return this.names;
    }

    getFirst(n) {
        return this.names.slice(0,n); 
    }
}

students = new Students(names);
// console.log(students.get());
// console.log(students.sort());
// console.log(students.startWith('P'));
// console.log(students.startWith('M').sort());
console.log(students.sorted());
console.log(students.getFirst(4));
// console.log(students.startWith('M').sort().getFirst(2));
// console.log(students.get());



