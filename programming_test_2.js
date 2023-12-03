
function displayEmployeeInfo(targetName) {
  const employees = [
    { name: 'Arm', position: 'Front End' },
    { name: 'Game', position: 'Back End' }
  ];
  const employee = employees.find(emp => emp.name === targetName);
  if (employee) {
    const { name, position } = employee;
    return `ชื่อ ${name} ตำแหน่ง ${position}`;
  } else {
    return `Employee with name ${targetName} not found.`;
  }
}

// Display employee information of 'Janny'
const infoOfJanny = displayEmployeeInfo('Janny');
console.log(infoOfJanny);

// Display employee information of 'Game'
const infoOfGame = displayEmployeeInfo( 'Game');
console.log(infoOfGame);


