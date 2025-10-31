const userItems = [
  { user_id: 3609, name: "John Doe", username: "johndoe", email: "john@metropolia.fi", role: "user", password: "password" },
  { user_id: 3610, name: "Jane Smith", username: "janesmith", email: "jane@metropolia.fi", role: "admin", password: "password123" },
];

const listAllUsers = () => userItems;

const findUserById = (id) => userItems.find((u) => u.user_id === id);

const addUser = (user) => {
  const newId = userItems.length + 3610;
  const newUser = { user_id: newId, ...user };
  userItems.push(newUser);
  return { user_id: newId };
};

export { listAllUsers, findUserById, addUser };
