# SortingAlgo
Sorting algorithms
 
<h3> Merge Sort </h3>

Merge sort will divides an array into two halves as evenly as possible and keep doing that until it becomes a single element. Then, it’ll merge the two halves and sort them at the same time until we reach only a single array.
<br>
The easiest implementation is using recursion functions. Here are the steps we’ll need to take to sort the array.

1- Check if the incoming array has a length of one — if it does, we return the element and have to start merging.
<br>
2- Otherwise, we keep on dividing the array in half until it matches the condition from Step 1.
<br>
3- When combining, we have two arrays: the left or the right array. We always assume both arrays are already sorted so we can just compare the beginning index of each array and add the smallest number.

<h3> Insertion Sort </h3>
Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time by comparisons. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
<br>
Recursive Aproach to insertion sort algorithm 

1. Starting from the second element, traverse through the input array from left to right.
 <br>
For each element, compare it with the elements in the sorted subarray to its left, starting from the rightmost element.
 <br>
2. If an element in the sorted subarray is greater than the current element, shift that element one position to the right.
 <br>
3. Repeat step 3 until you find an element that is less than or equal to the current element.
 <br>
4. Insert the current element into the position immediately to the right of the element found in step 4.
 <br>
5. Repeat steps 2-5 for all remaining elements in the unsorted subarray.
<br>
Time Complexity: O(N^2) 
Auxiliary Space: O(1)

