import { makeStyles } from '@material-ui/core';
// import { Calendar   } from '../../atoms/Calendar/Calendar';
import { DetailsLider    } from '../../molecules/Details/DetailsLider';

const useStyles = makeStyles({
    root: {
        alignItems: 'left',
        backgroundColor: "#F4F4F4",
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '62%',
        fontFamily: '"Montserrat", sans-serif',
    },
});

export const CalendarDetailsLider = () => {

    const classes = useStyles();

    return (
        <div className={ classes.root } >
        
            <DetailsLider  />
        </div>
    )
}