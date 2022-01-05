import { makeStyles } from '@material-ui/core';
// import { Calendar   } from '../../atoms/Calendar/Calendar';
import { Details    } from '../../molecules/Details/Details';

const useStyles = makeStyles({
    root: {
        alignItems: 'center',
        backgroundColor: "#F4F4F4",
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-around',
        // height: '93.1vh',
        position: 'relative',
        width: '22%',
    },
});

export const CalendarDetails = () => {

    const classes = useStyles();

    return (
        <div className={ classes.root } >
            {/* <Calendar /> */}
            <Details  />
        </div>
    )
}
