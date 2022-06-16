
import { useDispatch, useSelector } from "react-redux";
import { templatesSliceActions } from "../../../store/templates-slice";


import { Grid } from "../../../types/types";
import { GridRow } from "../../../types/types";
import { GridCell } from "../../../types/types";

import classes from './Template.module.css'

const Template: React.FC<{ grid: Grid; index: number }> = (props) => {

    const selectedIndex = useSelector((state: any) => state.templates.selectedGridIndex)

    const focus = selectedIndex === props.index

    const dispatch = useDispatch()

    const sendtableHandler = () => {
        dispatch(templatesSliceActions.selectTemplate(props.grid))
        dispatch(templatesSliceActions.selectIndex(props.index))
    }

    return (

        <table className={classes.table + ' ' + (focus ? classes.highlight : '')}
        onClick={sendtableHandler}>
            {props.grid.map((row: GridRow, index: number) => (
                <tr key={index}>
                    {row.map((cell: GridCell, index: number) => (
                        cell && <td className={(cell.width! > 1 || cell.height! > 1) ? classes.largeCell : ''} colSpan={cell.width!} rowSpan={cell.height!} key={index} />
                    ))}
                </tr>
            ))}
        </table>
    )
}

export default Template;