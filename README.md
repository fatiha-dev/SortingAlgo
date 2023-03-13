# SortingAlgo
Sorting algorithms
 
<h3> Merge Sort </h3>

Merge sort will divides an array into two halves as evenly as possible and keep doing that until it becomes a single element. Then, it’ll merge the two halves and sort them at the same time until we reach only a single array.
The easiest implementation is using recursion functions. Here are the steps we’ll need to take to sort the array.

1- Check if the incoming array has a length of one — if it does, we return the element and have to start merging.
2- Otherwise, we keep on dividing the array in half until it matches the condition from Step 1.
3- When combining, we have two arrays: the left or the right array. We always assume both arrays are already sorted so we can just compare the beginning index of each array and add the smallest number.
