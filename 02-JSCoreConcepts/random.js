array = [];

let random = (arr) => {
    for (i = 0; i < 10; i++){
        arr.push(Math.floor(Math.random() * 16) + 5);
    };
};

random(array);

let show = (arr) => {
    for (i = 0; i < 10; i++){
        console.log(arr[i]);
    };
};

show(array);
