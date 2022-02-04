import { makeStyles, Paper } from '@material-ui/core';
import { WelcomeHome       } from '../../atoms/Typography/Welcome/WelcomeHome';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({ 
    paperGreeting: {
        alignItems: 'left',
        backgroundColor: '#FFFF',
        display: 'flex',
        height: '60%',
        marginTop: '15%',
        width: '85%', 
        marginLeft: '5%',
        marginRight: '5%',
        
         
    },
    divGreeting: {
        marginTop: '20%',
    },
});

export const PaperWelcome = () => {

    const classes = useStyles();

    return (
        
        <div className={classes.divGreeting}>
            <Paper 
                className={ classes.paperGreeting } 
                elevation={3}
            >
                
                <WelcomeHome />
                
            </Paper>
        </div>
    ) 
}