// // Add your code here

// const configurationObject = {
//   method: "POST",
//   headers: {
//     // include information about the data we're sending and accepting.
//     "Content-Type": "application/json", //is used to indicate what format the data being #sent is in.
//     Accept: "application/json", // tell the server what data format we accept in return (#response).
//   },
//   /* Your data goes here, the body of our request needs to be a string */
//   body: JSON.stringify({
//     // a built-in method for converting objects to strings.
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// };
// fetch("http://localhost:3000/dogs", configurationObject)
//  .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });
// const data = {
//   name: "Steve",
//   email: "steve@steve.com",
// };

function submitData(name, email) {
  const configurationObjectlab = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "Steve",
      email: "steve@steve.com"
    }),
  };

  return fetch("http://localhost:3000/users", configurationObjectlab)
  .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        const id = object.id;
        document.body.innerHTML = `<p>New user ID: ${id}</p>`;
        console.log(id);
      })
      .catch(function (error) {
        alert("Unauthorized Access");
        document.body.innerHTML = `<p>Error: ${error.message}</p>`;
        console.log(error.message);
      });
}
