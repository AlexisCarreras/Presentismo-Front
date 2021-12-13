import { makeStyles     } from '@material-ui/core';
import Drawer             from '@material-ui/core/Drawer';
import { ListItemsIcons } from '../../molecules/ListItemsIcons/ListItemsIcons';
import { VersionApp     } from '../../atoms/Typography/Version/VersionApp';

const useStyles = makeStyles({
    paper: {
        backgroundColor: "#4F41A3",
    },
    container: {
        height: '100%',
    },
    version: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '70%',
    },
});
 
export const DrawerNav = () => {

    const classes = useStyles();

    return (
        <Drawer
            classes= {{ paper: classes.paper }}
            variant= "permanent"
        > 
            <section className={ classes.container }>
                <ListItemsIcons />
                <div className={ classes.version }>
                    <VersionApp/>   
                </div>
            </section>
        </Drawer>
    )
}