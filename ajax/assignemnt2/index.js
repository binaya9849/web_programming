async function createUser() {
  const user = {
    name: "Binaya maharjan",
    job: "Developer"
  };

  try {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Created user:", data);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}
createUser();
