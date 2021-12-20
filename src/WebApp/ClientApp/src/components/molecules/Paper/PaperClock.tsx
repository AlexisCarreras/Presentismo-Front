import { useContext, useState  } from 'react';
import { makeStyles, Paper     } from '@material-ui/core';
import { RadioButtonsGroup     } from '../RadioButtonsGroup/RadioButtonsGroup';
import   Typography              from '@material-ui/core/Typography';
import { Watch                 } from '../../atoms/Watch/Watch';
import { ButtonPrimary         } from '../../atoms/Buttons/Primary/ButtonPrimary';
import { ValueContext          } from '../../../hooks/UseContext/ValueContext';
import { ButtonProvider        } from '../../../context/ButtonProvider';

import IniciarDia   from '../../../services/IniciarDia/iniciarDia';
import FinalizarDia from '../../../services/FinalizarDia/finalizarDia';
import PausarDia    from '../../../services/PausarDia/pausarDia';
import Reiniciar    from '../../../services/Reiniciar/reiniciar';

const useStyles = makeStyles({
    paperFunction: {
        backgroundColor: '#FFFF',
        height: '77%',
        marginBottom: '2rem',
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '2.5rem',
        alignItems: 'center',
    },
    containerText: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2.25rem',
    }, 
    text: {
        color: '#54CAA6',
        margin: 0, 
        textShadow: '1px 1px 3px #BEBEBE', 
        marginRight: '6.5rem',
        marginLeft: '7.5rem',
    },
});

export const PaperClock = (  ) => {   

    const classes = useStyles();

    const [text, setText] = useState('Comenzar');

    const [valueFinish, setValueFinish] = useState(true);
      
    const { valuesRadio } = useContext( ValueContext ); 
 
    const handleClickStart = () => {
        if ( text ===  'Comenzar' ) {
            IniciarDia();
            setText('Pausar');
            setValueFinish(!valueFinish);
        }
        else if ( text ===  'Pausar' ) { 
            PausarDia();
            setText('Reanudar');
        }
        else if ( text ===  'Reanudar' ) {
            Reiniciar();
            console.log("reiniciar");
            setText('Pausar');
        }
    };

    const handleClickFinish = () => {
        setText('Comenzar'); 
        setValueFinish(!valueFinish);
        FinalizarDia(); 
    };

    return (  
        <ButtonProvider>
            <Paper  
                className={ classes.paperFunction } 
                elevation={3}
            >
                <Watch />
                <div className={ classes.containerText }>
                    <Typography className={ classes.text } variant="h4" gutterBottom>
                        Horas
                    </Typography>
                    <Typography className={ classes.text } variant="h4" gutterBottom>
                        Minutos
                    </Typography>
                </div>  

                <RadioButtonsGroup /> 

                <div className={ classes.buttons }>
                    <ButtonPrimary 
                        text= { text }   
                        disabled = { valuesRadio } 
                        onClick={ handleClickStart }
                    /> 
                    <ButtonPrimary 
                        text=" Finalizar "  
                        disabled = { valueFinish } 
                        onClick={ handleClickFinish }

                    /> 
                </div>
            </Paper>  
        </ButtonProvider>  
    )
}
