
import axios from 'axios'; 

const fecha = () => {

    const hoy = new Date();
  
    const fecha = hoy.getFullYear() + '-' +  ('0' + (hoy.getMonth()+1)).slice(-2) + '-' + ('0' + hoy.getDate()).slice(-2);
  
    return fecha;
  
  };

  const idMensagge = () => {
    const hoy = new Date();
  
    const fecha = (hoy.getFullYear()) + ('0' + (hoy.getMonth() + 1)).slice(-2) + ('0' + (hoy.getDate())).slice(-2)+
    ('0' + (hoy.getMinutes())).slice(-2) + ('0' + (hoy.getSeconds())).slice(-2)+('0' + (hoy.getMilliseconds())).slice(-3) + '7';
    console.log(fecha);
    return fecha;
  }
export default async function CabioInicio(idRegistro:number,beginChange:Date,justification:string) {
console.log('Descripcion del servicio:' + justification);
  try {
    const response = await axios({
      //url: 'https://localhost:44323/api/Workday/CurrentState',
      url: 'http://192.168.0.83:8080/StartChange',
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        header: {
          consulter: 'fruiz',
          date: fecha(),
          messageid: idMensagge(),
        },
        data: {
            idRegistro: idRegistro, 
            beginChange:beginChange,
            justification:justification,
          },
        info: {
          message: '',
          code: ''
        }
      }
    }) 
    console.log(response);
    
    return response;
  }
  catch (e) {
    console.log(e)
  }
  
}