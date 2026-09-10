//create a promise that will display user name and password
//using resolve and if data will be rejected its display error

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let err = false;
//         if (!err) {
//             resolve("user:Medhawin, password:1234");
//         } else {
//             reject("error: data not found");
//         }
//     }, 2000);
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error(error);
// });

//async /await
// console.log("start, this is async/await");

// async function test() {
//     console.log("1");
//     await console.log("2");
//     console.log("3");
//     console.log("4");
// }
// test();
// console.log("6");

const studentData = [
  {
    id: 101,
    name: "Aarav Sharma",
    age: 20,
    grade: "Junior",
    major: "Computer Science",
    gpa: 3.8,
    email: "aarav.sharma@example.com",
  },
  {
    id: 102,
    name: "Sophia Chen",
    age: 19,
    grade: "Sophomore",
    major: "Data Science",
    gpa: 3.9,
    email: "sophia.chen@example.com",
  },
  {
    id: 103,
    name: "Liam Johnson",
    age: 21,
    grade: "Senior",
    major: "Mechanical Engineering",
    gpa: 3.5,
    email: "liam.johnson@example.com",
  },
  {
    id: 104,
    name: "Priya Patel",
    age: 18,
    grade: "Freshman",
    major: "Biotechnology",
    gpa: 3.7,
    email: "priya.patel@example.com",
  },
  {
    id: 105,
    name: "Mateo Rossi",
    age: 22,
    grade: "Senior",
    major: "Economics",
    gpa: 3.4,
    email: "mateo.rossi@example.com",
  },
  {
    id: 106,
    name: "Maya Lin",
    age: 20,
    grade: "Junior",
    major: "Electrical Engineering",
    gpa: 3.95,
    email: "maya.lin@example.com",
  },
  {
    id: 107,
    name: "Noah Kim",
    age: 19,
    grade: "Sophomore",
    major: "Business Administration",
    gpa: 3.6,
    email: "noah.kim@example.com",
  },
  {
    id: 108,
    name: "Ananya Gupta",
    age: 21,
    grade: "Senior",
    major: "Physics",
    gpa: 3.85,
    email: "ananya.gupta@example.com",
  },
  {
    id: 109,
    name: "Lucas Silva",
    age: 18,
    grade: "Freshman",
    major: "Graphic Design",
    gpa: 3.3,
    email: "lucas.silva@example.com",
  },
  {
    id: 110,
    name: "Olivia Taylor",
    age: 20,
    grade: "Junior",
    major: "Psychology",
    gpa: 3.75,
    email: "olivia.taylor@example.com",
  },
];

async function fetchAndLogStudents() {
  try {
    // Create a data URI from the inline JSON string
    const jsonString = JSON.stringify(studentData);
    const dataUrl = `data:application/json,${encodeURIComponent(jsonString)}`;

    // Fetch and parse using async/await
    const response = await fetch(dataUrl);
    const students = await response.json();

    // Print formatted array to console
    console.log("Fetched Students Data:", students);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

fetchAndLogStudents();
