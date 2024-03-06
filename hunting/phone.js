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

  phoneContainer.textContent = "";

  const showAllBtn = document.getElementById("show-all-btn");

  if (phones.length > 15) {
    showAllBtn.classList.remove("hidden");
  } else {
    showAllBtn.classList.add("hidden");
  }

  phones = phones.slice(0, 5);

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
        <button onClick="'showDetails()'" id="show-details-btn" class="btn btn-primary">Show Details</button>
      </div>
    </div>`;

    phoneContainer.appendChild(div);
  });

  toggleSpinner(false);
};

const searchData = () => {
  toggleSpinner(true);
 

  loadData(searchText);
};

// loading spinner

const toggleSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");

  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// show details
const showDetails = async () => {
  const showDetailsBtn = document.getElementById("show-details-btn");

  const res = await fetch(
    "https://openapi.programming-hero.com/api/phone/${id}"
  );
  const data = await res.json();
};
