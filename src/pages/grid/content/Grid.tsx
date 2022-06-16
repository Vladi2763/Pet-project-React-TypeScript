import { GridRow } from "../../../types/types";
import { GridCell } from "../../../types/types";
import GridCellTd from "./GridCell";

import classes from './Grid.module.css'

import { useSelector } from "react-redux";

const Grid = () => {

    const table = useSelector((state: any) => state.templates.selectedTemplate)

    return (
        <div className={classes.content}>
            <div className={classes.container}>
                <table className={classes.table}>
                    {table.map((row: GridRow, index: number) => (
                        <tr key={index}>
                            {row.map((cell: GridCell, index: number) => (
                                cell && <GridCellTd colSpan={cell.width!} rowSpan={cell.height!} key={index} targetCell={cell} />
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default Grid;