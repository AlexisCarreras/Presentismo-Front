import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Reloj from '../../atoms/Svg/clock.svg';
import RelojSecond from '../../atoms/Svg/clockSecon.svg';
import HorasTrabajadas from '../../../services/HorasTrabajadas/horasTrabajadas';
import { Height } from '@material-ui/icons';
import { FenceSharp } from '@mui/icons-material';

interface props {
    time: any;
    setTime: (value: any) => void;
<<<<<<< HEAD
    loadign:boolean;
=======
    loadign: boolean;
>>>>>>> FacundoFront
}

const useStyles = makeStyles({
    root: {
<<<<<<< HEAD
        width:                      '100%',
        alignItems:                 'center',
        display:                    'flex',
        justifyContent:             'center',
        alignContent:               'center',
        flexFlow:                   'colum wrap',
        paddingTop:                 '5%',
        paddingBottom:              '%'

    },

    textMinutes: {
        color:                      '#007dc4',
        margin:                     0,
        textShadow:                 '1px 1px 3px #BEBEBE',
        alignItems:                 'center',
        fontSize:                   '150%',
        fontFamily:                 '"Montserrat", sans-serif',
        float:                      'left'
    },

    counter: {
        color:                      '#007DC4',
        margin:                     0,
        padding:                    '2%',
        textShadow:                 '1px 1px 3px #BEBEBE',
        fontFamily:                 '"Montserrat", sans-serif',
        textAlign:                  'center'
    },
=======
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexFlow: 'colum wrap',
        paddingTop: '5%',
        paddingBottom: '0%'

    },

    textMinutes: {
        color: '#007dc4',
        margin: 0,
        textShadow: '1px 1px 3px #BEBEBE',
        alignItems: 'center',
        fontSize: '150%',
        fontFamily: '"Montserrat", sans-serif',
        float: 'left'
    },

    counter: {
        color: '#007DC4',
        margin: 0,
        padding: '2%',
        textShadow: '1px 1px 3px #BEBEBE',
        fontFamily: '"Montserrat", sans-serif',
        textAlign: 'center'
    },

    date: {
        color: '#007DC4',
        margin: 0,
        paddingTop: '0%',
        textShadow: '1px 1px 3px #BEBEBE',
        fontFamily: '"Montserrat", sans-serif',
        textAlign: 'center'
    },

});
const fecha = () => {

    const hoy = new Date();
>>>>>>> FacundoFront


    return hoy.toLocaleDateString("es-ES", { weekday: 'long', day: 'numeric', month: 'long' });

<<<<<<< HEAD
export const Watch = ({ time, setTime, loadign}: props) => {
=======
};
export const Watch = ({ time, setTime, loadign }: props) => {
>>>>>>> FacundoFront

    const classes = useStyles();


    const [isLoading, setLoading] = useState(loadign);

    // useEffect(() => {
    //     async function horas() {
    //         const response: any = await HorasTrabajadas()

    //         if (response.status === 200) {
    //             setHorasTrabajadas(response.data.data);
    //             setLoading(false);
    //             console.log(horasTrabajadas.minutes);
    //         }
    //         else {
    //             setHorasTrabajadas({});
    //         }
    //     }

    //     horas();
    // }, []);

    useEffect(() => {

        if (isLoading === true) {
            console.log(time.minutes);
            setTime({ ms: 0, s: 0, m: time.minutes, h: time.hours });
<<<<<<< HEAD
    
=======

>>>>>>> FacundoFront
        }
        console.log('no entro');
    }, [isLoading]);

    const horas = () => {
        if (isLoading) {
            return (
                <Typography variant='h1' gutterBottom>
                    00
                </Typography>
            )
        }
        else {

            return (
                <Typography variant='h1' gutterBottom>
<<<<<<< HEAD
                    {('0'+time.h).slice(-2)}
=======
                    {('0' + time.h).slice(-2)}
>>>>>>> FacundoFront
                </Typography>

            )
        }
    }

    const minutos = () => {
        if (isLoading) {
            return (
                <Typography variant='h1' gutterBottom>
                    00 :
                </Typography>
            )
        }
        else {
<<<<<<< HEAD
         
            return (
                <Typography variant='h1' gutterBottom>
                    
                    {('0'+time.m).slice(-2)}
=======

            return (
                <Typography variant='h1' gutterBottom>

                    {('0' + time.m).slice(-2)}
>>>>>>> FacundoFront
                </Typography>
            )
        }
    }

    return (
        <section className={classes.root}>
<<<<<<< HEAD
         {loadign ? (
             <Skeleton  animation="wave" />
         ):(
         <div className={classes.root}>
            <div className={classes.counter}>

                {horas()}
                <div className={classes.counter}>
                    <div>Horas</div>

                </div>
           </div>
            <div className={classes.counter}>

                <Typography variant='h1' gutterBottom>
                    :
                </Typography>
                <div className={classes.counter}>
                    <div>.</div>
                </div>
            </div>

            <div className={classes.counter}>

                {minutos()}
                <div className={classes.counter}>
                    <div>Minutos</div>
                </div>
            </div>
            <div className={classes.counter}>

                <Typography variant='h1' gutterBottom>
                    :
                </Typography>
                <div className={classes.counter}>
                    <div>.</div>
                </div>
            </div>
            <div className={classes.counter}>
                <Typography variant="h1" gutterBottom>
                    {(time.s >= 10) ? time.s : "0" + time.s}
                </Typography>

                <div className={classes.counter}>
                    <div>Segundo</div>
                </div>
            </div>
            </div>)}
        </section>
=======
            {loadign ? (
                <Skeleton animation="wave" />
            ) : (
                <div>
                    <div className={classes.date}>
                        <Typography variant="h5" gutterBottom>
                            {fecha()}
                        </Typography>

                    </div>
                    <div className={classes.root}>
                        
                        <div className={classes.counter}>

                            {horas()}

                        </div>
                        <div className={classes.counter}>

                            <Typography variant='h1' gutterBottom>
                                :
                            </Typography>

                        </div>

                        <div className={classes.counter}>

                            {minutos()}

                        </div>
                        <div className={classes.counter}>

                            <Typography variant='h1' gutterBottom>
                                :
                            </Typography>

                        </div>
                        <div className={classes.counter}>
                            <Typography variant="h1" gutterBottom>
                                {(time.s >= 10) ? time.s : "0" + time.s}
                            </Typography>


                        </div>

                    </div>
                    
                </div>
            )
            }
        </section >
>>>>>>> FacundoFront
    )
}