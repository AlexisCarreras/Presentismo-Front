import { Card, makeStyles } from '@material-ui/core';
// import { Calendar   } from '../../atoms/Calendar/Calendar';
import { Details    } from '../../molecules/Details/Details';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import ApprovalTable from '../../atoms/LeaderTable/ApprovalTable';
import AppBarLeader from '../AppBar/AppBarLeader';

const useStyles = makeStyles({
    root: {
        alignItems: 'left',
        backgroundColor: "#007DC4",
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
        fontFamily: '"Montserrat", sans-serif',
        marginTop:'6%',
        marginRight:'5%'
    },
});

export const LeaderScreen = () => {

    const classes = useStyles();

    return (
    
        <Card className={classes.root}>
            <AppBarLeader></AppBarLeader>
           {/* <ApprovalTable></ApprovalTable> */}
        </Card>
    )
}