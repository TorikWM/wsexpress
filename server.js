const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

let users = [
  {
    id: 1,
    username: "Malek",
    age: 21,
  },
  {
    id: 1,
    username: "Malek",
    age: 21,
  },
];

// add new uesers
app.post("/addUsers", (req, res) => {
  const { username, age } = req.body;
  const id = uuidv4();
  users.push({ id, username, age });
  res.send(users);
});
// delete user
// method delete
app.delete("/removeUsers/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send({ msg: "user has been deleted", users });
});

// get all users
// method get
app.get("/allUsers", (req, res) => {
  res.send(users);
});
// update user
// method put
app.put('/updateUsers/:id', (req, res) => {
    const { id } = req.params;
    users = users.map(user => user.id == id ? { ...user, ...req.body } : user)
    res.send({ msg: "user has been updated", users });
})



const port = 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
