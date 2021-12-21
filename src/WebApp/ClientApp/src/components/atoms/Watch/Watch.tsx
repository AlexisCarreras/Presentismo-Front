import { useState, useEffect } from 'react';
import { makeStyles          } from '@material-ui/core';
import   Typography            from '@material-ui/core/Typography';
import   Reloj                 from '../../atoms/Svg/clock.svg';
import   HorasTrabajadas       from '../../../services/HorasTrabajadas/horasTrabajadas';

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
}); 

export const Watch = () => {

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
    }, [horasTrabajadas]); 

    if(isLoading === false ) {
        // console.log(horasTrabajadas);
    }

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
                    { horasTrabajadas.hours }
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
                    { horasTrabajadas.minutes }
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
            
        </section>
    )
}
