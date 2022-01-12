import { useStylesItemIcon }  from '../useStylesItemIcon'; 

import ListItem               from '@material-ui/core/ListItem';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';


export const ItemIconRequests = () => {

    const { useStyles } = useStylesItemIcon(); 
    const classes = useStyles();
    return (
        <ListItem 
            button
            className   = { classes.item    }
        > 
            <AssignmentOutlinedIcon 
                className={ classes.icon }
            />
        </ListItem> 
    )
} 
 