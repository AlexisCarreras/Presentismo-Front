import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { AccordionDetail } from '../../organisms/Accordion/AccordionDetail';
import { AccordionUpdate } from '../../organisms/Accordion/AccordionUpdate';
import RegistroDeHoras from '../../../services/RegistroDeHoras/registroDeHoras';
import { Skeleton } from "@material-ui/lab";
import { getTime, parse } from "date-fns";

const useStyles = makeStyles({
    card: {
        width: '100%',
        marginTop: '5%',
        marginLeft: '5%',
        // marginRight: '3rem',
        // marginLeft: '1rem',
    },
    skeleton: {
        width: '90%',
        height: '900px',
        marginTop: '5%',
        marginRight: '5%',
        marginLeft: '5%',

    },
    cardHeader: {
        backgroundColor: '#007DC4',
        color: '#FFFF',
        fontSize: '100%',
        textAlign: 'center',
        fontFamily: '"Montserrat", sans-serif',
    },
    date: {
        color: '#7D7D7D',
        fontSize: '88px',
        padding: '1rem',
    }
});

export const Details = () => {

    const classes = useStyles();

    const [registroHora, setRegistroHora] = useState<any>(null);

    const [isLoading, setLoading] = useState(true);
   // const [inicio, setInicio] = useState<any>(localStorage.getItem('Inicio'));

    useEffect(() => {
        async function loadDetails() {
            const response: any = await RegistroDeHoras()

            if (response.status === 200) {
                setRegistroHora(response.data);
                setLoading(false);
            }
            else {
                setRegistroHora({});
            }

            // console.log(response);

        }
        loadDetails();
    }, [registroHora]);


    // const fecha = () => {
    //     setInicio(localStorage.getItem('Inicio'));
    //     var date = new Date(inicio);

    //     return date;
    // }

    return (
        <div >
            {isLoading ? (
                <div className={classes.skeleton}>

                    <Skeleton variant="text" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />

                </div>
            ) : (registroHora &&
                <Card className={classes.card}>
                    <CardHeader
                        className={classes.cardHeader}
                        disableTypography
                        title='Detalles'
                    />
                     <AccordionUpdate
                     ></AccordionUpdate>
                    {  
                        registroHora.data.map((a: any) =>
                            <div>
                                <AccordionDetail
                                    key={a.idRegistro}
                                    id={a.idRegistro}
                                    inicio={a.begin}
                                    fin={a.end}
                                    lugarTrabajo={a.lugarTrabajo}
                                    tipoHora={a.tipoHora}
                                 
                                />
                            </div>
                        )
                    }
                </Card>)
            }
        </div>
    )
}

