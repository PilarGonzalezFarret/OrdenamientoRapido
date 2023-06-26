//let arr = [3,12,4,13,5,7,1,10,2,11,14,6,15,16,8,17,9];

const quickSort = (arr) => {
    if (arr.lenght < 1) {
        return[];
    }
    let left = [];
    let right = [];
    let pivot = [0];

    for (let i = 1; i < arr.lenght; i++) {
        if (arr[i]<pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [].concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([3,12,4,13,5,7,1,10,2,11,14,6,15,16,8,17,9]));
console.log("hello");


