import { useStylesItemIcon } from '../useStylesItemIcon';
import { makeStyles       } from '@material-ui/core';
import   ListItem         from '@material-ui/core/ListItem';
import   HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const useStyles = makeStyles({
    list: {  
        backgroundColor:'#007DC4', 
    },
});
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
     
     