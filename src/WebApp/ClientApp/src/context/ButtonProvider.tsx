import { useReducer    } from "react"

import { ButtonContext } from "./ButtonContext"
import { ButtonState   } from "../interfaces/interfaces"
import { buttonReducer } from "./ButtonReducer"

const INITIAL_STATE: ButtonState = {
    textValue: 'Inicio de actividades',
    activated: false,
}

interface ButtonProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const ButtonProvider = ({ children }: ButtonProviderProps) => {
    
     const [buttonState] = useReducer(buttonReducer, INITIAL_STATE);

    //  console.log("aca" + buttonState)
    
    return (
        <ButtonContext.Provider value={{
            buttonState
        }}>
            { children }
        </ButtonContext.Provider>
    )
}
