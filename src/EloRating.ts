export interface Image {
    id: string;
    rating: number;
    matches: number;
}

export class EloRating {
    private k: number;

    constructor(k: number = 32) {
        this.k = k; // K-factor determines rating change magnitude
    }

    // Calculate expected score for imageA against imageB
    private calculateExpectedScore(ratingA: number, ratingB: number): number {
        return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
    }

    // Update ratings after a match
    updateRatings(imageA: Image, imageB: Image, winnerId: string): void {
        const expectedA = this.calculateExpectedScore(imageA.rating, imageB.rating);
        const expectedB = this.calculateExpectedScore(imageB.rating, imageA.rating);

        // Score is 1 if the image wins, 0 if it loses
        const scoreA = winnerId === imageA.id ? 1 : 0;
        const scoreB = winnerId === imageB.id ? 1 : 0;

        // Update ratings
        imageA.rating = imageA.rating + this.k * (scoreA - expectedA);
        imageB.rating = imageB.rating + this.k * (scoreB - expectedB);

        // Increment match counts
        imageA.matches += 1;
        imageB.matches += 1;
    }

    // Get top-rated images. Only includes images with matches
    getTopImages(images: Image[], limit: number = 10): Image[] {
        return images
            .filter(image => image.matches > 0)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
    }
}
