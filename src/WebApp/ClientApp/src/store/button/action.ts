const comenzar = () => {
    return {
        type: 'COMENZAR_DIA',
        payload: 'Comenzar'
    };
};

const pausar = () => {
    return {
        type: 'PAUSAR',
        payload: 'Pausar'
    };
};

const reanudar = () => {
    return {
        type: 'REANUDAR',
        payload: 'Reanudar'
    };
};

const finalizar = () => {
    return {
        type: 'FINALIZAR_DIA',
        payload: 'Finalizar'
    };
};

export {
    comenzar, 
    pausar,
    reanudar,
    finalizar
};