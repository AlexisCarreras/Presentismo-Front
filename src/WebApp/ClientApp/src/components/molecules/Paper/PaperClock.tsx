import { useContext, useState, useEffect  } from 'react';
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
import EstadoActual from '../../../services/EstadoActual/estadoActual';

import { RadContext } from '../../../hooks/UseContext/RadContext';


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
        justifyContent: 'space-around',
        marginBottom: '2.25rem',
        marginLeft: '7%'
    }, 
    text: {
        color: '#54CAA6',
        margin: 0, 
        textShadow: '1px 1px 3px #BEBEBE', 
        // marginRight: '6.5rem',
        marginLeft: '2rem',
    },
    textSeconds: {
        color: '#54CAA6',
        margin: 0, 
        textShadow: '1px 1px 3px #BEBEBE', 
        marginRight: '3rem',
        display: 'flex',
        alignItems: 'center',
    },
});

export const PaperClock = (  ) => {   

    const classes = useStyles();

    const [text, setText] = useState('Comenzar');

    const [valueFinish, setValueFinish] = useState(true);
    
    const { valuesRadio } = useContext( ValueContext );
    
    const [valueLugar, setValueLugar] = useState<string>('');

    //Prueba de estado de radioButtons
    const { valuesRadioContext } = useContext( RadContext );
    const [ disableRadio, setDisableRadio ] = useState(valuesRadioContext);
    
    // REVISAR API DE ESTADO ACTUAL
    const [ estadoActual, setEstadoActual ] = useState<any>(null);

    const [isLoading, setLoading] = useState(true);
 
    useEffect( () => { 
        async function estado () {
            const response: any =  await EstadoActual()
            
            if( response.status === 200 ) {
                setEstadoActual(response.data.data);
                setLoading(false);
            }
            else {
                setEstadoActual(null);
            }
            
        } 
        estado();
    }, []);
    

    //prueba
    useEffect(() => {
        function changeText() {
            if(isLoading === false) {
                if( estadoActual.estado === "INICIADO" ) {
                    setText("Pausar");
                    start();
                }
                else if( estadoActual.estado === "PAUSADO" ) {
                    setText("Reanudar");
                }
                else if( estadoActual.estado === "FINALIZADO" ) {
                    setText("Comenzar");
                }
            }
        }

        changeText();
       
      }, [ isLoading ]); 

        
    //Estructura de Watch
    const [time, setTime] = useState<any>({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState<any>();

    const start = () => {
        run();
        setInterv(setInterval(run, 10));
      };
    
      var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
    
      const run = () => {
        if(updatedM === 60){
          updatedH++;
          updatedM = 0;
        }
        if(updatedS === 60){
          updatedM++;
          updatedS = 0;
        }
        if(updatedMs === 100){
          updatedS++;
          updatedMs = 0;
        }
        updatedMs++;
        return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
      };
    
      const stop = () => {
        clearInterval(interv);
      };
    
      const reset = () => {
        clearInterval(interv);
        setTime({ms:0, s:0, m:0, h:0})
      };
    
      const resume = () => start();

    //Estructura de paperClock
    const handleClickStart = () => {
        if ( text ===  'Comenzar' ) {
            IniciarDia(valueLugar);
            start();
            setText('Pausar');
            setValueFinish(!valueFinish);
            setDisableRadio(!disableRadio);
        }
        else if ( text ===  'Pausar' ) { 
            PausarDia();
            stop();
            setText('Reanudar');
            setDisableRadio(!disableRadio);
        }
        else if ( text ===  'Reanudar' ) {
            Reiniciar(valueLugar);
            resume();
            setText('Pausar');
            setDisableRadio(!disableRadio);
        }
    };

    const handleClickFinish = () => {
        setText('Comenzar'); 
        reset();
        setValueFinish(!valueFinish);
        FinalizarDia(); 
        setDisableRadio(!disableRadio);
    };

    const radioButtons = () => {
        if(isLoading === false) {
            if(estadoActual.estado === "INICIADO") {

                return(
                    <RadioButtonsGroup valueLugar={ estadoActual.lugarTrabajo } setValueLugar={ setValueLugar } disableRadio={ !disableRadio } />
                )
            }
            
            if(estadoActual.estado === "PAUSADO") {
                return(
                    <RadioButtonsGroup valueLugar={ valueLugar } setValueLugar={ setValueLugar } disableRadio={ disableRadio } />
                )
            }

            if(estadoActual.estado === "FINALIZADO") {
                return(
                    <RadioButtonsGroup valueLugar={ valueLugar } setValueLugar={ setValueLugar } disableRadio={ disableRadio } />
                )
            }
        }
    }

    const buttonsBeginEnd = () => {

        if(isLoading === false) {
            if(estadoActual.estado === "INICIADO") {
                return(
                    <div className={ classes.buttons }>
                        <ButtonPrimary 
                            text= { text }  
                            disabled = { !valuesRadio } 
                            onClick={ () => handleClickStart() }
                        /> 
                        <ButtonPrimary 
                            text=" Finalizar "  
                            disabled = { !valueFinish } 
                            onClick={ () => handleClickFinish() }
                        /> 
                    </div>
                )
            }

            if(estadoActual.estado === "PAUSADO") {
                return(
                    <div className={ classes.buttons }>
                        <ButtonPrimary 
                            text= { text }   
                            disabled = { valuesRadio } 
                            onClick={ () => handleClickStart() }
                        /> 
                        <ButtonPrimary 
                            text=" Finalizar "  
                            disabled = { !valueFinish } 
                            onClick={ () => handleClickFinish() }

                        /> 
                    </div>
                )
            }

            if(estadoActual.estado === "FINALIZADO") {
                return(
                    <div className={ classes.buttons }>
                        <ButtonPrimary 
                            text= { text }  
                            disabled = { valuesRadio } 
                            onClick={ () => handleClickStart() }
                        /> 
                        <ButtonPrimary 
                            text=" Finalizar "  
                            disabled = { valueFinish } 
                            onClick={ () => handleClickFinish() }

                        /> 
                    </div>
                )
            }
        }
    }

    return (  
        <ButtonProvider>
            <Paper  
                className={ classes.paperFunction } 
                elevation={3}
            >

                <Watch time = { time } setTime = { setTime } />

                <div className={ classes.containerText }>
                    <Typography className={ classes.text } variant="h4" gutterBottom>
                        Horas
                    </Typography>
                    <Typography className={ classes.text } variant="h4" gutterBottom>
                        Minutos
                    </Typography>
                    <Typography className={ classes.textSeconds } variant="h6" gutterBottom>
                        Segundos
                    </Typography>
                </div>  

                { radioButtons() }

                { buttonsBeginEnd() }
                
            </Paper>  
        </ButtonProvider>  
    )
}
