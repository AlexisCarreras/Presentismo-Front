import { ButtonState } from '../interfaces/interfaces';

type ButtonAction =
    | { type: 'COMENZAR_DIA', payload: ButtonState }

export const buttonReducer = ( state: ButtonState, action: ButtonAction ) => {


//min 27:12 
    switch ( action.type ) {
        case 'COMENZAR_DIA':    
            return {
                ...state,
                textValue: state.textValue,
                activated: state.activated,
            }
        default:
            return state
    }

}