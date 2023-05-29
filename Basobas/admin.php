<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Admin Page</title>
  <style>
    /* CSS styles */

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    header {
      background-color: #333;
      color: #fff;
      padding: 10px;
    }

    h1 {
      margin: 0;
    }

    main {
      padding: 20px;
    }

    h2 {
      margin-bottom: 10px;
    }

    .landlord-card,
    .tenant-card {
      background-color: #f5f5f5;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;
    }

    .landlord-card h3,
    .tenant-card h3 {
      margin: 0;
    }

    .landlord-card p,
    .tenant-card p {
      margin-top: 5px;
    }

    .property-count,
    .rent-count {
      margin-top: 5px;
      font-size: 14px;
      color: #888;
    }

    .delete-btn {
      background-color: #ff6347;
      color: #fff;
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      cursor: pointer;
    }

    .delete-btn:hover {
      background-color: #cc4532;
    }

    .no-landlords,
    .no-tenants {
      text-align: center;
      color: #888;
      font-style: italic;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome, Admin!</h1>
  </header>
  <main>
    <h2>Landlord Management</h2>
    <div id="landlordContainer">
      <!-- Landlord details will be dynamically added here -->
    </div>

    <h2>Tenant Management</h2>
    <div id="tenantContainer">
      <!-- Tenant details will be dynamically added here -->
    </div>
  </main>
  <script src="admin.js"></script>
</body>
</html>
