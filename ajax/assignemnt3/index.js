async function fetchWithErrorHandling(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response data:", data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
fetchWithErrorHandling("https://reqres.in/api/unknown/23");
fetchWithErrorHandling("https://reqres.in/api/unknown/23", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Test", job: "Dev" })
});
fetchWithErrorHandling("https://reqres.in/api/unknown/23", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Test", job: "Dev" })
});
fetchWithErrorHandling("https://reqres.in/api/unknown/23", {
  method: "DELETE"
});
