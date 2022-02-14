import { makeStyles       } from '@material-ui/core';
import { NotificationIcon } from '../../atoms/ItemIcon/Notification/NotificationIcon';
import { NameHeader       } from '../../atoms/Typography/NameHeader/NameHeader';
import { AvatarProfile    } from '../../atoms/Avatar/AvatarProfile';
import   cdaLogo            from '../../atoms/Logo/cdaLogo.png';
import { useState } from 'react';


const useStyles = makeStyles({
    root: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: '7%',
        width: '100%',
    },
    section1: {
        width: '74%',
        marginLeft: '3%',
    },
    section2: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '3.5rem',
        width: '35%', 
    },
    name: {
  
        paddingLeft:'15%',
     
    },
    img: {
        width: '110px',
    },
});

export const ItemsHeader = () => {

    const classes = useStyles();

    var userName :string='Buenos días Facundo'
    
    var avatarText :string = 'FR';

    const saludo = () =>{

        const hoy = new Date();
        console.log(hoy.getHours())

        if (hoy.getHours() < 12){

            userName='Buenos días Facundo'
        }else if(hoy.getHours()>=12 && hoy.getHours()<20){
            userName='Buenas tardes Facundo'
        }else{
            userName='Buenas noches Facundo'
        }
      

        return userName;

    }

    return (
        <div className={ classes.root } >
            <section className={ classes.section1 } >
                <img 
                    src={ cdaLogo } 
                    className={ classes.img } 
                    alt="Logo CDA" 
                />
            </section>
            <section className={ classes.section2 } >
                <NotificationIcon  />
          
                <NameHeader    name= { saludo()  } />
             
                <AvatarProfile text= { avatarText } />
                
            </section>
        </div>
    )
}
