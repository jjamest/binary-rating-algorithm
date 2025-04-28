/* 
    Example usage
*/

import { EloRating, Image } from "./EloRating";

const elo = new EloRating();

// Initialize images with default rating
const images: Image[] = [];
for (let i = 1; i <= 100; i++) {
    images.push({ id: `image${i}`, rating: 1500, matches: 0 });
}

// Simulate some matches
for (let i = 0; i < 1000; i++) {
    const imageA = images[Math.floor(Math.random() * images.length)];
    const imageB = images[Math.floor(Math.random() * images.length)];

    const winnerId = Math.random() < 0.5 ? imageA.id : imageB.id;
    elo.updateRatings(imageA, imageB, winnerId);
}

// Get the top 10 images
const topImages = elo.getTopImages(images);
console.log("Top Images:", topImages);
