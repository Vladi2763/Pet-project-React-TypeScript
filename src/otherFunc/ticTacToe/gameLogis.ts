export type Obj = {
    winner: string,
    a: number,
    b: number,
    c: number
}

const gameLogic = (arr: string[]): Obj => {
    let obj = {}

    let possibleOutcomes: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i: number = 0; i < possibleOutcomes.length; i++) {

        const [a, b, c] = possibleOutcomes[i];

        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            return obj = { winner: arr[a], a: a, b: b, c: c }
        }
    }

    return null;
}

export default gameLogic;