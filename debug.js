// analytics.js

const users = [
  { id: 1, name: "A", age: 20 },
  { id: 2, name: "B", age: 30 },
  { id: 3, name: "C", age: 40 }
];

function calculateAverageAge(userList) {
  let total = 0;

  for (let i = 0; i < userList.length; i++) {
    total += Number(userList[i].age);
  }

  return total / userList.length;
}

function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...users]);
    }, 1000);
  });
}

async function processUsers() {
  const data =  await fetchUsers();

  data.forEach((user, index) => {
    setTimeout(() => {
      console.log(index, user.name);
    }, 500);
  });

  const avgAge = calculateAverageAge(data);
  console.log("Average Age:", avgAge);

  data.push({ id: 4, name: "D", age: 25 });
}

processUsers();
