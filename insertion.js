function insertionSort(initialArray, arrayLength) {
    let i, j, pivot;

    for(i=1; i  < arrayLength; i++) {
        pivot = initialArray[i];
        j = i - 1;
        while (j >= 0 && initialArray[j] > pivot) {
            initialArray[j + 1] = initialArray[j];
            j = j - 1;
        }
        initialArray[ j + 1 ] = pivot;
    }

    return initialArray;
}

let initialArray = [23, 7, 12, 5, 7];
let ArraySorted = insertionSort(initialArray, initialArray.length);
console.log(ArraySorted);