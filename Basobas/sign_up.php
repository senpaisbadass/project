<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign Up</title>
  <link rel="stylesheet" type="text/css" href="signup.css">
</head>
<body>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form id="signup-form" method="POST" action="database.php">
      <input type="text" id="username" placeholder="Username" required>
      <input type="password" id="password" placeholder="Password" required>
      <input type="email" id="email" placeholder="Email" required>
      <input type="tel" id="phone" placeholder="Phone Number" required>
      <select id="role" required>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="landlord">Landlord</option>
        <option value="tenant">Tenant</option>
      </select>
      <button type="submit" name="signup">Sign Up</button>
    </form>
  </div>
  
  <script src="signup.js"></script>
</body>
</html>
