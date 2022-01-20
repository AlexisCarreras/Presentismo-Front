import { DrawerNav       } from '../../organisms/NavBar/DrawerNav';
import { AppBarHeader    } from '../../organisms/AppBar/AppBarHeader';
import { Body            } from '../../organisms/Body/Body';
import { makeStyles      } from '@material-ui/core';
import { CalendarDetails } from '../../organisms/CalendarDetails/CalendarDetails';

const useStyles = makeStyles({ 
    body: {
        position: 'absolute', 
        left: '5%',
        zIndex: -1,
        display: 'flex',
        width: '96.5%',
        height: '93%',
        padding: 0,
    },
    bodyDiv: {
        
        width: '100%',
        height: '100%',
        
    },
});

export const Home = () => {

    const classes = useStyles();

    return (
        <div className={classes.bodyDiv}>
            <DrawerNav    />

            <AppBarHeader />

            <section className={ classes.body } >
                <Body            /> 
                <CalendarDetails />   
            </section>
        </div>
    )
}
