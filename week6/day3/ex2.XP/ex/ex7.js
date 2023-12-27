(function(userName) {
    const navbar = document.getElementById('navbar');
    const div = document.createElement('div');
    div.textContent = `Welcome, ${userName}`;
    navbar.appendChild(div);
})("Lior");
