const catItems = [
  { cat_id: 1, cat_name: "Whiskers", weight: 5, owner: 3609, birthdate: "2021-01-01" },
  { cat_id: 2, cat_name: "Mittens", weight: 8, owner: 3610, birthdate: "2020-06-12" },
];

const listAllCats = () => catItems;

const findCatById = (id) => catItems.find((c) => c.cat_id === id);

const addCat = (cat) => {
  const newId = catItems.length + 1;
  const newCat = { cat_id: newId, ...cat };
  catItems.push(newCat);
  return { cat_id: newId };
};

export { listAllCats, findCatById, addCat };
