function print(ele) {
    console.log(ele);
}
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let m = 3, n = 3;

SpiralPrint(m, n, mat);

function SpiralPrint(rowCount, columnCount, matrix) {
    let curRow = 0;
    let curCol = 0;

    while (curRow < rowCount && curCol < columnCount) {
        for (let i = curCol; i < columnCount; i++) {
            print(matrix[curRow][i]);
        }
        curRow++;

        for (let i = curRow; i < rowCount; i++) {
            print(matrix[i][columnCount - curCol - 1]);
        }
        columnCount--;

        for (let i = columnCount - 1; i >= curCol; i--) {
            print(matrix[rowCount - curRow][i]);
        }
        rowCount--;

        for (let i = rowCount - 1; i >= curRow; i--) {
            print(matrix[i][curCol]);
        }
        curCol++;
    }
}
