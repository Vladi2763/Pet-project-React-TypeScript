import { generateGrid } from "./generateGrid";
import { enlargeCell } from "./enlargeCell";
import { makeDimensionalArr } from "./makeDimensionalArr";

function getRandomDelay() {
    return Math.random() * (700 - 100) + 100;
}


export function getTemplates() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let grid1 = generateGrid(3, 3);

            let grid2 = enlargeCell(grid1, { top: 0, left: 0 }, 2, 2);

            let grid3 = enlargeCell(grid1, { top: 0, left: 0 }, 3, 2);

            let grid4 = generateGrid(4, 4);

            let grid5 = enlargeCell(grid4, { top: 1, left: 1 }, 2, 2);

            resolve([grid1, grid2, grid3, grid4, grid5].map((item) => makeDimensionalArr(item)));
        }, getRandomDelay())
    });
}
