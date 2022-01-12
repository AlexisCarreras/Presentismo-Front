import { useStylesItemIcon } from '../useStylesItemIcon';

import   ListItem         from '@material-ui/core/ListItem';
import   HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';


export const ItemIconHome = () => {

    const { useStyles } = useStylesItemIcon(); 
    const classes = useStyles();

    return ( 
        <ListItem 
            button 
            className   = { classes.item    }
        >  
            <HomeOutlinedIcon 
                className={ classes.icon }
                />
        </ListItem>
    )
}
     