<!DOCTYPE html>
<html>
<head>
  <title>Landlord Page</title>
  <link rel="stylesheet" type="text/css" href="landlord.css">
</head>
<body>
  <div class="header">
    <h1>Welcome, Landlord</h1>
    <button id="rentalFormButton">Add Rental</button>
  </div>

  <div class="rental-form-popup" id="rentalFormPopup">
    <div class="rental-form-container">
      <h2>Add Rental</h2>
      <form id="rentalForm">
        <input type="text" id="locationInput" placeholder="Location" required>
        <input type="file" id="photoInput" required>
        <input type="number" id="priceInput" placeholder="Price" required>
        <input type="number" id="roomsInput" placeholder="Number of Rooms" required>
        <textarea id="descriptionInput" placeholder="Description" required></textarea>
        <button type="submit" id="rentalFormSubmit">Rent Now</button>
        <button type="button" id="closePopupButton">Close</button>
      </form>
    </div>
  </div>

  <div class="rental-list">
    <h2>My Rentals</h2>
    <table id="rentalTable">
      <thead>
        <tr>
          <th>Image</th>
          <th>Price</th>
          <th>Location</th>
          <th>Number of Rooms</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="rentalTableBody"></tbody>
    </table>
  </div>

  <div class="applicant-section">
    <h2>Tenant Applications</h2>
    <div id="applicantCount">Number of Applicants: <span id="applicantCountValue">0</span></div>
    <ul id="applicantList"></ul>
  </div>

  <script src="landlord.js"></script>
</body>
</html>
