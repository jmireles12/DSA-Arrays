const Array = require('./DSA-Arrays')

function main() {
    Array.SIZE_RATIO = 3;
    // create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
}

console.log(main())
