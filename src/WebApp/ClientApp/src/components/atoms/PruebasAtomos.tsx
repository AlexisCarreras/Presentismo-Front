// import { ButtonPrimary         } from './Buttons/Primary/ButtonPrimary';
import { ButtonSecondary       } from './Buttons/Secondary/ButtonSecondary';
import { AvatarProfile         } from './Avatar/AvatarProfile';
import { InputUsers            } from './Inputs/Users/InputUsers';
import { InputPassword         } from './Inputs/Password/InputPassword';
import { RadioButtonsActivated } from './RadioButtons/RadioButtonsActivated';
import { NameHeader            } from './Typography/NameHeader/NameHeader';
import { NotificationIcon      } from './ItemIcon/Notification/NotificationIcon';


export const PruebasAtomos = () => {

//   const buttonPrimary    :string = 'Pausar';
  const buttonSecondary  :string = 'Secondary';

  const avatarText       :string = 'AC';

  const valueRadioButton :string = 'Home Office';

  const userName         :string = 'Jaime Velasco';
 
    return (
        <> 
            {/* <ButtonPrimary         text=   { buttonPrimary   }  disabled = { false } onChange={ handleChange } /> */}
            <ButtonSecondary       text=   { buttonSecondary } />
            <hr />
            <AvatarProfile         text=   { avatarText      } />
            <hr />
            <RadioButtonsActivated value=  { valueRadioButton } disabled = { false } />
            <hr />
            <InputUsers />
            <InputPassword />
            <hr />  
            <NameHeader            name=   { userName } />
            <hr />
            <NotificationIcon />
        </>
    ) 
}
