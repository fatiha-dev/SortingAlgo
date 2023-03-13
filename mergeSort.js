// if the array has one element we start merging,
// otherwise we slice into two until there is only one element.

const mergeSort = arr => {
   if (arr.length < 2) {
      return arr;
   }
   const middle = Math.floor(arr.length / 2);
   const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);

   return merge(mergeSort(left), mergeSort(right));
};

// we assume both subarrays are sorted, we compare the first index

const merge = (left, right) => {
   const res = [];
   while (left.length && right.length) {
      if (left[0] <= right[0]) {
         res.push(left.shift());
      } else {
         res.push(right.shift());
      };
   }

   while (left.length) {
      res.push(left.shift());
   };

   while (right.length){
      res.push(right.shift());
   };

   return res;
};

// testing

const array = [3, 12, 65, 1, 14, 87, 56, 95, 0];
console.log(mergeSort(array)); 
/* output : [
   0,  1,  3, 12, 14,
  56, 65, 87, 95
]
*/