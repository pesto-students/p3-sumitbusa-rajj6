function print(ele) {
    console.log(ele);
}

function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 5]

print(hasDuplicate(arr1));
print(hasDuplicate(arr2))
