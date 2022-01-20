import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Reloj from '../../atoms/Svg/clock.svg';
import RelojSecond from '../../atoms/Svg/clockSecon.svg';
import HorasTrabajadas from '../../../services/HorasTrabajadas/horasTrabajadas';
import { Height } from '@material-ui/icons';

interface props {
    time: any;
    setTime: (value: any) => void;
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '60%',
        height: '60%'
    },

    counterHours: {
        color: '#54CAA6',
        margin: 0,
        textShadow: '2px 4px 4px #BEBEBE',
        position: 'absolute',
        marginLeft: '15%',
        marginTop: '45%',
        top: '-27%',
        left: '2%',
        fontSize: '700%',
    },
    counterMinutes: {
        color: '#54CAA6',
        margin: 0,
        textShadow: '2px 4px 4px #BEBEBE',
        position: 'absolute',
        marginLeft: '15%',
        marginTop: '45%',
        top: '-27%',
        left: '2%',
        fontSize: '700%',
    },
    points: {
        position: 'absolute',
        color: '#54CAA6',
        margin: 0,
        textShadow: '2px 4px 4px #BEBEBE',
        top: '28%',
        left: '105%'

    },
    pointsSecond: {
        position: 'absolute',
        color: '#54CAA6',
        margin: 0,
        textShadow: '2px 4px 4px #BEBEBE',
        top: '-5%',
        left: '90%'

    },
    textSecond: {
        position: 'relative',
        color: '#54CAA6',
        margin: 0,
        textShadow: '1px 1px 3px #BEBEBE',
        top: '5%',
        left: '16%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '100%',

    },
    textHours: {
        position: 'relative',
        color: '#54CAA6',
        margin: 0,
        textShadow: '1px 1px 3px #BEBEBE',
        top: '5%',
        left: '35%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '100%',

    },
    textMinutes: {
        position: 'relative',
        color: '#54CAA6',
        margin: 0,
        textShadow: '1px 1px 3px #BEBEBE',
        top: '5%',
        left: '35%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '100%',

    },
    containerSeconds: {
        position: 'relative',
        marginLeft: '15%',
        marginTop: '45%',
        width: '-35%',
        height: '1%',
    },
    counterSeconds: {
        color: '#54CAA6',
        margin: 0,
        textShadow: '2px 4px 4px #BEBEBE',
        position: 'absolute',
        fontSize: '350%',
        top: '3%',
        left: '18%',

    },
    watchHours: {
        position: 'relative',
        top: '8%',
        left: '27%'
    },
    watchMinutes: {
        position: 'relative',
        top: '8%',
        left: '34%'
    },
    watchSecond: {
        position: 'relative',
        top: '42%',
        left: '40%'
    },



});

export const Watch = ({ time, setTime }: props) => {

    const classes = useStyles();

    const [horasTrabajadas, setHorasTrabajadas] = useState<any>(null);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function horas() {
            const response: any = await HorasTrabajadas()

            if (response.status === 200) {
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

        if (isLoading === false) {
            setTime({ ms: 0, s: 0, m: horasTrabajadas.minutes, h: horasTrabajadas.hours });
            // console.log("seteo de time" + time.m, time.h );
        }


    }, [isLoading]);

    // console.log("fuera del 2do useEffect" + time.m, time.h );

    const horas = () => {
        if (isLoading) {
            return (
                <Typography className={classes.counterHours} gutterBottom>
                    00
                </Typography>
            )
        }
        else {

            return (
                <Typography className={classes.counterHours} gutterBottom>
                    {time.h}
                </Typography>

            )
        }
    }

    const minutos = () => {
        if (isLoading) {
            return (
                <Typography className={classes.counterMinutes} gutterBottom>
                    00
                </Typography>
            )
        }
        else {
            return (
                <Typography className={classes.counterMinutes} gutterBottom>
                   {(time.m >= 10) ? time.m : "0" + time.m}
                </Typography>
            )
        }
    }

    return (
        <section className={classes.root}>
            <div className={classes.watchHours}>
                <img src={Reloj} alt='reloj' />
                {horas()}
                <div>
                    <Typography className={classes.points} variant="h3" gutterBottom>
                        :
                    </Typography>
                </div>
                <Typography className={classes.textHours} gutterBottom>
                    Horas
                </Typography>
            </div>

            <div className={classes.watchMinutes}>
                <img src={Reloj} alt='reloj' />
                {minutos()}
                <Typography className={classes.textMinutes} gutterBottom>
                    Minutos
                </Typography>
            </div>

            <div className={classes.watchSecond}>

                <img src={RelojSecond} alt='reloj' />

                <Typography className={classes.counterSeconds} variant="h6" gutterBottom>
                    {(time.s >= 10) ? time.s : "0" + time.s}
                </Typography>
                <Typography className={classes.pointsSecond} variant="h3" gutterBottom>
                    "
                </Typography>
                <Typography className={classes.textSecond} gutterBottom>
                    Segundos
                </Typography>
            </div>

        </section>
    )
}
