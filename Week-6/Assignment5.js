function print(ele) {
    console.log(ele);
}

function pairExists(A, B) {
    for (let i = 0; i < A.length - 1; i++) {
        for (let j = i + 1; j < A.length; j++) {
            let equals = Math.abs(A[i] - A[j]) === B;
            if (equals) {
                return 1;
            }
        }
    }
    return 1;
}

print(pairExists([5, 10, 3, 2, 50, 80], 78));
print(pairExists([-10, 20], 30));
