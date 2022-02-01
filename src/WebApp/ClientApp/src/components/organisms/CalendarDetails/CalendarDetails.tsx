import { makeStyles } from '@material-ui/core';
// import { Calendar   } from '../../atoms/Calendar/Calendar';
import { Details    } from '../../molecules/Details/Details';

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

export const CalendarDetails = () => {

    const classes = useStyles();

    return (
        <div className={ classes.root } >
        
            <Details  />
        </div>
    )
}
