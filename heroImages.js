// heroImages.js

// Array of image URLs
const images = [
    'nasa-unsplash.jpg',
];

// Function to change the hero image
function changeHeroImage() {
    const heroImageElement = document.getElementById('heroImage');
    const randomIndex = Math.floor(Math.random() * images.length);
    heroImageElement.style.backgroundImage = `url('${images[randomIndex]}')`;
}

// Initial image load
changeHeroImage();







