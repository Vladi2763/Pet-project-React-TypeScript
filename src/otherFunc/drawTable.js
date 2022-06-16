
export function drawTable(grid) {

    let table = document.createElement('table');
    table.classList.add('table');

    for (let i = 0; i < grid.length; i++) {
        let tr = document.createElement('tr');
        tr.classList.add('row')
        table.append(tr);

        for (let j = 0; j < grid[0].length; j++) {
            const cell = grid[i][j];
            let td = document.createElement('td');
            if (!cell) {
                continue;
            }
            td.classList.add('cell');

            td.setAttribute('rowspan', cell.height)
            td.setAttribute('colspan', cell.width)

            tr.append(td);

            if (cell.width > 1 || cell.height > 1) {
                td.classList.add('largeCell');
            }
        }

    }
    return table;
};