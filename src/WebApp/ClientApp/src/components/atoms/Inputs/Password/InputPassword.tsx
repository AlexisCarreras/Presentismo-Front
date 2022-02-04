import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';



interface propUser {
    password : string;
    setPassword : (value :string)=> void;
    valoratep : boolean;
    setValoratep: (value:boolean)=>void;
  }

export const InputPassword = ({password , setPassword , valoratep , setValoratep }:propUser ) => {

 
    const handleInputChange = (e:any) => {
        setPassword( e.target.value );
       // console.log(password)
    }

    return (
        <form >
            
            <TextField required 
              id="input-with-icon-textfield"
              label="Contraseña"
              placeholder="Contraseña"
              type="password"
              value= {password}
              onChange= { handleInputChange }
              error={valoratep}
              InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                <LockIcon />
                </InputAdornment>
                ),
              }}
            />  
         
            
      </form>
    )
}