document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form from refreshing the page

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const cardsContainer = document.getElementById('cardsContainer');

    // Ensure all fields are filled before proceeding
    if (name && email && message) {
        // Create a new card element
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;

        // Delete button functionality
        card.querySelector('.delete-button').addEventListener('click', function () {
            cardsContainer.removeChild(card);
        });

        // Edit button functionality
        card.querySelector('.edit-button').addEventListener('click', function () {
            document.getElementById('name').value = name;
            document.getElementById('email').value = email;
            document.getElementById('message').value = message;
            cardsContainer.removeChild(card);
        });

        // Append the card to the container
        cardsContainer.appendChild(card);

        // Reset the form after submission
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill in all the fields before submitting.");
    }
});
