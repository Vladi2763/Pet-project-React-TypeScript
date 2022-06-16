import { Grid } from '../../../types/types'

import Template from './Template'

import { useSelector } from 'react-redux'

import classes from './TemplatesList.module.css'

const TemplatesList = () => {

    const templates = useSelector((state: any) => state.templates.items)

    return (
        <header className={classes.header}>
            <div className={classes.containerHeader}>
                {templates.map((grid: Grid, index: number) => (
                    <Template grid={grid} key={index} index={index}></Template>
                ))}
            </div>
        </header>
    )
}

export default TemplatesList;