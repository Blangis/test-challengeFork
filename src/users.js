// Imports small array of users
// Pretend it's an API request
const users = require("./data").default;

// Fetches all users
const getUsers = () => {
  return users;
};

// Filters users by specific ID
const getUsuario = (id) => {
  return users.find((user) => user.id === id);
};

//Fetch
/*
const getUser (id) {
  try {
    const respond= await fetch(users+id)

    const data = await respond.json();
    console.log(data);

  } catch (err) {
    console.error(err);
  }
}
*/


// Promise 

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    console.log(`Verificando id: ${id} de usuario`);
    setTimeout(() =>{
      const user= users.find((user) => user.id === id);;
      console.log(`Verificación id: ${id} de usuario terminada`);
      if(user){
      resolve(user);
    } else {
      reject(new Error("Usuario no encontrado"));
    }
  }, 2000);
});
};



// test
// console.log(getUser(3));

module.exports = { getUsers, getUser, getUsuario };

