// Get references to the file input and button
const fileInput = document.getElementById('file-input');
const fileButton = document.getElementById('file-button');

// Event listener for the button click
fileButton.addEventListener('click', function() {
    fileInput.click(); // Trigger the hidden file input
});

// Event listener for file input change
fileInput.addEventListener('change', function() {
    const file = this.files[0]; // Get the selected file

    // Check if a file is selected
    if (file) {
        fileButton.textContent = file.name; // Update button text with file name
    } else {
        fileButton.textContent = 'Add file'; // Reset button text if no file is selected
    }
});
