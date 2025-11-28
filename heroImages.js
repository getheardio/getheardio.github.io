// heroImages.js

// Array of image URLs
const images = [
    'carlos-muza-unsplash.jpg',
//    'nasa-unsplash.jpg',
//   'javier-miranda-unsplash.jpg',
//    'markus-spiskeI-unsplash.jpg'
];

// Function to change the hero image
function changeHeroImage() {
    const heroImageElement = document.getElementById('heroImage');
    const randomIndex = Math.floor(Math.random() * images.length);
    heroImageElement.style.backgroundImage = `url('${images[randomIndex]}')`;
}

// Initial image load
changeHeroImage();




