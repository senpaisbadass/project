<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="login.css">
</head>
<body>
  <div class="login-container">
    <h2>Login</h2>
    <form id="login-form">
      <input type="text" id="username" placeholder="Username" required>
      <input type="password" id="password" placeholder="Password" required>
      <select id="role" required>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="landlord">Landlord</option>
        <option value="tenant">Tenant</option>
      </select>
      <button type="submit">Login</button>
    </form>
  </div>
  
  <script src="login.js">
  </script>
</body>
</html>
