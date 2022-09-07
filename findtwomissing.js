
	// Returns the sum of the array
	function getSum(arr, n)
	{
		let sum = 0;
		for (let i = 0; i < n; i++)
			sum += arr[i];
		return sum;
	}

	// Function to find two missing numbers in range [1, n]
	function findTwoMissingNumbers(arr, n)
	{
		// Sum of 2 Missing Numbers
		let sum = (n * (n + 1)) / 2 -
		getSum(arr, n - 2);

		//average of two elements
		let avg = (sum / 2);

		// sum of elements smaller
		// than average (avg) and sum of
		// elements greater than average (avg)
		let sumSmallerHalf = 0,
		sumGreaterHalf = 0;
		for (let i = 0; i < n - 2; i++)
		{
			if (arr[i] <= avg)
				sumSmallerHalf += arr[i];
			else
				sumGreaterHalf += arr[i];
		}

	

		let totalSmallerHalf = (avg * (avg + 1)) / 2;
		console.log((totalSmallerHalf - sumSmallerHalf));

		
		console.log(((n * (n + 1)) / 2 - totalSmallerHalf) -sumGreaterHalf);
	}
	
	let arr = [1, 3, 5, 6];
        //2 is missing numbers
	let n = 2 + arr.length;
	
	findTwoMissingNumbers(arr, n);

