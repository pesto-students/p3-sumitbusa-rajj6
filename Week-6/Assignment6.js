function print(ele) {
    console.log(ele);
}

let arr = [-1, 2, 1, -4, 5, 6];
let num = 1;

function sortArray(A) {
    for(let i = 0; i < A.length-1; i++) {
        for(let j=i+1; j < A.length; j++) {
            if(A[i] > A[j]) {
                [A[i], A[j]] = [A[j],A[i]]
            }
        }
    }
    return A;
}

function getClosestSum(A, num) {
    A = sortArray(arr);
    let closestSum = Infinity;
    for(let i = 0; i < A.length-3; i++) {
        let sum = 0;
        for(let j = i; j < i+3; j++) {
            sum += A[j]; 
        }
        if(Math.abs(sum - num) < Math.abs(closestSum - num)) {
            closestSum = sum;
        }
    }
    return closestSum;
}

print(getClosestSum(arr, 1));
