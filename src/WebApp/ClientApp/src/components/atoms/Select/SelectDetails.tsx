import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import LugarTrabajo from '../../../services/LugarTrabajo/lugarTrabajo';
import { Sync } from '@mui/icons-material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      fontFamily:'"Montserrat", sans-serif',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },

    root: {
      fontFamily:'"Montserrat", sans-serif',
    }
  }),
);
interface prop{
  idTrabajo:String,
  setIdLugarTrabajo:(value:string)=>void,
}
export const SelectDetails = ({idTrabajo,setIdLugarTrabajo}:prop) => {
  const classes = useStyles();
  const [isLoadig, setIsLoadig] = useState(true);
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: '',
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: string }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
      
    
    },);
    setIdLugarTrabajo(event.target.value)
  };
  const [lugarTrabajo, setLugarTrabajo] = useState<any>(null);

  useEffect(() => {
    async function lugarTrabajo () {
      const response: any =  await LugarTrabajo()
      
      if( response.status === 200 ){
          setLugarTrabajo(response.data);
          setIsLoadig(false);
          
      }
  } 
  lugarTrabajo();
  }, []);


  const opciones = () => {
    if (!isLoadig) {
      return (
        lugarTrabajo.data.map((a: any) =>
          <option
            key={a.id}
            value={a.id}
          >{a.nombre}</option>
        )
      )
    }
  }



  return (
    <div className={classes.root}>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Lugar de trabajo</InputLabel>
        <NativeSelect
          value={idTrabajo}
          onChange={handleChange}
          required={true}
          
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
            
          }}
        > <option aria-label="None" value="" />
          {opciones()}
          {/* <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}

        </NativeSelect>
        <FormHelperText>Selecciona un lugar de trabajo</FormHelperText>
      </FormControl>

    </div>
  );
}
