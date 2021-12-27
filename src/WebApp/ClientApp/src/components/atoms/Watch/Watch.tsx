import { useState, useEffect } from 'react';
import { makeStyles          } from '@material-ui/core';
import   Typography            from '@material-ui/core/Typography';
import   Reloj                 from '../../atoms/Svg/clock.svg';
// import   HorasTrabajadas       from '../../../services/HorasTrabajadas/horasTrabajadas';

const useStyles = makeStyles({
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

export const Watch = () => {

    const classes = useStyles();

    // const [horasTrabajadas, setHorasTrabajadas] = useState<any>(null);

    // const [isLoading, setLoading] = useState(true);

    // useEffect( () => { 
    //     async function horas () {
    //         const response: any =  await HorasTrabajadas()
            
    //         if( response.status === 200 ) {
    //             setHorasTrabajadas(response.data.data);
    //             setLoading(false);
    //         }
    //         else {
    //             setHorasTrabajadas({});
    //         }
            
    //     } 
    //     horas();
    // }, [horasTrabajadas]); 

    // if(isLoading === false ) {
    //     console.log(horasTrabajadas);
    // }

    // const horas = () => {
    //     if(isLoading) {
    //         return (
    //             <Typography className={ classes.counter } variant="h1" gutterBottom>
    //                 00
    //             </Typography>
    //         )
    //     }
    //     else {
    //         return (
    //             <Typography className={ classes.counter } variant="h1" gutterBottom>
    //                 { horasTrabajadas.hours }
    //             </Typography>
    //         ) 
    //     }
    // }

    // const minutos = () => {
    //     if(isLoading) {
    //         return (
    //             <Typography className={ classes.counter } variant="h1" gutterBottom>
    //                 00
    //             </Typography>
    //         )
    //     }
    //     else {
    //         return (
    //             <Typography className={ classes.counter } variant="h1" gutterBottom>
    //                 { horasTrabajadas.minutes }
    //             </Typography>
    //         ) 
    //     }
    // }

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

    return ( 
        <section className={ classes.root }>
            <div className={ classes.container }>
                <img src={ Reloj } alt='reloj' />
                <Typography className={ classes.counterSeconds } variant="h3" gutterBottom>
                    {(time.h >= 10)? time.h : "0"+ time.h}
                </Typography>
                {/* { horas() } */}
            </div>
            <Typography className={ classes.points } variant="h1" gutterBottom>
                :
            </Typography>
            <div className={ classes.container }>
                <img src={ Reloj } alt='reloj' />
                <Typography className={ classes.counterSeconds } variant="h3" gutterBottom>
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
    )
}
