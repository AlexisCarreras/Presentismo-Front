
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

interface propUser {
  usuario : string;
  setUsuario : (value :string)=> void;
  valorateu : boolean;
  setValorateu: (value:boolean)=>void;
}

export const InputUsers = ({usuario , setUsuario , valorateu , setValorateu  }:propUser ) => {


   const handleInputChange = (e:any) => {
       setUsuario( e.target.value );
   }

  
    return (
        <form >
          <TextField required 
            id="input-with-icon-textfield"
            label="Email"
            placeholder="usuario@cdainfo.com"
            type="email"
            value = { usuario }
            onChange= { handleInputChange }
            error = {valorateu} 
             InputProps={{ 
                 startAdornment: (
                 <InputAdornment position="start">
                 <AccountCircle />
                 </InputAdornment>
                
                ),
                
              }}
         />
      </form>
    )
}
