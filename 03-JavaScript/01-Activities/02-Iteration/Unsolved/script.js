// TODO: Write Your JavaScript Code Here

/*


* It is done when the names of five classmates are stored in a single variable named `students`.

* It is done when the total number of elements in the `students` array is logged to the console.

* It is done when, using a `for` loop, the greeting "Great to see you, CLASSMATE_NAME!" logs to the console for each classmate's name in the `students` array.


*/


var students = ["david", "mohammed", "kenneth", "kamyar", "souhila"];

console.log(students.length)

for (var i = 0; i < students.length; i = i + 1) {
  console.log("Great to see you," + students[i] + "!")
}