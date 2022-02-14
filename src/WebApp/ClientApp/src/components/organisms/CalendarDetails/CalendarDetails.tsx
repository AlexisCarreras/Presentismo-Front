import { makeStyles } from '@material-ui/core';
// import { Calendar   } from '../../atoms/Calendar/Calendar';
import { Details    } from '../../molecules/Details/Details';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        alignItems: 'left',
        backgroundColor: "#F4F4F4",
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '80%',
        fontFamily: '"Montserrat", sans-serif',
        marginTop:'4%',
        marginRight:'5%'
    },
});

export const CalendarDetails = () => {

    const classes = useStyles();

    return (
        // <div className={ classes.root } >
        
        //     <Details  />
        // </div>
        <Grid container className={classes.root}>
            <Details></Details>
        </Grid>
    )
}
