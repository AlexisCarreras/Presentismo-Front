import axios from 'axios'; 

const fecha = () => {

  const hoy = new Date();

  const fecha = hoy.getFullYear() + '-' +  (hoy.getMonth() + 1) + '-' + hoy.getDate();

  const hora  = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds() + '.' + hoy.getMilliseconds();

  console.log( "Pausar: " + fecha + ' ' + hora );

  return fecha + ' ' + hora;

};

export default async function PausarDia() {

  try {
    const response = await axios({
      url: 'https://localhost:44323/api/Workday/pause',
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        header: {
          consulter: 'lmessi',
          hour: '2021-12-02 09:00:00',
          messageId: '202111700900009992',
        },
        data: {
            user: 'Acarreras', 
            hour: fecha(),
            idLugarTrabajo: 3,
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
