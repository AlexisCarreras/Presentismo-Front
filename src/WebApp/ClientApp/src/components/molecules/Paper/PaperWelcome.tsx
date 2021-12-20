import { makeStyles, Paper } from '@material-ui/core';
import { WelcomeHome       } from '../../atoms/Typography/Welcome/WelcomeHome';

const useStyles = makeStyles({ 
    paperGreeting: {
        alignItems: 'center',
        backgroundColor: '#FFFF',
        display: 'flex',
        height: '80px',
        // height: '80%',
        marginTop: '2rem',
        width: '1200px', 
        // width: '180%',
    },
});

export const PaperWelcome = () => {

    const classes = useStyles();

    return (
        <div>
            <Paper 
                className={ classes.paperGreeting } 
                elevation={3}
            >
                <WelcomeHome />
                
            </Paper>
        </div>
    ) 
}
