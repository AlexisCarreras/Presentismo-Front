import   React, { useContext, useEffect   } from 'react';
import { makeStyles            } from '@material-ui/core';
import   FormControl             from '@material-ui/core/FormControl';
import   RadioGroup              from '@material-ui/core/RadioGroup';
import   Typography              from '@material-ui/core/Typography';
import { RadioButtonsActivated } from '../../atoms/RadioButtons/RadioButtonsActivated';
import { ValueContext          } from '../../../hooks/UseContext/ValueContext';
import { useState              } from 'react';
import { RadContext            } from '../../../hooks/UseContext/RadContext';

import   LugarTrabajo            from '../../../services/LugarTrabajo/lugarTrabajo';

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

// console.log(LugarTrabajo());

export const RadioButtonsGroup = () => {

    const classes = useStyles();  

    const [value, setValue] = useState('');

    const { valuesRadioContext } = useContext( RadContext );
    const [ disableRadio ] = useState(valuesRadioContext);
 
    const { valuesRadio, setValuesRadio } = useContext(ValueContext); 

    const [ lugarTrabajo, setLugarTrabajo ] = useState<any>({
        data: [{
            id: "",
            nombre: "",
        },
        {
            id: "",
            nombre: "",
        },
        {
            id: "",
            nombre: "",
        }]
    });

    useEffect( () => { 
        async function lugarTrabajo () {
            const response: any =  await LugarTrabajo()
            
            if( response.status === 200 ){
                setLugarTrabajo(response.data);
            }
        } 
        lugarTrabajo();
    }, []);
    
        const homeOffice = lugarTrabajo.data[0].nombre;
        const Cliente    = lugarTrabajo.data[1].nombre;
        const CDA        = lugarTrabajo.data[2].nombre;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
      if( valuesRadio === true ) {
          setValuesRadio(!valuesRadio);
      }
    };
    // console.log(value);    
  
    return (
        <FormControl className={ classes.container } component="fieldset">
            <Typography  className={ classes.text } variant="body1" >
                Lugar de Trabajo:
            </Typography>
            <RadioGroup  
                className={ classes.radioGroup }
                aria-label="lugarTrabajo" 
                name="lugarTrabajo" 
                value={value} 
                onChange={handleChange}
            >
                <RadioButtonsActivated 
                    value= { homeOffice }
                    disabled={ disableRadio } 
                />
                <RadioButtonsActivated 
                    value= { CDA }
                    disabled={ disableRadio } 
                />
                <RadioButtonsActivated 
                    value= { Cliente }
                    disabled={ disableRadio } 
                />
            </RadioGroup>
        </FormControl>
    )
}
