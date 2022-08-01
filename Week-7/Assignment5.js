function nextLargerElementNew(arr, n) {
    if(arr.length == 1) {
        throw 'Bad Input';
    }
    let stack = [];
    let result = [];
    stack.push(arr[0]);
    for (let i = 1; i < n; i++) {
        let next = arr[i];
        if(stack.length != 0 ) {
            if(next > stack[stack.length -1] ) {
                let kk
                while(next > stack[stack.length -1]) {
                    kk = stack.pop();
                    if(kk < next) {
                        result.push(next);
                    } else {
                        result.push(-1);
                    }
                }
                stack.push(next);
            } else if(next < stack[stack.length -1]) {
                stack.push(next);
            }
        }
    }
    while (stack.length != 0) {
        result.push(-1);
        stack.pop();
    }
    console.log(result);
    return result;
}

nextLargerElement([11, 13,21,3], 4);
nextLargerElementNew([11, 13, 21,3], 4);
nextLargerElementNew([11, 13, 10 , 15], 4);
