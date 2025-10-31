async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
(async () => {
  const user = {
    name: "Binaya Maharjan",
    job: "Developer"
  };
  const url = "https://reqres.in/api/users";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  };
  try {
    const userData = await fetchData(url, options);
    console.log("User created:", userData);
  } catch (error) {
    console.error("Error creating user:", error);
  }
})();
