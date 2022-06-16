
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { imagesSliceActions } from "../../../store/images-slice";

import classes from './ImageSelector.module.css'


const ImageSelector = () => {

    const dispatch = useDispatch()

    const images = useSelector((state: any) => state.images.items)

    const [labelShoe, setLabelShoe] = useState('boots')

    const selectValueHandler = (event: any) => {
        setLabelShoe(event.target.value)
        dispatch(imagesSliceActions.addSrc(event.target.value))
    }

    return (
        <div className={classes.choose}>
            <form className={classes.form}>
                <select name="list1" onChange={selectValueHandler}>
                    {images.map((shoe: string, index: number) => (
                        <option value={shoe} key={index}>{shoe}</option>
                    ))}
                </select>
                <label>
                    <span>{`Icon:${labelShoe}`}</span>
                </label>
            </form>
        </div>
    )
}

export default ImageSelector;