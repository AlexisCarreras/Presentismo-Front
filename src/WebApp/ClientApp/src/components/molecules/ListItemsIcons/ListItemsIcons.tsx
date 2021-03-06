import { makeStyles       } from '@material-ui/core';
import List                 from '@material-ui/core/List';
import { ItemIconHome     } from '../../atoms/ItemIcon/Home/ItemIconHome';
import { ItemIconHours    } from '../../atoms/ItemIcon/Hours/ItemIconHours';
import { ItemIconRequests } from '../../atoms/ItemIcon/Requests/ItemIconRequests';

const useStyles = makeStyles({
    list: {
        marginTop: '3.5rem', 
    },
});

export const ListItemsIcons = () => {

    const classes = useStyles();

    return (
        <List className={ classes.list } >
            <ItemIconHome     /> 
            <ItemIconHours    />
            <ItemIconRequests />
        </List>
    )
}
