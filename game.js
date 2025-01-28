let heartsCollected = 0;
const scoreElement = document.getElementById('score');
const heartsContainer = document.getElementById('hearts-container');
const endGameButton = document.getElementById('endGame');
const loveMessage = document.getElementById('love-message');

// Function to generate hearts and place them randomly
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = `${Math.random() * 90}%`; // Position horizontally
    heart.style.top = `${Math.random() * 80}%`;  // Position vertically
    heart.addEventListener('click', () => {
        heartsCollected++; // Increase the count
        scoreElement.textContent = `Hearts Collected: ${heartsCollected}`; // Update score
        heart.remove(); // Remove heart after it's clicked
        if (heartsCollected >= 19) { // When 19 hearts are collected
            endGameButton.style.display = 'block'; // Show the end button
        }
    });
    heartsContainer.appendChild(heart); // Add heart to the container
}

// Generate hearts every 0.5 seconds
setInterval(createHeart, 2000);

// Show love message when game ends
endGameButton.addEventListener('click', () => {
    loveMessage.style.display = 'block'; // Display the love message
    endGameButton.style.display = 'none'; // Hide the button
})