function sortByFrequency(arr) {
    // Count the frequency of each number
    const frequencyMap = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  
    // Sort by frequency and then by value
    console.log(frequencyMap)
    const sorted = arr.sort((a, b) => {
      if (frequencyMap[a] === frequencyMap[b]) {
          return a - b;
      }
  
      return frequencyMap[a] + frequencyMap[b];
    });
  
    return sorted;
  }
  // Test case
  const inputArray = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];
  const sortedArray = sortByFrequency(inputArray);
  console.log(sortedArray);
  