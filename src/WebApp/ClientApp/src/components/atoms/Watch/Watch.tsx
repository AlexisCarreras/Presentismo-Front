import { useState, useEffect } from 'react';
import { makeStyles          } from '@material-ui/core';
import   Typography            from '@material-ui/core/Typography';
import   Reloj                 from '../../atoms/Svg/clock.svg';
import   HorasTrabajadas       from '../../../services/HorasTrabajadas/horasTrabajadas';

interface props {
    time    : any;
    setTime : ( value: any ) => void;  
}

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

export const Watch = ({ time, setTime }: props) => {

    const classes = useStyles();

    const [horasTrabajadas, setHorasTrabajadas] = useState<any>(null);

    const [isLoading, setLoading] = useState(true);

    useEffect( () => { 
        async function horas () {
            const response: any =  await HorasTrabajadas()
            
            if( response.status === 200 ) {
                setHorasTrabajadas(response.data.data);
                setLoading(false);
            }
            else {
                setHorasTrabajadas({});
            }
        } 

        horas();
    }, []); 
    
    useEffect(() => {
        
        if(isLoading === false ) {
            setTime({ ms:0, s:0, m: horasTrabajadas.minutes, h: horasTrabajadas.hours });
            // console.log("seteo de time" + time.m, time.h );
        }
        
        
    }, [ isLoading ]);

    // console.log("fuera del 2do useEffect" + time.m, time.h );
    
    const horas = () => {
        if(isLoading) {
            return (
                <Typography className={ classes.counter } variant="h1" gutterBottom>
                    00
                </Typography>
            )
        }
        else {

            return (
                <Typography className={ classes.counter } variant="h1" gutterBottom>
                    { time.h }
                </Typography>

            ) 
        }
    }

    const minutos = () => {
        if(isLoading) {
            return (
                <Typography className={ classes.counter } variant="h1" gutterBottom>
                    00
                </Typography>
            )
        }
        else {
            return (
                <Typography className={ classes.counter } variant="h1" gutterBottom>
                    { time.m } 
                </Typography>
            ) 
        }
    }

    return (  
        <section className={ classes.root }> 
            <div className={ classes.container }> 
                <img src={ Reloj } alt='reloj' /> 
                { horas() } 
            </div> 
                <Typography className={ classes.points } variant="h1" gutterBottom> 
                    : 
                </Typography> 
            <div className={ classes.container }> 
                <img src={ Reloj } alt='reloj' /> 
                { minutos() } 
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
