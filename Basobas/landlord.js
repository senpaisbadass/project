const rentalFormButton = document.getElementById('rentalFormButton');
const rentalFormPopup = document.getElementById('rentalFormPopup');
const closePopupButton = document.getElementById('closePopupButton');
const rentalForm = document.getElementById('rentalForm');
const rentalTableBody = document.getElementById('rentalTableBody');
const applicantCountValue = document.getElementById('applicantCountValue');
const applicantList = document.getElementById('applicantList');
const totalFlatsValue = document.getElementById('totalFlatsValue');

let rentals = [];
let applicants = [];
let totalApplicants = 0;

// Function to open the rental form
function openRentalForm() {
  rentalFormPopup.style.display = 'block';
}

// Function to close the rental form
function closeRentalForm() {
  rentalFormPopup.style.display = 'none';
  rentalForm.reset();
  rentalForm.dataset.mode = 'add';
  rentalForm.dataset.rentalId = '';
  document.getElementById('rentalFormSubmit').textContent = 'Rent Now';
}

// Function to handle rental form submission
function handleRentalFormSubmit(event) {
  event.preventDefault();

  const location = document.getElementById('locationInput').value;
  const price = document.getElementById('priceInput').value;
  const rooms = document.getElementById('roomsInput').value;
  const description = document.getElementById('descriptionInput').value;
  const photoInput = document.getElementById('photoInput');

  // Read the selected file
  const file = photoInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const image = event.target.result;

    const rental = {
      location,
      price,
      rooms,
      description,
      image
    };

    const mode = rentalForm.dataset.mode;

    if (mode === 'add') {
      rentals.push(rental);
      renderRental(rental);
      updateTotalFlats();
    } else if (mode === 'edit') {
      const rentalId = rentalForm.dataset.rentalId;
      rentals[rentalId] = rental;
      updateRental(rentalId, rental);
    }

    closeRentalForm();
  };

  reader.readAsDataURL(file);
}

// Function to render a rental in the table
function renderRental(rental) {
  const row = document.createElement('tr');
  const rentalId = rentals.length - 1;
  row.dataset.rentalId = rentalId;
  row.innerHTML = `
    <td><img src="${rental.image}" class="rental-table-image" alt="Rental Image"></td>
    <td>${rental.price}</td>
    <td>${rental.location}</td>
    <td>${rental.rooms}</td>
    <td>
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    </td>
  `;

  rentalTableBody.appendChild(row);
}

// Function to update a rental in the table
function updateRental(rentalId, rental) {
  const row = rentalTableBody.querySelector(`tr[data-rental-id="${rentalId}"]`);
  row.querySelector('img').src = rental.image;
  row.cells[1].textContent = rental.price;
  row.cells[2].textContent = rental.location;
  row.cells[3].textContent = rental.rooms;
}

// Function to handle edit button click
function handleEditButtonClick(event) {
  const row = event.target.closest('tr');
  const rentalId = row.dataset.rentalId;
  const rental = rentals[rentalId];

  openRentalForm();

  document.getElementById('locationInput').value = rental.location;
  document.getElementById('priceInput').value = rental.price;
  document.getElementById('roomsInput').value = rental.rooms;
  document.getElementById('descriptionInput').value = rental.description;

  document.getElementById('rentalFormSubmit').textContent = 'Update';

  rentalForm.dataset.mode = 'edit';
  rentalForm.dataset.rentalId = rentalId;
}

// Function to handle delete button click
function handleDeleteButtonClick(event) {
  const row = event.target.closest('tr');
  const rentalId = row.dataset.rentalId;

  rentals.splice(rentalId, 1);
  row.remove();

  updateTotalFlats();
}

// Function to handle reject button click
function handleRejectButtonClick(event) {
  const listItem = event.target.closest('li');
  const applicantId = listItem.dataset.applicantId;

  listItem.remove();
  totalApplicants--;
  applicantCountValue.textContent = totalApplicants;
}

// Function to handle accept button click
function handleAcceptButtonClick(event) {
  const listItem = event.target.closest('li');
  const applicantId = listItem.dataset.applicantId;

  const applicant = applicants[applicantId];
  // Perform action with accepted applicant (e.g., send confirmation email)

  listItem.remove();
  totalApplicants--;
  applicantCountValue.textContent = totalApplicants;
}

// Function to update the total number of flats/rooms
function updateTotalFlats() {
  const totalFlats = rentals.length;
  totalFlatsValue.textContent = totalFlats;
}

// Event listener for rental form button click
rentalFormButton.addEventListener('click', openRentalForm);

// Event listener for the close button in the form popup
closePopupButton.addEventListener('click', closeRentalForm);

// Event listener for rental form submission
rentalForm.addEventListener('submit', handleRentalFormSubmit);

// Event delegation for edit and delete buttons in the rental table
rentalTableBody.addEventListener('click', function (event) {
  if (event.target.classList.contains('edit-button')) {
    handleEditButtonClick(event);
  } else if (event.target.classList.contains('delete-button')) {
    handleDeleteButtonClick(event);
  }
});

// Event delegation for reject and accept buttons in the applicant list
applicantList.addEventListener('click', function (event) {
  if (event.target.classList.contains('reject-button')) {
    handleRejectButtonClick(event);
  } else if (event.target.classList.contains('accept-button')) {
    handleAcceptButtonClick(event);
  }
});
