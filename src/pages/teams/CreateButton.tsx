import classes from './CreateButton.module.css'

const CreateButton: React.FC<{ clickhandler: (title: string) => any; title: string; disable: boolean }> = (props) => {
    return <button id={`buttonCreateModal${props.title}`} onClick={() => props.clickhandler(props.title)} className={classes.button} disabled={props.disable}>+ Create New {props.title}</button>
}

export default CreateButton

