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
        height: '90%',
        marginBottom: '15%',
        marginTop:'0%',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginLeft: '5%',
        marginRight: '5%',
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
    textHours: {
        position:'relative',
        color: '#54CAA6',
        margin: 0, 
        textShadow: '1px 1px 3px #BEBEBE', 
        // marginRight: '6.5rem',
        top:'60%',
        left:'22%',
        fontSize:'95%',
    },
    textMinutes: {
        position:'relative',
        color: '#54CAA6',
        margin: 0, 
        textShadow: '1px 1px 3px #BEBEBE', 
        // marginRight: '6.5rem',
      top:'60%',
      left:'54%',
        fontSize:'95%',
    },
    textSeconds: {
        position:'relative',
        color: '#54CAA6',
        margin: 0, 
        textShadow: '1px 1px 3px #BEBEBE', 
        top:'0%',
        left:'77%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '80%',
    },
    root:{
        width:'100%',

    },
});

export const PaperClock = (  ) => {   

    // Texto de los botones
    
    const INICIO = "Iniciar actividades";

    const FINALIZAR = "Finalizar actividades";

    const PAUSAR = "Pausar actividades";

    const REANUDAR = "Reanudar actividades";

    // Estados del dia

    const INICIADO = "INICIADO";

    const SIN_INICIAR = "SIN_INICIAR";

    const PAUSADO = "PAUSADO";

    const FINALIZADO = "FINALIZADO";

    const classes = useStyles();



    const [text, setText] = useState(INICIO);

    const [valueFinish, setValueFinish] = useState(true);
    
    const { valuesRadio } = useContext( ValueContext );
    
    const [valueLugar, setValueLugar] = useState<string>('');

    //Prueba de estado de radioButtons
    const { valuesRadioContext } = useContext( RadContext );
    const [ disableRadio, setDisableRadio ] = useState(valuesRadioContext);
    
    // API DE ESTADO ACTUAL
    const [ estadoActual, setEstadoActual ] = useState<any>(null);

    const [isLoading, setLoading] = useState(true);
    
    //Estructura de Watch
    const [time, setTime] = useState<any>({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState<any>();
    
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
            debugger
            if(isLoading === false) {
                if( estadoActual.estado === SIN_INICIAR ) {
                    console.log("Día sin iniciar");
                }
                if( estadoActual.estado === INICIADO ) {
                    setText(PAUSAR);
                    start();
                }
                else if( estadoActual.estado === PAUSADO ) {
                    setText(REANUDAR);
                }
                else if( estadoActual.estado === FINALIZADO ) {
                    setText(INICIO);
                }
            }
        }

        changeText();
       
      }, [ isLoading ]); 

        

    const start = () => {
        setInterv(setInterval(run, 10));
        run();
      };
    
      var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
    
    //   debugger
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
    
    //   const reset = () => {
    //     clearInterval(interv);
    //     setTime({ms:0, s:0, m:0, h:0})
    //   };
    
      const resume = () => start();

    //Estructura de paperClock
    const handleClickStart = () => {
        if ( text ===  INICIO ) {
            IniciarDia(valueLugar);
            start();
            setText(PAUSAR);
            setValueFinish(!valueFinish);
            setDisableRadio(!disableRadio);
        }
        else if ( text ===  PAUSAR ) { 
            PausarDia(valueLugar);
            stop();
            setText(REANUDAR);
            setDisableRadio(!disableRadio);
        }
        else if ( text ===  REANUDAR) {
            Reiniciar(valueLugar);
            resume();
            setText(PAUSAR);
            setDisableRadio(!disableRadio);
        }
    };

    const handleClickFinish = () => {
        setText(INICIO); 
        stop();
        setValueFinish(!valueFinish);
        FinalizarDia(); 
        setDisableRadio(!disableRadio);
    };

    const radioButtons = () => {
        if(isLoading === false) {

            if(estadoActual.estado === SIN_INICIAR) {
                return(
                    <RadioButtonsGroup valueLugar={ valueLugar } setValueLugar={ setValueLugar } disableRadio={ disableRadio } />
                )
            }

            if(estadoActual.estado === INICIADO) {

                return(
                    <RadioButtonsGroup valueLugar={ estadoActual.lugarTrabajo } setValueLugar={ setValueLugar } disableRadio={ !disableRadio } />
                )
            }
            
            if(estadoActual.estado === PAUSADO) {
                return(
                    <RadioButtonsGroup valueLugar={ valueLugar } setValueLugar={ setValueLugar } disableRadio={ disableRadio } />
                )
            }

            if(estadoActual.estado === FINALIZADO) {
                return(
                    <RadioButtonsGroup valueLugar={ valueLugar } setValueLugar={ setValueLugar } disableRadio={ disableRadio } />
                )
            }
        }
    }

    const buttonsBeginEnd = () => {

        if(isLoading === false) {

            if(estadoActual.estado === SIN_INICIAR) {
                return(
                    <div className={ classes.buttons }>
                        <ButtonPrimary 
                            text= { text }  
                            disabled = { valuesRadio } 
                            onClick={ () => handleClickStart() }
                        /> 
                        <ButtonPrimary 
                            text={FINALIZAR} 
                            disabled = { valueFinish } 
                            onClick={ () => handleClickFinish() }
                        /> 
                    </div>
                )
            }

            if(estadoActual.estado === INICIADO) {
                return(
                    <div className={ classes.buttons }>
                        <ButtonPrimary 
                            text= { text }  
                            disabled = { !valuesRadio } 
                            onClick={ () => handleClickStart() }
                        /> 
                        <ButtonPrimary 
                            text={FINALIZAR}  
                            disabled = { !valueFinish } 
                            onClick={ () => handleClickFinish() }
                        /> 
                    </div>
                )
            }

            if(estadoActual.estado === PAUSADO) {
                return(
                    <div className={ classes.buttons }>
                        <ButtonPrimary 
                            text= { text }   
                            disabled = { valuesRadio } 
                            onClick={ () => handleClickStart() }
                        /> 
                        <ButtonPrimary 
                            text={FINALIZAR} 
                            disabled = { !valueFinish } 
                            onClick={ () => handleClickFinish() }

                        /> 
                    </div>
                )
            }

            if(estadoActual.estado === FINALIZADO) {
                return(
                    <div className={ classes.buttons }>
                        <ButtonPrimary 
                            text= { text }  
                            disabled = { valuesRadio } 
                            onClick={ () => handleClickStart() }
                        /> 
                        <ButtonPrimary 
                            text={FINALIZAR} 
                            disabled = { valueFinish } 
                            onClick={ () => handleClickFinish() }

                        /> 
                    </div>
                )
            }
        }
    }

    return ( 
        <div className={classes.root}>
        <ButtonProvider>
            <Paper  
                className={ classes.paperFunction } 
                elevation={3}
            >

                <Watch time = { time } setTime = { setTime } />

                 
                {/* <Typography className={ classes.textHours }  gutterBottom>
                        Horas
                    </Typography>
                    <Typography className={ classes.textMinutes } gutterBottom>
                        Minutos
                    </Typography>
                    <Typography className={ classes.textSeconds }gutterBottom>
                        Segundos
                    </Typography> */}
                { radioButtons() }

                { buttonsBeginEnd() }
                
            </Paper>  
        </ButtonProvider>  
        </div> 
    )
}
