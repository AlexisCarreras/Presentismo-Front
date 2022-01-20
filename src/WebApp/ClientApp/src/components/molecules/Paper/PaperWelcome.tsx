import { makeStyles, Paper } from '@material-ui/core';
import { WelcomeHome       } from '../../atoms/Typography/Welcome/WelcomeHome';

const useStyles = makeStyles({ 
    paperGreeting: {
        alignItems: 'left',
        backgroundColor: '#FFFF',
        display: 'flex',
        height: '90%',
   
        marginTop: '0%',
        width: '90%', 
        marginLeft: '5%',
        marginRight: '5%',
         
    },
    divGreeting: {
       
        marginTop: '25%',
        
        
        
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
