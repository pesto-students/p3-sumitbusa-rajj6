function print(ele) {
    console.log(ele);
}

function sortSpecialArray(arr) {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;
    while (mid <= high) {
        switch (arr[mid]) {
            case 0:
                [arr[low], arr[mid]] = [arr[mid], arr[low]];
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [arr[high], arr[mid]] = [arr[mid], arr[high]];
                high--;
                break;
            default:
                return;
        }
    }
}
sortSpecialArray([0, 1, 1, 0, 2, 2, 1,]);
