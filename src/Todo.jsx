import { List, ListItem, ListItemText, ListItemAvatar, Modal} from '@material-ui/core'
import React,{useState} from 'react'
import './App.css';
import db from './Firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const Todo = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
        setOpen(true);
    };

    return (
        <div>
        <Modal open={open} onClose={e => setOpen(false)}>
            <div>
                <h1>Open</h1>
                <button onClick ={e =>setOpen(false)}></button>
            </div>
        </Modal>
        <List>
            <ListItem>
            <ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Dummy Deadline" />
                {/* <Avatar>
                    <ImageIcon />
                </Avatar> */}
            </ListItemAvatar>
            <button onClick ={e =>setOpen(true)}>Edit </button>
            <DeleteForeverIcon onClick={event =>{db.collection('todos').doc(props.todo.id).delete()}}></DeleteForeverIcon>
            </ListItem>
            
            
        </List>
            {/* <li>{props.todo}</li> */}
        </div>
    )
}

export default Todo
