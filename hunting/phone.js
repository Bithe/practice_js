const loadData = async (searchText) => {
  const res = await fetch(
   `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  const data = await res.json();
  const phones = data.data;

  displayData(phones);
};

const displayData = (phones) => {
  console.log(phones.data);

  const phoneContainer = document.getElementById("phone-container");

  phoneContainer.textContent = '';

  phones.forEach((phone) => {
    console.log(phone);

    const div = document.createElement("div");
    div.classList = `card w-96 bg-base-100 shadow-xl `;

    div.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>`;

    phoneContainer.appendChild(div);
  });
};

const searchData = () => {
  const searchInput = document.getElementById('search-input');

  const searchText = searchInput.value;
  console.log(searchText);

  loadData(searchText);
};

