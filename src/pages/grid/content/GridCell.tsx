import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import classes from './GridCell.module.css'
import { templatesSliceActions } from "../../../store/templates-slice";

const GridCellTd: React.FC<{ colSpan: number, rowSpan: number, targetCell: any }> = (props) => {


  const dispatch = useDispatch();
  const selectedImage = useSelector((state: any) => (state.images.selectedImage));
  const [className, setClassName] = useState(false);

  const dragDropHandler = (event: any) => {
    event.preventDefault();
    dispatch(templatesSliceActions.applyImageToCell({
      selectedImage: selectedImage,
      cell: props.targetCell
    }))
    setClassName(true);
  }

  const dragOverHandler = (event: any) => {
    event.preventDefault();
    setClassName(true);
  }

  const largeCell = (props.targetCell.width > 1 || props.targetCell.height > 1) ? true : ''

  const dragLeaveHandler = () => {
    let classLeave = props.targetCell.src ? '' : setClassName(false);
  }

  return (
    <td className={(largeCell ? classes.largeCell : '') + ' ' + (className ? classes.cellHighlight : '')} colSpan={props.colSpan} rowSpan={props.rowSpan}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={(event) => { dragDropHandler(event) }}>
      {props.targetCell.src && <img className={classes.imgInTable} src={`/assets/${props.targetCell.src}.jpeg`} alt='' draggable='false' />}
    </td>
  )
}

export default GridCellTd;