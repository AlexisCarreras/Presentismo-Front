import { makeStyles } from '@material-ui/core';
import   Typography   from '@material-ui/core/Typography';

const useStyles = makeStyles({ 
    text1: {
        
        color: '#29279D',
        fontSize: '90%',
        marginLeft: '5%',
        marginTop : '2%',
    },

    fechaText: {
        color: '#29279D',
        fontSize: '100%',
     
        
    },

    text2: { 
        color: '#7A7979',
        fontSize: '70%',
        marginLeft: '5%',
        marginBottom: '5%',
        marginRight: '10%',
        
    },
    conteinerDate: { 
        height: '20%',
        width: '40%',
        marginLeft : '240%',
        marginTop : '2%',
    },
});
const fecha = () => {

    const hoy = new Date();
  
    const fecha= ('0' + hoy.getDate()).slice(-2) + '/' + ('0' + (hoy.getMonth() + 1)).slice(-2) + '/' + hoy.getFullYear()
  
    return fecha;
  
  };
export const WelcomeHome = () => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.conteinerDate}>
            <Typography 
                className={ classes.fechaText }
                variant="subtitle1" 
            >
              {fecha()}
            </Typography>
            </div>
            <Typography 
                className={ classes.text1 }
            
            >
              Buenos días Alexis Carreras,
            </Typography>
            <Typography 
                className={ classes.text2 }
                
            >
                Bienvenido nuevamente al portal de Presentismo
            </Typography> 
        </div>
    )
}
