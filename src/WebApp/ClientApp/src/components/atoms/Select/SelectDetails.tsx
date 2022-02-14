import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'left',
  },
  }),
);
interface prop{
  id:number,
  setId:(value:number)=>void,
  setText:(value:string)=>void,
  text:String,
  subText:String,
  data:any,
}
export const SelectDetails = ({id,setId,text,subText,data,setText}:prop) => {
  const classes = useStyles();
 // const [isLoadig, setIsLoadig] = useState(true);
  const handleChange = (event: React.ChangeEvent<{value: string }>) => {
    setId(+event.target.value);
            data.map((item: any) => {
      if (item.id == event.target.value) {
          console.log(item.nombre)
          console.log(+event.target.value)
          setId(item.id)
          setText(item.nombre);
         
      }
            });

  };
  useEffect(() => {
    
      data.map((item: any) => {
      if (item.id == id) {
      console.log(item.nombre);
      console.log(item.id);
          setText(item.nombre);
          setId(item.id);
      }
            });
  }, []);


  const opciones = () => {

      return (
       data.map((a: any) =>
          <option
            key={a.id}
            value={a.id}
          >{a.nombre}</option>
          
        )

      )
    
  }
  return (
    <div className={classes.container}>
      <FormControl className={classes.container}>
        <InputLabel htmlFor="age-native-helper">{text}</InputLabel>
        <NativeSelect
          value={id}
          onChange={handleChange}
          required={true}
        > 
          {opciones()}         
        </NativeSelect>
        <FormHelperText>{subText}</FormHelperText>
      </FormControl>

    </div>
  );
}
