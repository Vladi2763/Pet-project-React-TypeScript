import { useSelector } from "react-redux"

import Button from "./Button"
import ImageSelector from "./ImageSelector"

import classes from './Aside.module.css'
import React from "react"

const Aside = () => {

    const src = useSelector((state: any) => state.images.selectedImage)


    const dragStartHandler = (event: any, img: any) => {
    }

    const dragEndHandler = (event: any) => {
    }

    return (
        <aside className={classes.sidebar}>
            <ImageSelector />
            <div className={classes.containerImage} >
                <div className={classes.image}>
                    <img id='imageDragStart' onDragStart={(event) => { dragStartHandler(event, event.target) }}
                        onDragEnd={dragEndHandler}
                        className={classes.srcImg} alt='' src={`/assets/${src}.jpeg`} draggable={true} />
                </div>
                <Button class={classes.buttonClear}>Очистить содержимое ячеек</Button>
            </div >
        </aside>
    )
}



// const AsideImage = () => {
//     return (
//         <React.Fragment>
//             {ReactDom.createPortal(<PortalAsideImage />, document.getElementById('aside') as HTMLElement)}
//         </React.Fragment>
//     )
// }

export default Aside