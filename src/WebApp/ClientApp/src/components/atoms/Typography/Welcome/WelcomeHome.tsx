import { makeStyles } from '@material-ui/core';
import   Typography   from '@material-ui/core/Typography';

const useStyles = makeStyles({ 
    text1: {
        color: '#29279D',
        fontSize: '19px',
        marginLeft: '2rem',
    },
    text2: { 
        color: '#7A7979',
        marginLeft: '2rem',
    },
});

export const WelcomeHome = () => {

    const classes = useStyles();

    return (
        <div>
            <Typography 
                className={ classes.text1 }
                variant="subtitle1" 
            >
                Buenos días Alexis Carreras,
            </Typography>
            <Typography 
                className={ classes.text2 }
                variant="subtitle1" 
            >
                Bienvenido nuevamente al portal de Presentismo
            </Typography>
        </div>
    )
}
