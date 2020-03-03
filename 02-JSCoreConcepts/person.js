class Person{
        constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };

    nameAndSurname(){
        console.log(`${this.name} ${this.surname.toUpperCase()}`);
    };

    initials(){
        console.log(`${this.name[0].toUpperCase()}.${this.surname[0].toUpperCase()}.`);
    };
};

const person1 = new Person("Jan", "nowak");
const person2 = new Person("Jakub", "Kosk");

person1.nameAndSurname();
person1.initials();

person2.nameAndSurname();
person2.initials();