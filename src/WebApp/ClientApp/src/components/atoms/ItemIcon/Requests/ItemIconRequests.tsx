import ListItem               from '@material-ui/core/ListItem';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

import { useStylesItemIcon }  from '../useStylesItemIcon'; 

export const ItemIconRequests = () => {

    const { useStyles } = useStylesItemIcon(); 
    const classes = useStyles();

    return (
        <ListItem 
            button
            className={ classes.item }
        > 
            <AssignmentOutlinedIcon 
                className={ classes.icon }
            />
        </ListItem> 
    )
} 
 