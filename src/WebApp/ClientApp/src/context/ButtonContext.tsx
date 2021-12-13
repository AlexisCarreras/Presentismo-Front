import { createContext } from 'react';
import { ButtonState   } from '../interfaces/interfaces';

export type ButtonContextProps = {
    buttonState : ButtonState;
}

export const ButtonContext = createContext<ButtonContextProps>({} as ButtonContextProps );