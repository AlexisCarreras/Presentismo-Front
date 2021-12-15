import axios from 'axios'; 

export default async function IniciarDia() {

  try {
    const response = await axios({
      url: 'https://localhost:44323/api/Workday/initial',
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
          header: {
            //solo consulter
          consulter: 'lmessi',
          date: '2021-12-17 09:00:00',
          messageid: '202111700900009992',
        },
        data: {
            user: 'Fruiz', 
            hour: '2021-12-15 16:15:00.000',
            idLugarTrabajo: 2,
          },
        //vuela todo info
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
