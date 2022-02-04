import {  makeStyles }      from '@material-ui/core';

import  cdaLogo             from '../../atoms/Logo/cdaLogo.png';
import {InputUsers}         from '../../atoms/Inputs/Users/InputUsers';
import {InputPassword}      from '../../atoms/Inputs/Password/InputPassword';
import { ButtonPrimary}     from '../../atoms/Buttons/Primary/ButtonPrimary';
import Logins               from '../../../services/Logins/iniciarSesion';
import { Home }             from '../../templates/Home/Home';
import { Login }            from '../../templates/Login/Login';

import { useState }     from 'react';

import ReactDOM from 'react-dom';

const useStyles = makeStyles({
    section1: {
        alignItems: 'center',
        display:' grid',
        height:' 100%',
        flexDirection: 'column',
    },
     img: {
        maxWidth: '100%',
        maxHeight: '100vh',
        margin: 'auto',
        marginBottom:' 26px',
    },
    section2: {
        marginBottom: '1rem',
        color: '#767D7D',
        marginTop: '1%',
        marginLeft: '5%',
        flexDirection: 'column',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '2.5rem',
        alignItems: 'center',
        paddingtop: '9rem',
    },
});


export const FormDetails = () => {
    
    const text = "Iniciar sesión";

    const [usuario , setUsuario] = useState(" ");
    const [password , setPassword] = useState(" ");
    const [valoratep , setvaloratep] = useState(false);
    const [valorateu , setvalorateu] = useState(false);
   
    const classes = useStyles();
   
    const  handleClick = async () => {


    const response: any =  await Logins(usuario,password)
     console.log(response)
        if (response.status === 200) {
                localStorage.setItem("token", (JSON.stringify(response.data)));
                ir();
        }

         if (response.status === 401) { 
            setvalorateu (true);
            setvaloratep (true);
            mequedo();
        }   
        }
        
    const ir = () =>{  
        ReactDOM.render(
        <Home />,
        document.getElementById('root'));  
    }

    const mequedo = () =>{ 
        ReactDOM.render(
            <Login />,
            document.getElementById('root'));
    }

    return (
        <div>
            <section className={classes.section1} >
                <img 
                    src={ cdaLogo } 
                    className={ classes.img } 
                    alt="Logo CDA" 
                />
            </section>

           {/* <form className="row"  > */}
           <form className= {classes.section1} >
                 <section className={classes.section2}>
                     <InputUsers usuario ={ usuario} setUsuario={setUsuario} valorateu= {valorateu} setValorateu= {setvalorateu}></InputUsers>
                  </section>    
                    
                 <section className={classes.section2}>
                     <InputPassword password ={ password} setPassword={setPassword} valoratep= {valoratep} setValoratep= {setvaloratep} />
                 </section> 

                 <div className={ classes.buttons }>
                        <ButtonPrimary 
                            text= { text }  
                            disabled = { false } 
                            onClick={handleClick}                      
                        /> 
                  </div>
            </form>
        </div>
    )
}


