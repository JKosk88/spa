title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

country = country.toUppeCase()

console.log(`${title} ${name} ${surname}\n
    ul. ${street}\n
    ${zip} ${city}\n
    ${country}`);
    
console.log(title + " " + name + " " + surname +"\n" +
    "ul. " + street + "\n" +
    zip + city + "\n" +
    country);
/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
