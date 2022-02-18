import { DrawerNav } from '../../organisms/NavBar/DrawerNav';
import { AppBarHeader } from '../../organisms/AppBar/AppBarHeader';
import { Body } from '../../organisms/Body/Body';
import { Grid, makeStyles } from '@material-ui/core';
import { CalendarDetails } from '../../organisms/CalendarDetails/CalendarDetails';
import { LeaderScreen } from '../../organisms/LeaderScreen/LeaderScreen';

const useStyles = makeStyles({
    body: {
        position: 'absolute',
        left: '5%',
        zIndex: -1,
        display: 'flex',
        width: '96.5%',
        height: '93%',
        padding: 0,
        fontFamily: '"Montserrat", sans-serif',
        backgroundColor: "#F4F4F4",

    },
    bodyDiv: {
        fontFamily: '"Montserrat", sans-serif',
        width: '100%',
        height: '100%',

    },
});

export const Home = () => {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid container>
                <div className={classes.bodyDiv}>

                    <Grid item xs={12}>
                        <DrawerNav />

                        <AppBarHeader />
                    </Grid>

                </div>
                {/* <Grid item xs={6} className={classes.body}> */}
                <section className={classes.body} id={'root'} >
                    <Body />
                    <CalendarDetails />
                   
                </section>
               
            </Grid>
        </Grid>
    )
}
