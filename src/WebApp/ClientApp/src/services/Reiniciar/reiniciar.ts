import axios from 'axios'; 

const fecha = () => {

  const hoy = new Date();

  const fecha = hoy.getFullYear() + '-' +  (hoy.getMonth() + 1) + '-' + hoy.getDate();

  const hora  = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds() + '.' + hoy.getMilliseconds();

  console.log( "Reiniciar: " + fecha + ' ' + hora );

  return fecha + ' ' + hora;

};

export default async function Reiniciar( valueLugar : string ) {

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
     // url: 'https://localhost:5001/api/Workday/restart',
      //url: 'https://presentismocda.herokuapp.com/',
      url: 'https://localhost:44323/api/Workday/restart',
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        header: {
          consulter: 'fruiz',
          date: '2021-12-17 09:00:00',
          messageid: '202111700900009992',
        },
        data: {
            user: 'fruiz', 
            hour: fecha(),
            // hour: "2022-01-14 09:45:00",
            idLugarTrabajo: idLugar, //Home= 1, Cliente=2, CDA= 3
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