async function createUser() {
  const user = {
    name: "Binaya Maharjan",
    job: "Developer"
  };
  const output = document.getElementById("output");
  try {
    console.log("Sending POST request...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    console.log("Status:", response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Created user:", data);
    output.innerHTML = `
      <h3>User Created Successfully ✅</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Job:</strong> ${data.job}</p>
      <p><strong>ID:</strong> ${data.id}</p>
    `;
  } catch (error) {
    console.warn("Server rejected the request:", error.message);
    output.innerHTML = `
      <h3 style="color:red;"> Failed to create user</h3>
      <p>${error.message}</p>
    `;
  }
}
createUser();
