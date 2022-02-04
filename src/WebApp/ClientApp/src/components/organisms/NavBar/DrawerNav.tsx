import { makeStyles     } from '@material-ui/core';
import Drawer             from '@material-ui/core/Drawer';
import { ListItemsIcons } from '../../molecules/ListItemsIcons/ListItemsIcons';
import { VersionApp     } from '../../atoms/Typography/Version/VersionApp';

const useStyles = makeStyles({
    paper: {
        backgroundColor: "#007DC4",
        height:'100%',
    },
    icon: {
        color: '#333',
        backgroundColor: '#EEEEEE',
            '&:hover': {
                backgroundColor: '#EFEF',
            },
    },
    container: {
        height: '100%',
        
    },
    version: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '90%',
        marginBottom: '2%'
    },
});
 
export const DrawerNav = () => {

    const classes = useStyles();

    return (
        <Drawer
            classes= {{ paper: classes.paper }}
            variant= "permanent"
        > 
            <section >
                <ListItemsIcons />
                <VersionApp/>   
            </section>
        </Drawer>
    )
}