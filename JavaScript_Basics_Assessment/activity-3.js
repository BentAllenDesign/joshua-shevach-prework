const studentNames = ['Josh', 'Jerry', 'Jordan'];

for (let i = 0; i < studentNames.length; i++) {
  console.log(studentNames);
}

for (let i = 0; i < 3; i++) {
  const name = prompt('enter a new name');
  studentNames.push(name);
}

console.log(studentNames);
