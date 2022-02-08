import { makeStyles } from '@material-ui/core';
// import { Calendar   } from '../../atoms/Calendar/Calendar';
import { DetailsAdmin    } from '../../molecules/Details/DetailsAdmin';

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

export const CalendarDetailsAdmin = () => {

    const classes = useStyles();

    return (
        <div className={ classes.root } >
        
            <DetailsAdmin  />
        </div>
    )
}