import axios from 'axios'; 

const fecha = () => {

  const hoy = new Date();

  const fecha = hoy.getFullYear() + '-' +  (hoy.getMonth() + 1) + '-' + hoy.getDate();

  const hora  = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds() + '.' + hoy.getMilliseconds();

  console.log( "Iniciar: " + fecha + ' ' + hora );

  return fecha + ' ' + hora;

};

export default async function IniciarDia( valueLugar : string ) {

  let idLugar : number = 0;

  if( valueLugar === 'Home Office' ) {
    idLugar = 1;
  }
  else if ( valueLugar === 'Cliente' ) {
    idLugar = 2;
  }
  else if ( valueLugar === 'Presencial CDA' ) {
    idLugar = 3;
  }

  try {
    const response = await axios({
      url: 'https://localhost:44323/api/Workday/initial',
      //url: 'https://localhost:5001/api/Workday/CurrentState',
      //url: 'https://presentismocda.herokuapp.com/',
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        header: {
          consulter: 'acarreras',
          date: '2021-12-17 09:00:00',
          messageid: '202111700900009992',
        },
        data: {
            user: 'acarreras', 
            hour: fecha(),
            // hour: "2022-01-14 09:00:00.000",
            idLugarTrabajo: idLugar,
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
