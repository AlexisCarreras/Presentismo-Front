import { useContext, useState  } from 'react';
import { makeStyles, Paper     } from '@material-ui/core';
import { RadioButtonsGroup     } from '../RadioButtonsGroup/RadioButtonsGroup';
import   Typography              from '@material-ui/core/Typography';
// import { Watch                 } from '../../atoms/Watch/Watch';
import { ButtonPrimary         } from '../../atoms/Buttons/Primary/ButtonPrimary';
import { ValueContext          } from '../../../hooks/UseContext/ValueContext';
import { ButtonProvider        } from '../../../context/ButtonProvider';
import   Reloj                   from '../../atoms/Svg/clock.svg';

import IniciarDia   from '../../../services/IniciarDia/iniciarDia';
import FinalizarDia from '../../../services/FinalizarDia/finalizarDia';
import PausarDia    from '../../../services/PausarDia/pausarDia';
import Reiniciar    from '../../../services/Reiniciar/reiniciar';
// import EstadoActual from '../../../services/EstadoActual/estadoActual';

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

    root: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem',
        width: '100%',
    },
    container: {
        position: 'relative',
        marginRight: '3%',
        marginLeft: '3%',
    },
    counter: {
        color: '#54CAA6',
        margin: 0, 
        textShadow: '2px 4px 4px #BEBEBE', 
        position: 'absolute',
        top: 65,
        left: 70,
    }, 
    points: {
        display: 'flex',
        alignItems: 'center',
        color: '#54CAA6', 
        margin: 0, 
        textShadow: '2px 4px 4px #BEBEBE', 
    },
    containerSeconds: {
        position: 'relative',
        marginRight: '3%',
        marginLeft: '3%',
        display: 'flex',
        alignItems: 'center',
    },
    watchSeconds: {
        width: '10rem',
    },
    counterSeconds: {
        color: '#54CAA6',
        margin: 0, 
        textShadow: '2px 4px 4px #BEBEBE', 
        position: 'absolute',
        top: 92,
        left: 50,
        fontSize: '55px',
    }, 
});

export const PaperClock = (  ) => {   

    const classes = useStyles();

    const [text, setText] = useState('Comenzar');

    const [valueFinish, setValueFinish] = useState(true);
    
    const { valuesRadio } = useContext( ValueContext );
    
    const [valueLugar, setValueLugar] = useState<string>('');
    
    // REVISAR API DE ESTADO ACTUAL
    // const [ estadoActual, setEstadoActual ] = useState<any>(null);

    // const [isLoading, setLoading] = useState(true);
 
    // useEffect( () => { 
    //     async function estado () {
    //         const response: any =  await EstadoActual()
            
    //         if( response.status === 200 ) {
    //             setEstadoActual(response.data.data);
    //             setLoading(false);
    //         }
    //         else {
    //             setEstadoActual(null);
    //         }
            
    //     } 
    //     estado();
    // }, []); 
    
    // if(isLoading === false){
    //     if(estadoActual.estado === "INICIADO"){
    //         console.log(estadoActual.estado);
    //     }
    // }

    
    //Estructura de Watch
    const [time, setTime] = useState<any>({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState<any>();
    const [status, setStatus] = useState<any>(0);

    const start = () => {
        run();
        setStatus(1);
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
        setStatus(2);
      };
    
      const reset = () => {
        clearInterval(interv);
        setStatus(0);
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
        }
        else if ( text ===  'Pausar' ) { 
            PausarDia();
            stop();
            setText('Reanudar');
        }
        else if ( text ===  'Reanudar' ) {
            Reiniciar(valueLugar);
            resume();
            console.log("reiniciar");
            setText('Pausar');
        }
    };

    const handleClickFinish = () => {
        setText('Comenzar'); 
        reset();
        setValueFinish(!valueFinish);
        FinalizarDia(); 
    };

    // console.log("PapperClock: " + valueLugar); 

    return (  
        <ButtonProvider>
            <Paper  
                className={ classes.paperFunction } 
                elevation={3}
            >
                <section className={ classes.root }>
                    <div className={ classes.container }>
                        <img src={ Reloj } alt='reloj' />
                        <Typography className={ classes.counter } variant="h1" gutterBottom>
                            {(time.h >= 10)? time.h : "0"+ time.h}
                        </Typography>
                        {/* { horas() } */}
                    </div>
                    <Typography className={ classes.points } variant="h1" gutterBottom>
                        :
                    </Typography>
                    <div className={ classes.container }>
                        <img src={ Reloj } alt='reloj' />
                        <Typography className={ classes.counter } variant="h1" gutterBottom>
                            {(time.m >= 10)? time.m : "0"+ time.m}
                        </Typography>
                        {/* { minutos() } */}
                    </div>
                    <Typography className={ classes.points } variant="h1" gutterBottom>
                        :
                    </Typography>
                    <div className={ classes.containerSeconds }>
                        <img src={ Reloj } className={ classes.watchSeconds } alt='reloj' />
                        <Typography className={ classes.counterSeconds } variant="h3" gutterBottom>
                            {(time.s >= 10)? time.s : "0"+ time.s}
                        </Typography>
                    </div>
                    
                </section>

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

                <RadioButtonsGroup valueLugar={ valueLugar } setValueLugar={ setValueLugar } /> 

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
