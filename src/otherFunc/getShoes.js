const SHOES = [
    'boots',
    'comfort',
    'converse',
    'flipflop',
    'monkstrap',
    'oxford',
    'sneakers',
    'tech'
];

function getRandomDelay() {
    return Math.random() * (700 - 100) + 100;
  }

export function getShoes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(SHOES)
        }, getRandomDelay())
    });
}