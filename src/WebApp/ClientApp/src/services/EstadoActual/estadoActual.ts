import axios from 'axios'; 

const fecha = () => {

    const hoy = new Date();
  
    const fecha = hoy.getFullYear() + '-' +  (hoy.getMonth() + 1) + '-' + hoy.getDate();
  
    return fecha;
  
  };

export default async function EstadoActual() {

  try {
    const response = await axios({
      url: 'https://localhost:5001/api/Workday/CurrentState',
      // url: 'https://presentismocda.herokuapp.com/status',
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