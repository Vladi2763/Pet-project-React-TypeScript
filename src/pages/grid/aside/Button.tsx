import { useSelector, useDispatch } from "react-redux"

import { templatesSliceActions } from "../../../store/templates-slice";


const Button: React.FC<{ children: string, class: any }> = (props) => {

  const dispatch = useDispatch()

  const originalTemplate = useSelector((state: any) => state.templates.originalSelectedTemplate)

  const clearTableHandler = (template: any) => {
    dispatch(templatesSliceActions.addOriginalTemplate(template))
  }
  return < button className={props.class} onClick={() => { clearTableHandler(originalTemplate) }}>{props.children}</button>
}

export default Button;