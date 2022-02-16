import axios from 'axios'; 

const fecha = () => {

    const hoy = new Date();
  
    const fecha = hoy.getFullYear() + '-' +( '0' + (hoy.getMonth() + 1)).slice(-2) + '-' + hoy.getDate();
  
    return fecha;
  
  };

export default async function EstadoActual() {

  try {
    const response = await axios({
      //url: 'https://localhost:44323/api/Workday/CurrentState',
      url: 'http://192.168.0.83:8080/CurrentState',
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
            day: fecha(),
            // day: "2022-01-14"
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