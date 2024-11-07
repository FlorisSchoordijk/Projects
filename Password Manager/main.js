// Add event listener to swap button
document.querySelector('.swap-button').addEventListener('click', function () {
    var leftBox = document.querySelector('.password-box-left');
    var rightBox = document.querySelector('.password-box-right');

    // Toggle classes to swap positions
    leftBox.classList.toggle('swapped-left');
    rightBox.classList.toggle('swapped-right');
});

// Addeventlistener for form submission
document.querySelector('.password-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from input fields
    var siteName = document.querySelector('.site-name').value;
    var password = document.querySelector('.password-input').value;

    // Create new list item for the password entry
    var passwordList = document.querySelector('.password-list');
    var newPasswordEntry = document.createElement('li');
    newPasswordEntry.classList.add('password-entry');

    var passwordContent = document.createElement('div');
    passwordContent.classList.add('password-content');

    var siteNameElement = document.createElement('span');
    siteNameElement.textContent = siteName;

    var passwordElement = document.createElement('span');
    passwordElement.textContent = '********'; // Display the hidden password by default
    passwordElement.setAttribute('data-password', password); // Store actual password in a data attribute

    // Append siteName and password under the same div
    passwordContent.appendChild(siteNameElement);
    passwordContent.appendChild(passwordElement);

    var showButton = document.createElement('button');
    showButton.classList.add('show-btn');
    showButton.textContent = 'Show';

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn'); // Ensure the delete button gets proper styling
    deleteButton.textContent = 'Verwijder';

    // Add event listener for showing/hiding the password
    showButton.addEventListener('click', function () {
        if (passwordElement.textContent === '********') {
            passwordElement.textContent = passwordElement.getAttribute('data-password'); // Show the actual password
            showButton.textContent = 'Hide';
        } else {
            passwordElement.textContent = '********'; // Hide the password
            showButton.textContent = 'Show';
        }
    });

    // Add event listener for deleting the password entry
    deleteButton.addEventListener('click', function () {
        newPasswordEntry.remove();
    });

    // Append content and buttons to the new password entry
    newPasswordEntry.appendChild(passwordContent);
    newPasswordEntry.appendChild(showButton);
    newPasswordEntry.appendChild(deleteButton);

    // Append the new entry to the list
    passwordList.appendChild(newPasswordEntry);

    // Clear the form after submission
    document.querySelector('.site-name').value = '';
    document.querySelector('.password-input').value = '';
});

// Event listener for the "Show All" button
document.querySelector('.show-all').addEventListener('click', function () {
    var passwordEntries = document.querySelectorAll('.password-entry');
    var allVisible = true;

    // Check if all passwords are currently visible
    passwordEntries.forEach(function (entry) {
        var passwordElement = entry.querySelector('.password-content span:nth-child(2)');
        if (passwordElement.textContent === '********') {
            allVisible = false; // checks at least one password is hidden
        }
    });

    // Toggle visibility of all paswords
    passwordEntries.forEach(function (entry) {
        var passwordElement = entry.querySelector('.password-content span:nth-child(2)');
        var showButton = entry.querySelector('.show-btn');

        if (allVisible) {
            passwordElement.textContent = '********'; // Hide all passwords
            if (showButton) showButton.textContent = 'Show';
        } else {
            passwordElement.textContent = passwordElement.getAttribute('data-password'); // Show all passwords
            if (showButton) showButton.textContent = 'Hide';
        }
    });
});

// Attach event listeners to existing entries
document.querySelectorAll('.password-entry').forEach(function (entry) {
    var showButton = entry.querySelector('.show-btn');
    var deleteButton = entry.querySelector('.delete-btn');

    showButton.addEventListener('click', function () {
        var passwordElement = entry.querySelector('.password-content span:nth-child(2)');
        if (passwordElement.textContent === '********') {
            passwordElement.textContent = passwordElement.getAttribute('data-password'); // Show password
            showButton.textContent = 'Hide';
        } else {
            passwordElement.textContent = '********'; // Hide password
            showButton.textContent = 'Show';
        }
    });

    deleteButton.addEventListener('click', function () {
        entry.remove();
    });
});
