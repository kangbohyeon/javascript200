function callRoll(student) {
  if (!Array.isArray(student)) return;

  student.forEach((student) => {
    console.log(`Are you here, ${student}`);
  });
}

const student = ["Jun", "Ali", "Murry", "Toby"];
callRoll(student);
