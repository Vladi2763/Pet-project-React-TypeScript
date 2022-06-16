import React from 'react';
import { useSelector } from 'react-redux';

import Aside from './aside/Aside';
import TemplatesList from './templatesList/TemplatesList';
import Grid from './content/Grid';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTemplatesData } from '../../store/templates-slice';

import classes from './GridPage.module.css';


const GridPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplatesData())
  }, [dispatch])

    const isSelectedTable = useSelector((state: any) => state.templates.selectedTemplate)

    return (
        <div className={classes.page}>
          <div className={classes.content}>
            <TemplatesList />
            {isSelectedTable && <Grid />}
          </div>
          <Aside />
        </div>
    )

}

export default GridPage;