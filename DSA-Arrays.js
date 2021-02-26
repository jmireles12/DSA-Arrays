const Memory = require('./memory');
const memory = new Memory;

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if(this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size)
        if(this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if(this.length == 0) {
            throw new Error('Index error')
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        if(this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    removing(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

function main() {
    Array.SIZE_RATIO = 3;

    let arr = new Array();

    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr)

    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.push("tauhida");

    console.log(arr)
}

function urlify(url) {
    let newUrl = url.split(' ')
    let best = newUrl.join('%20')
    console.log(best)
}

function filterNum(arr) {
    let filtered = []
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > 5) {
            filtered.push(i);
            
        }
    }
    console.log(filtered)
}

function maxSum(nums) {
    let arr = [];
    let maxValue = nums[0];
    arr[0] = nums[0];
    for(let i = 1; i < nums.length; i++) {
        arr[i] = Math.max(nums[i],nums[i] + arr[i-1]);
        maxValue = Math.max(maxValue, arr[i]);
    }
    console.log(maxValue)
}

/* maxSum([4, 6, -3, 5, -2, 1]) */

function Merge(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    console.log(newArr.sort((a, b) => a - b))
}

/* Merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]) */

function removeChar(str) {
    let newStr = ''
    for(let i = 0; i < str.length; i++) {

        if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u') {
            newStr += str[i]
        }
    }
    console.log(newStr)
}

/* removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou') */

function products(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let product = 1
        for(let j = 0; j < arr.length; j++) {
            if(i !== j) product *= arr[j]
        }
        result.push(product)
    }
    return result
}

/* console.log(products([1, 3, 9, 4])) */

function zeroRowsColumns(mat) {
    const zeroRow = [];
    const zeroColumns = [];

    for(let i = 0; i < mat.length; i++) {
        let row = mat[i];
        for(let j = 0; j < row.length; j++) {
            const item = row[j]
            if(item === 0) {
                zeroRow[i] = true;
                zeroColumns[i] = true;
            }
        }
    }

    for(let i = 0; i < mat.length; i++) {
        let row = mat[i];
        for(let j = 0; j < row.length; j++) {
            if(zeroRow[i] || zeroColumns[j]) {
                row[j] = 0;
            }
        }
    }

    return mat;
}

/* console.log(zeroRowsColumns([
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]])) */

function rotation(str1, str2) {
    return (str2 + str2).indexOf(str1) != -1;
}

/* console.log(rotation('amazon', 'azonam')) */