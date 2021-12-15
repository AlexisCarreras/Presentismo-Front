import { useEffect, useState } from "react";
import { makeStyles }      from '@material-ui/core';
import   Card              from '@material-ui/core/Card';
import   CardHeader        from '@material-ui/core/CardHeader';
import   Typography        from '@material-ui/core/Typography';
import { AccordionDetail } from '../../atoms/Accordion/AccordionDetail';

import RegistroDeHoras from '../../../services/RegistroDeHoras/registroDeHoras';

const useStyles = makeStyles({
    card: {
        width: '100%',
        marginTop: '3rem',
        marginRight: '3rem',
        // marginLeft: '1rem',
    },
    cardHeader: {
        backgroundColor: '#54CAA6',
        color: '#FFFF',
        fontSize: '17px',
        textAlign: 'center', 
    },
    date: {
        color: '#7D7D7D',
        fontSize: '15px',
        padding: '1rem',
    }
});

export const Details = () => {

    const classes = useStyles();

    const [registroHora, setRegistroHora] = useState<any>(null);

    const [isLoading, setLoading] = useState(true);

    useEffect( () => { 
        async function loadDetails () {
            const response: any =  await RegistroDeHoras()
            
            if( response.status === 200 ) {
                setRegistroHora(response.data);
                setLoading(false);
            }
            else {
                setRegistroHora({});
            }

        } 
        loadDetails();
    }, [registroHora]); 
    

    const fecha = () => {

        if(isLoading) {
            return (
                <Typography 
                className={ classes.date } 
                variant='subtitle1' 
                align='center' 
                > 
                    ...
                </Typography>
            )
        }
        else {

            const fecha : string = String (registroHora.header.date);
    
            return (
                <Typography 
                className={ classes.date } 
                variant='subtitle1' 
                align='center' 
                > 
                    { fecha.slice(0,-9) }
                </Typography>
            ) 
        }
    }

    return (
        <div>
            {  
            registroHora &&
                <Card className={ classes.card }>
                    
                    <CardHeader
                        className={ classes.cardHeader } 
                        disableTypography
                        title='Detalles'  
                    />
                    
                    { fecha() }
                            
                    {
                        registroHora.data.map((a: any) =>
                            <AccordionDetail 
                                key={ a.idRegistro }
                                inicio= { a.begin }
                                lugarTrabajo= { a.lugarTrabajo }
                            />
                        )
                    }
                </Card>
            }
        </div>
    )
}

 