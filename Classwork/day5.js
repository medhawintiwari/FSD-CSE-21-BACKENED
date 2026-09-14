async function getStudents() {
  try {
    const response = await fetch("./student.json");

    if (!response.ok) {
      throw new Error("Failed to load student.json");
    }

    const data = await response.json();

    console.log(data);

    data.students.forEach((student) => {
      console.log(
        `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`
      );
    });

  } catch (error) {
    console.error("Error:", error.message);
  }
}

getStudents();