
import { makeStyles      } from '@material-ui/core';
import { Form } from '../../organisms/Form/Form';
import logo from '../../atoms/Logo/cda_bg.jpg';



const useStyles = makeStyles({ 
    body: {
        display:' grid',
        height:' 100%',
       
    },
    cent: {
        maxWidth: '100%',
        maxHeight: '100vh',
        margin: 'auto',
      
    },
}); 

export const Login = () => {

    const classes = useStyles();

    return (
       <div className={classes.body}>
       <img  src={ logo }  className={ classes.cent }  alt="fondo" />
        
        <Form    />
        
         </div>
       
    )
}
