// import { useState, useEffect } from 'react';
import { makeStyles          } from '@material-ui/core';
import   Typography            from '@material-ui/core/Typography';
import   Reloj                 from '../../atoms/Svg/clock.svg';

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

    // const [countMinutes, setcountMinutes] = useState(0);

    // useEffect(() => {

    //     const timer = setTimeout(() => {
    //         setcountMinutes( countMinutes + 1 );
    //     }, 1000);

    //     return () => clearTimeout(timer);
    //   }, [countMinutes]);

    return ( 
        <section className={ classes.root }>
            <div className={ classes.container }>
                <img src={ Reloj } alt='reloj' />
                <Typography className={ classes.counter } variant="h1" gutterBottom>
                    00
                </Typography>
            </div>
            <Typography className={ classes.points } variant="h1" gutterBottom>
                :
            </Typography>
            <div className={ classes.container }>
                <img src={ Reloj } alt='reloj' />
                <Typography className={ classes.counter } variant="h1" gutterBottom>
                    00
                </Typography>
            </div>
            
        </section>
    )
}
