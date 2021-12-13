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

    const [registroHora, setRegistroHora] = useState<any>({});
    
    
    useEffect( () => { 
        //Manejar excepcion
        async function loadDetails () {
            const response: any =  await RegistroDeHoras()
            // console.log(response.status);
            
            if( response.status === 200 ) {
                setRegistroHora(response.data);
            }
            else {
                setRegistroHora({});
            }
            // console.log(response.data);
            // console.log(registroHora);
            // return response.data;
        } 
        loadDetails();
    }, []); 
    
    // const fecha : string = String(registroHora.header.date);

    const idRegsitro : string = String (registroHora.data);
    const inicio : string = String (registroHora.inicio);
    const lugarTrabajo : string = String (registroHora.lugarTrabajo);
    
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
                    <Typography 
                        className={ classes.date } 
                        variant='subtitle1' 
                        align='center' 
                    > 
                        {/* { fecha.slice(0,-9) }  */}
                        10 de Diciembre 2021
                    </Typography> 

             
                    <AccordionDetail 
                        idRegsitro = { idRegsitro }
                        inicio= { inicio }
                        lugarTrabajo= { lugarTrabajo }
                    />
                    {/* <AccordionDetail />
                    <AccordionDetail /> */}
 
                </Card>
            }
        </div>
    )
}

 