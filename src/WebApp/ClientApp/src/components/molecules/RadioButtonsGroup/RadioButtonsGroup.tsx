import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import { RadioButtonsActivated } from '../../atoms/RadioButtons/RadioButtonsActivated';
import { ValueContext } from '../../../hooks/UseContext/ValueContext';
import { useState } from 'react';
// import { RadContext            } from '../../../hooks/UseContext/RadContext';

import LugarTrabajo from '../../../services/LugarTrabajo/lugarTrabajo';
import { Skeleton } from '@material-ui/lab';

interface props {
    valueLugar: string;
    setValueLugar: (value: string) => void;
    disableRadio: boolean;
    cambie: boolean;
    setCambie: (value: boolean) => void;
    SetPrimary:(value: boolean) => void;
    valuePrimaryButton: boolean;
    
}

const useStyles = makeStyles({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'left'
    },
    text: {
        color: '#B2B2B2',
        fontSize: '100%',
        width: '67%',
        justifyContent: 'flex-start ',
        marginLeft: '9.2%',
        padding: '3%'
    },
    radioGroup: {
        width: '80%',
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end',
        marginTop: '1rem',
        marginBottom: '1.75rem',
        marginLeft: '10%',
        marginRight: '10%',
        color: '#555559'

    },
    skeleton: {
        display: 'flex',
        alignItems: 'center',
        height: '150px',
        width: '90%',
        marginLeft: '5%'

    },
});
// Texto de los botones

const INICIO = "Iniciar actividades";

const FINALIZAR = "Finalizar actividades";

const PAUSAR = "Pausar actividades";

const REANUDAR = "Reanudar actividades";

// Estados del dia

const INICIADO = "INICIADO";

const SIN_INICIAR = "SIN_INICIAR";

const PAUSADO = "PAUSADO";

const FINALIZADO = "FINALIZADO";

export const RadioButtonsGroup = ({ valueLugar, setValueLugar, disableRadio, cambie, setCambie,SetPrimary,valuePrimaryButton }: props) => {

    const classes = useStyles();

    // const { valuesRadioContext } = useContext( RadContext );
    //  const [ disableRadio ] = useState(valuesRadioContext);

    const { valuesRadio, setValuesRadio } = useContext(ValueContext);

    const [lugarTrabajo, setLugarTrabajo] = useState<any>(null);
    const [cargue, setCargue] = useState(false);

    useEffect(() => {
        async function lugarTrabajo() {
            const response: any = await LugarTrabajo()

            if (response.status === 200) {
                setLugarTrabajo(response.data);
                setCargue(true);
            }
        }
        lugarTrabajo();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log((event.target as HTMLInputElement).value);
        setValueLugar((event.target as HTMLInputElement).value);
        setCambie(!cambie);
        console.log(!cambie);
        SetPrimary(true);
        if (valuesRadio === true) {     
        
            setValuesRadio(!valuesRadio);
            console.log('value lugar' + valueLugar); 
            
        }
    };

    return (
        <div>
          
            {cargue ? (
                
                lugarTrabajo &&
                <FormControl className={classes.container} component="fieldset">
                    <Typography className={classes.text} variant="body1" >
                        Lugar de Trabajo:
                    </Typography>
                    <RadioGroup
                        className={classes.radioGroup}
                        aria-label="lugarTrabajo"
                        name="lugarTrabajo"
                        value={valueLugar}
                        onChange={handleChange}

                    >{cargue ? (


                        lugarTrabajo.data.map((a: any) =>

                            <RadioButtonsActivated
                                key={a.id}
                                value={a.nombre}
                                disabled={!disableRadio}

                            />
                        )
                    ) : (
                        <Skeleton className={classes.radioGroup} animation="wave" variant='rect' />
                    )}
                    </RadioGroup>
                </FormControl>
            ) : (

                <div>
                    <Skeleton />
                    <Skeleton animation={false} />
                    <Skeleton animation="wave" />
                    <Skeleton />
                    <Skeleton animation={false} />
                    <Skeleton animation="wave" />
                    <Skeleton />
                   
                </div>
            )}
        </div>
    )
}