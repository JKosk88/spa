const reverse = function(arr) {
    return arr.reverse();
}

const sort = function(arr) {
    return arr.sort();
}

const even = function(arr) {
    let arrEven = [];
    arr.map(item => item % 2 == 0 ? arrEven.push(item): null);
    return arrEven;
}

numbers = [8,3,2,1,5,4,6];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
