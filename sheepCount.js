//From Google Code Jam 2016 Qualification Round

/* Bleatrix Trotter the sheep, has devised a strategy that helps her fall asleep faster. 
First, she picks a number N. Then she starts naming N, 2 × N, 3 × N, and so on. 
Whenever she names a number, she thinks about all of the digits in that number. 
She keeps track of which digits (0, 1, 2, 3, 4, 5, 6, 7, 8, and 9) she has seen 
at least once so far as part of any number she has named. Once she has seen each of the ten digits 
at least once, she will fall asleep.

Bleatrix must start with N and must always name (i + 1) × N directly after i × N. 
For example, suppose that Bleatrix picks N = 1692. She would count as follows:

N = 1692. Now she has seen the digits 1, 2, 6, and 9.
2N = 3384. Now she has seen the digits 1, 2, 3, 4, 6, 8, and 9.
3N = 5076. Now she has seen all ten digits, and falls asleep.

Given the number N write a function that returns the last number 
that she will name before falling asleep.

If she will count forever, print INSOMNIA instead.

If N = 0, since 2 × 0 = 0, 3 × 0 = 0, and so on, Bleatrix will never see any digit other than 0, 
and so she will count forever and never fall asleep. Poor sheep!
console.log(sheepCount(0)) //INSOMNIA

If N = 1, Bleatrix will name 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. The 0 will be the last digit needed, 
and so she will fall asleep after 10.
console.log(sheepCount(1)) //10

If N = 2, Bleatrix will name 2, 4, 6... and so on. She will not see the digit 9 in any number until 90, 
at which point she will fall asleep. By that point, she will have already seen the 
digits 0, 1, 2, 3, 4, 5, 6, 7, and 8, which will have appeared for the first time in the 
numbers 10, 10, 2, 30, 4, 50, 6, 70, and 8, respectively.
console.log(sheepCount(2)) //90

If N = 11, Bleatrix will name 11, 22, 33, 44, 55, 66, 77, 88, 99, 110 and then fall asleep.
console.log(sheepCount(11)) //110
*/

function sheepCount(N) {
	//your code
}