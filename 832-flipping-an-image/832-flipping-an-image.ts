function flipAndInvertImage(image: number[][]): number[][] {
let result = [];
    for(let i=0; i<image.length ;i++) {
        let arr = image[i].reverse();
        for(let j=0; j<arr.length ;j++){
            arr[j] = arr[j] ? 0 : 1;
        }
        result.push(arr);
    }
    return result;
};