import { useStylesItemIcon }  from '../useStylesItemIcon'; 

import ListItem                     from '@material-ui/core/ListItem';
import InsertInvitationOutlinedIcon from '@material-ui/icons/InsertInvitationOutlined';


export const ItemIconHours = () => {

    const { useStyles } = useStylesItemIcon(); 
    const classes = useStyles();

    return (
        <ListItem 
            button
            className   = { classes.item    }
        >  
            <InsertInvitationOutlinedIcon 
                className={ classes.icon }
            />
        </ListItem>
    )
}
  