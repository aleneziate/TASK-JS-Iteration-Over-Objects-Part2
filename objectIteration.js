const students = [
  {
    id: 1,
    name: "Alice",
    courses: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Bob",
    courses: ["History", "English", "Math", "Art"],
  },
  {
    id: 3,
    name: "Charlie",
    courses: ["Science", "English", "Music"],
  },
  {
    id: 4,
    name: "David",
    courses: ["Math", "History", "Art", "PE"],
  },
  {
    id: 5,
    name: "Eva",
    courses: ["Science", "Math", "Music"],
  },
  {
    id: 6,
    name: "Frank",
    courses: ["English", "Art"],
  },
  {
    id: 7,
    name: "Grace",
    courses: ["Math", "Science", "English", "Music"],
  },
  {
    id: 8,
    name: "Helen",
    courses: ["History", "Art", "PE"],
  },
  {
    id: 9,
    name: "Ivy",
    courses: ["Science", "English", "Art"],
  },
  {
    id: 10,
    name: "Jack",
    courses: ["Math", "History", "Music"],
  },
];

// 1) Write a `getStudentName` function that accepts an argument of `student` object, return the student name
function getStudentName(student) {
  // write your code here...
  return student.name;
}
// console.log(getStudentName(students[0]))

// 2) Write a `getCourse` function that accepts a `student` object and `courseIndex` return the course at the specified course index in the student's courses array
function getCourse(student, courseIndex) {
  // write your code here...
  return student.courses[courseIndex];
}
gi
// console.log(getCourse(students[4], 2)); // Outputs: Music

// 3) Write a `addCourseToStudent` function that accepts a `student` object and `course` string,
// it will add the course to the student's courses array and return the `student` object
function addCourseToStudent(student, course) {
  // write your code here...
   student.courses.push(course);
  return student;
  
}
// console.log(addCourseToStudent(students[7], "Physics"));

// 4) Write a `countCourses` function that accepts a `student` object
// then returns the number of courses the student is enrolled in
function countCourses(student) {
  // write your code here...
  return student.courses.length;
}
// console.log(countCourses(students[1])); // Outputs: 4

// 5) Write a `removeCourseFromStudent` function that accepts a `student` object and `course` string,
// removes the `course` from the student's courses array,
// then returns the `student` object.
function removeCourseFromStudent(student, course) {
  // write your code here...
    student.courses = student.courses.filter(c => c !== course);
  return student;

}
// console.log(removeCourseFromStudent(students[6], "Science"));

// 6) Write a `findStudentById` function that accepts a `studentId` and an array of student objects `students`
// and returns the student object with the matching id.
// It should return undefinded if a student is not found
function findStudentById(students, studentId) {
    return students.find(student => student.id === studentId);

  // write your code here...
}
// console.log(findStudentById(students, 10));

// 🌶️🌶️
// 7) Write a `getStudentsByCourse` function that accepts a `course` string and an array of student objects `students`,
// then returns an array of student objects who are enrolled in the specified course
function getStudentsByCourse(students, course) {
    return students.filter(student => student.courses.includes(course));

  // write your code here...
}
// console.log(getStudentsByCourse(students, "Music"));

// 🌶️🌶️🌶️
// 8) Write a `listAllCourses` function that accepts an array of `students`
// then returns an array of all unique courses names across all students
function listAllCourses(students) {
   const allCourses = new Set();
  students.forEach(student => {
    student.courses.forEach(course => {
      allCourses.add(course);
    });
  });
  return Array.from(allCourses);
  // write your code here...
}
// console.log(listAllCourses(students));

module.exports = {
  getStudentName,
  getCourse,
  addCourseToStudent,
  countCourses,
  listAllCourses,
  removeCourseFromStudent,
  findStudentById,
  getStudentsByCourse,
};
