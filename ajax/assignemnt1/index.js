async function getUser() {
  console.log("Fetching user...");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    console.log("Status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("User data:", data);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

getUser();
