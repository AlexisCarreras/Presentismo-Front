import { MessageOutlined } from '@material-ui/icons';
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

export default async function ActualizarRegistro(inicio:Date,fin:Date,idLugar:number,Descripcion:String,
idProyecto:number,proyectoText:String,idTipoHora:number,idCliente:number,clienteText:String,
idRegistro:String) {

  try {
    const response = await axios({
      //url: 'https://localhost:44323/api/Workday/CurrentState',
      url: 'http://192.168.0.83:8080/DetailsUpdate',
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        header: {
          consulter: 'fruiz',
          date: fecha(),
          messageId: idMensagge(),
        },
        data: {
          registroId: idRegistro,
          begin: inicio,
          end: fin,
          idLugarTrabajo: idLugar,
          idProyecto: idProyecto,
          proyectoText: proyectoText,
          idTipoHora: idTipoHora,
          user: 'fruiz', 
          idCliente: idCliente,
          clienteText: clienteText,
          txt: Descripcion,
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