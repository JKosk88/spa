// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let fun = (a, b, c) => {
    let p = 0.5*(a+b+c);
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
};

console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${fun(a, b, c)}.`);