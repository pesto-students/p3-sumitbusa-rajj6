function print(ele) {
    console.log(ele);
}

let arr = [7,1,5,3,6,4];

function getMaxProfit(arr) {
    let maxProfite = 0;
    for(let i=0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            let profite = arr[i] - arr[j];
            maxProfite = maxProfite < profite ? profite : maxProfite;
        }
    }
    print(maxProfite);
    return maxProfite;
}

getMaxProfit(arr);
