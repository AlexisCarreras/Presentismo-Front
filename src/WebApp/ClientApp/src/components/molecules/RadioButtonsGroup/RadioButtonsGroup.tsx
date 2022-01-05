import   React, { useContext, useEffect   } from 'react';
import { makeStyles            } from '@material-ui/core';
import   FormControl             from '@material-ui/core/FormControl';
import   RadioGroup              from '@material-ui/core/RadioGroup';
import   Typography              from '@material-ui/core/Typography';
import { RadioButtonsActivated } from '../../atoms/RadioButtons/RadioButtonsActivated';
import { ValueContext          } from '../../../hooks/UseContext/ValueContext';
import { useState              } from 'react';
// import { RadContext            } from '../../../hooks/UseContext/RadContext';

import   LugarTrabajo            from '../../../services/LugarTrabajo/lugarTrabajo';

interface props {
    valueLugar     : string;
    setValueLugar  : ( value: string ) => void;
    disableRadio   : boolean;
}

const useStyles = makeStyles({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        color: '#B2B2B2',
        fontSize: '19px',
        width: '67%',
        justifyContent: 'flex-start ',
    }, 
    radioGroup: {
        width: '80%',
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end',
        marginTop: '1rem',
        marginBottom: '1.75rem',
    },
});

export const RadioButtonsGroup = ( { valueLugar, setValueLugar, disableRadio }: props ) => {

    const classes = useStyles();  

    // const { valuesRadioContext } = useContext( RadContext );
    // const [ disableRadio ] = useState(valuesRadioContext);
 
    const { valuesRadio, setValuesRadio } = useContext(ValueContext); 

    const [ lugarTrabajo, setLugarTrabajo ] = useState<any>(null);

    useEffect( () => { 
        async function lugarTrabajo () {
            const response: any =  await LugarTrabajo()
            
            if( response.status === 200 ){
                setLugarTrabajo(response.data);
            }
        } 
        lugarTrabajo();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueLugar((event.target as HTMLInputElement).value);
      if( valuesRadio === true ) {
          setValuesRadio(!valuesRadio);
      }
    };

    return (
        <div>
            {
            lugarTrabajo &&
                <FormControl className={ classes.container } component="fieldset">
                    <Typography  className={ classes.text } variant="body1" >
                        Lugar de Trabajo:
                    </Typography>
                    <RadioGroup  
                        className={ classes.radioGroup }
                        aria-label="lugarTrabajo" 
                        name="lugarTrabajo" 
                        value={valueLugar} 
                        onChange={handleChange}
                    >
                        {
                            lugarTrabajo.data.map((a: any) =>
                                <RadioButtonsActivated 
                                    key = { a.id }
                                    value = { a.nombre }
                                    disabled = { disableRadio } 
                                />
                            )
                        }
                    </RadioGroup>
                </FormControl>
            }
        </div>
    )
}
