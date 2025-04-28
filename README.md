# binary-rating-algorithm
Elo rating algorithm where one choice is picked between 2. Users compare two images and choose their favorite. Has functions to update ratings after rounds and retrieve top-rated objects

## Development
Clone
```
git clone https://github.com/jjamest/binary-rating-algorithm
cd binary-rating-algorithm
```

Install dependencies
```
npm install
```

Initialize data
```
import { EloRating, Image } from './eloRating';

const elo = new EloRating(32); // K-factor defaults to 32

// Initialize images with default rating (e.g., 1500)
const images: Image[] = [
  { id: 'image1', rating: 1500, matches: 0 },
  { id: 'image2', rating: 1500, matches: 0 },
];
```

Update rankings
```
// Where images[0] and images[1] are the two choices offered, and images[1] is the one chosen. The winner is passed as images[1].id
elo.updateRatings(images[0], images[1], 'image1');
```

Running
```
npm run dev
```