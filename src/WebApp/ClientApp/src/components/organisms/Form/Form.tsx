import { makeStyles } from '@material-ui/core';
import { FormDetails    } from '../../molecules/FormDetails/FormDetails';

const useStyles = makeStyles({
    //el fondo blanco
    root: {
        
        backgroundColor: "#FFFFFF",
        borderRadius : '15px',
        padding: '1.5rem',
        width: '300px',
        height: '300px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
    },

});


export const Form = () => {

    const classes = useStyles();

    return (
        <div className={ classes.root } >
            
            {<FormDetails  />}
        </div>
    )
}
