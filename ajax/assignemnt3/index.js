async function fetchWithErrorHandling(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response data:", data);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/users/1");
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Test", job: "Dev" })
});
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Test Updated", job: "Developer" })
});
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE"
});
