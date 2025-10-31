const restaurantList = document.getElementById("restaurant-list");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const restaurantName = document.getElementById("restaurant-name");
const restaurantAddress = document.getElementById("restaurant-address");
const menuList = document.getElementById("menu-list");
const RESTAURANT_API_URL = "https://your-school-api/restaurant"; 
async function fetchRestaurants() {
  try {
    const response = await fetch(RESTAURANT_API_URL);
    if (!response.ok) throw new Error("Failed to fetch restaurants");
    const data = await response.json();
    displayRestaurants(data);
  } catch (error) {
    console.error(error);
    restaurantList.innerHTML = "<p>Error fetching restaurants.</p>";
  }
}
function displayRestaurants(restaurants) {
  restaurantList.innerHTML = "";
  restaurants.forEach(r => {
    const div = document.createElement("div");
    div.textContent = r.name;
    div.addEventListener("click", () => showRestaurantDetails(r.id));
    restaurantList.appendChild(div);
  });
}
async function showRestaurantDetails(id) {
  try {
    const response = await fetch(`${RESTAURANT_API_URL}/${id}/menu/today`);
    if (!response.ok) throw new Error("Failed to fetch menu");
    const data = await response.json();
    restaurantName.textContent = data.restaurant.name;
    restaurantAddress.textContent = data.restaurant.address;
    menuList.innerHTML = "";
    data.menu.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price}€`;
      menuList.appendChild(li);
    });

    modal.style.display = "flex";
  } catch (error) {
    console.error(error);
    alert("Error fetching restaurant details.");
  }
}
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
fetchRestaurants();
