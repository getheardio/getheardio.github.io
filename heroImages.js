// heroImages.js

// Array of image URLs
const images = [
    'nasa-unsplash.jpg',
    'javier-miranda-unsplash.jpg',
    'markus-spiskeI-unsplash.jpg'
];

// Function to change the hero image
function changeHeroImage() {
    const heroImageElement = document.getElementById('heroImage');
    const randomIndex = Math.floor(Math.random() * images.length);
    heroImageElement.style.backgroundImage = `url('${images[randomIndex]}')`;
}

// Change the hero image periodically (e.g., every 10 seconds)
setInterval(changeHeroImage, 10000);

// Initial image load
changeHeroImage();
